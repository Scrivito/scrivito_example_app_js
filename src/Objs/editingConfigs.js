function importAll(r) {
  r.keys().forEach(r);
}

// import all *EditingConfig.js files under src/Objs/
importAll(require.context("./", true, /EditingConfig\.js$/));
