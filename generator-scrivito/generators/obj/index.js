const Generator = require("yeoman-generator");
const capitalizeFirstLetter = require("../../utils/capitalizeFirstLetter");

module.exports = class extends Generator {
  start() {
    this.prompt([
      {
        type: "input",
        name: "objClassName",
        message: "Enter the name of the Obj (e.g. MyPage):",
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
      const objClassName = answers.objClassName;
      const defNameUpper = capitalizeFirstLetter(objClassName);

      switch (answers.type) {
        case "Generate an Obj with a react component (default)":
          this._writeXObjComponent(objClassName, defNameUpper);
          this._writeXObjConfig(objClassName, defNameUpper);
          this._writeXObjClass(objClassName, defNameUpper);
          break;
        case "Generate an Obj without a react component (e.g. like a download)":
          this._writeYObjConfig(objClassName, defNameUpper);
          this._writeYObjClass(objClassName, defNameUpper);
          break;
      }
    });
  }

  _writeXObjComponent(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XObjComponent.js"),
      this.destinationPath(
        `src/Objs/${defNameUpper}/${defNameUpper}Component.js`
      ),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeXObjConfig(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XEditingConfig.js"),
      this.destinationPath(
        `src/Objs/${defNameUpper}/${defNameUpper}EditingConfig.js`
      ),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeYObjConfig(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("YEditingConfig.js"),
      this.destinationPath(
        `src/Objs/${defNameUpper}/${defNameUpper}EditingConfig.js`
      ),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeXObjClass(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XObjClass.js"),
      this.destinationPath(
        `src/Objs/${defNameUpper}/${defNameUpper}ObjClass.js`
      ),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeYObjClass(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("YObjClass.js"),
      this.destinationPath(
        `src/Objs/${defNameUpper}/${defNameUpper}ObjClass.js`
      ),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }
};
