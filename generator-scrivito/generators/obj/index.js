const Generator = require("yeoman-generator");
const lodash = require("lodash");
const gulpPrettier = require("gulp-prettier");

module.exports = class extends Generator {
  start() {
    this.registerTransformStream(gulpPrettier());

    this.prompt({
      type: "input",
      name: "objClassName",
      message: "Enter the name of the Obj (e.g. FaqPage):",
    }).then(answers => {
      const objClassName = answers.objClassName;
      const folder = `src/Objs/${objClassName}`;
      const humanFriendlyName = lodash.startCase(objClassName);
      this._generateFile(
        "XComponent.js.ejs",
        `${folder}/${objClassName}Component.js`,
        { objClassName }
      );
      this._generateFile(
        "XEditingConfig.js.ejs",
        `${folder}/${objClassName}EditingConfig.js`,
        { objClassName, humanFriendlyName }
      );
      this._generateFile(
        "XObjClass.js.ejs",
        `${folder}/${objClassName}ObjClass.js`,
        {
          objClassName,
        }
      );
    });
  }

  _generateFile(templatePath, destinationPath, context) {
    this.fs.copyTpl(
      this.templatePath(templatePath),
      this.destinationPath(destinationPath),
      context
    );
  }
};
