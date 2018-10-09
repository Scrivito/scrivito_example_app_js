const Generator = require("yeoman-generator");
const lodash = require("lodash");
const gulpPrettier = require("gulp-prettier");

module.exports = class extends Generator {
  start() {
    this.prompt({
      type: "input",
      name: "objClassName",
      message: "Enter the name of the Obj (e.g. FaqPage):",
      validate(answers) {
        if (answers.length === 0) {
          return "A name for the object class must be provided";
        }
        if (answers.charAt(0) !== answers.charAt(0).toUpperCase()) {
          return "The name must start with a capital letter";
        }
        if (answers.match(/\s/)) {
          return "The name must not contain spaces";
        }
        return true;
      },
    }).then(answers => {
      const objClassName = answers.objClassName.trim();
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
        { objClassName }
      );
      this.registerTransformStream(gulpPrettier());
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
