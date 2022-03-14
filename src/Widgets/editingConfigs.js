function importAll(r) {
  r.keys().forEach(r);
}

// import all *WidgetEditingConfig.js files under src/Widgets/
importAll(require.context("./", true, /WidgetEditingConfig\.js$/));
