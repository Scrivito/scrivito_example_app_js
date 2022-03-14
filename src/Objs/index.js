function importAll(r) {
  r.keys().forEach(r);
}

// import all *ObjClass.js and *Component.js files under src/Objs/
importAll(require.context("./", true, /(ObjClass|Component)\.js$/));
