// Only use this method until https://github.com/infopark/scrivito_js/issues/8721 is released.
export function widgets(rootWidget) {
  const children = [];

  Object.entries(rootWidget.attributeDefinitions()).forEach(
    ([attrName, [attrType]]) => {
      if (attrType === "widgetlist") {
        rootWidget.get(attrName).forEach((subWidget) => {
          children.push(subWidget);
          children.push(...widgets(subWidget));
        });
      }
    }
  );

  return children;
}
