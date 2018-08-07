import * as Scrivito from "scrivito";
import isString from "./isString";

const textExtractRegistry = {};

function registerTextExtract(className, attributes) {
  if (!isString(className)) {
    console.warn(
      `registerTextExtract: className '${className}' needs to be a string!`
    );
  }
  if (!Scrivito.getClass(className)) {
    console.warn(
      `registerTextExtract: className '${className}' is not defined!`
    );
  }
  if (textExtractRegistry[className]) {
    console.warn(
      `registerTextExtract: className '${className}' is already registered!`
    );
  }

  textExtractRegistry[className] = attributes;
}

function lookupTextExtract(className) {
  return textExtractRegistry[className];
}

export { registerTextExtract, lookupTextExtract };
