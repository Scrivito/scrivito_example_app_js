function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Components/ScrivitoExtensions/
importAll(require.context("./", true, /\.js$/));
