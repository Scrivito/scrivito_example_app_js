const Generator = require("yeoman-generator");
const lodash = require("lodash");

module.exports = class extends Generator {
  start() {
    this.prompt({
      type: "input",
      name: "objClassName",
      message: "Enter the name of the Obj (e.g. MyPage):",
    }).then(answers => {
      const objClassName = answers.objClassName;
      const humanFriendlyName = lodash.startCase(objClassName);
      this._writeXObjComponent(objClassName);
      this._writeXEditingConfig(objClassName, humanFriendlyName);
      this._writeXObjClass(objClassName);
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

  _writeXObjClass(objClassName) {
    this.fs.copyTpl(
      this.templatePath("XObjClass.js.ejs"),
      this.destinationPath(
        `src/Objs/${objClassName}/${objClassName}ObjClass.js`
      ),
      { objClassName }
    );
  }

};
