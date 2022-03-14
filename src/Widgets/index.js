function importAll(r) {
  r.keys().forEach(r);
}

// import all *WidgetClass.js and *WidgetComponent.js files under src/Widgets/
importAll(require.context("./", true, /Widget(Class|Component)\.js$/));
