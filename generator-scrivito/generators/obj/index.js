const Generator = require("yeoman-generator");

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

      switch (answers.type) {
        case "Generate an Obj with a react component (default)":
          this._writeXObjComponent(objClassName);
          this._writeXEditingConfig(objClassName);
          this._writeXObjClass(objClassName);
          break;
        case "Generate an Obj without a react component (e.g. like a download)":
          this._writeYEditingConfig(objClassName);
          this._writeYObjClass(objClassName);
          break;
      }
    });
  }

  _writeXObjComponent(objClassName) {
    this.fs.copyTpl(
      this.templatePath("XObjComponent.js.ejs"),
      this.destinationPath(
        `src/Objs/${objClassName}/${objClassName}Component.js`
      ),
      { objClassName }
    );
  }

  _writeXEditingConfig(objClassName) {
    this.fs.copyTpl(
      this.templatePath("XEditingConfig.js.ejs"),
      this.destinationPath(
        `src/Objs/${objClassName}/${objClassName}EditingConfig.js`
      ),
      { objClassName }
    );
  }

  _writeYEditingConfig(objClassName) {
    this.fs.copyTpl(
      this.templatePath("YEditingConfig.js.ejs"),
      this.destinationPath(
        `src/Objs/${objClassName}/${objClassName}EditingConfig.js`
      ),
      { objClassName }
    );
  }

  _writeXObjClass(objClassName) {
    this.fs.copyTpl(
      this.templatePath("XObjClass.js.ejs"),
      this.destinationPath(
        `src/Objs/${objClassName}/${objClassName}ObjClass.js`
      ),
      { objClassName }
    );
  }

  _writeYObjClass(objClassName) {
    this.fs.copyTpl(
      this.templatePath("YObjClass.js.ejs"),
      this.destinationPath(
        `src/Objs/${objClassName}/${objClassName}ObjClass.js`
      ),
      { objClassName }
    );
  }
};
