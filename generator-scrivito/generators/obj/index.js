const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  start() {
    this._creatingObj();
  }

  _creatingName(name) {
    const defaultName = name;
    return defaultName;
  }

  _creatingUpperName(name) {
    const defNameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return defNameUpper;
  }

  _creatingObj() {
    this.prompt([
      {
        type: "input",
        name: "nameObj",
        message: "Enter the name of the Obj: ",
      },
      {
        type: "list",
        name: "type",
        message: "What do you want to generate?",
        choices: [
          "Generate an Obj with a react component (default)",
          "Generate an Obj without a react component (e.g. like a download)",
        ],
      },
    ]).then(answers => {
      const defaultName = this._creatingName(answers.nameObj);
      const defNameUpper = this._creatingUpperName(defaultName);
      this.destinationRoot(defNameUpper);

      switch (answers.type) {
        case "Generate an Obj with a react component (default)":
          this._writeObjComponent(defaultName, defNameUpper);
          this._writeXObjConfig(defaultName, defNameUpper);
          this._writeXObjClass(defaultName, defNameUpper);

        case "Generate an Obj without a react component (e.g. like a download)":
          this._writeYObjConfig(defaultName, defNameUpper);
          this._writeYObjClass(defaultName, defNameUpper);
      }
    });
  }

  // objects

  _writeObjComponent(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XObjcomponent.js"),
      this.destinationPath(`${defNameUpper}Component` + `.js`),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeXObjConfig(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XEditingConfig.js"),
      this.destinationPath(`${defNameUpper}EditingConfig` + `.js`),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeYObjConfig(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("YEditingConfig.js"),
      this.destinationPath(`${defNameUpper}EditingConfig` + `.js`),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeXObjClass(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XObjClass.js"),
      this.destinationPath(`${defNameUpper}ObjClass` + `.js`),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeYObjClass(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("YObjClass.js"),
      this.destinationPath(`${defNameUpper}ObjClass` + `.js`),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }
};
