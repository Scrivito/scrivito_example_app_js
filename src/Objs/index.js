function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Objs/
importAll(require.context("./", true, /\.js$/));
