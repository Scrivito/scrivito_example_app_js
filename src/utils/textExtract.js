import isString from "./isString";
import { lookupTextExtract } from "./textExtractRegistry";
import textExtractFromHtml from "./textExtractFromHtml";

function textExtractFromObj(obj) {
  return textExtractFromItem(obj);
}

function textExtractFromWidgetlist(widgetlist) {
  const textExtractValues = widgetlist.map(widget =>
    textExtractFromItem(widget)
  );
  return arrayToString(textExtractValues);
}

function textExtractFromItem(objOrWidget) {
  const className = objOrWidget.objClass();
  const attributes = lookupTextExtract(className);

  if (!attributes || !attributes.length) {
    return "";
  }

  const textExtractValues = attributes.map(({ attribute, type }) => {
    if (type === "metadata") {
      return textExtractFromMetadata(objOrWidget, attribute);
    }

    const value = objOrWidget.get(attribute);

    if (!assertValidValue(value, type)) {
      console.warn(
        `Attribute '${attribute}' of className '${className}' is not of type '${type}'!`
      );
      return "";
    }

    switch (type) {
      case "html":
        return textExtractFromHtml(value);
      case "string":
        return value;
      case "widgetlist":
        return textExtractFromWidgetlist(value);
      default: {
        console.warn("[textExtractFromObj] type is not (yet?) support:", type);
        return "";
      }
    }
  });

  return arrayToString(textExtractValues);
}

function assertValidValue(value, type) {
  switch (type) {
    case "html":
      return isString(value);
    case "string":
      return isString(value);
    case "widgetlist":
      return Array.isArray(value);
  }

  return true;
}

function textExtractFromMetadata(objOrWidget, attribute) {
  if (!objOrWidget.metadata) {
    return "";
  }

  return objOrWidget.metadata().get(attribute) || "";
}

function arrayToString(array) {
  return array
    .map(value => value.trim())
    .filter(value => value)
    .join("\n");
}

export { textExtractFromObj, textExtractFromWidgetlist };
