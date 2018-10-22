const Generator = require("yeoman-generator");
const lodash = require("lodash");
const gulpPrettier = require("gulp-prettier");

module.exports = class extends Generator {
  start() {
    this.prompt({
      type: "input",
      name: "objClassName",
      message: "Enter the name of the new Obj class (e.g. FaqPage):",
      filter(input) {
        return input.trim();
      },
      validate(input) {
        if (input.length === 0) {
          return "A name for the object class must be provided";
        }
        if (input.charAt(0) !== input.charAt(0).toUpperCase()) {
          return "The name must start with a capital letter";
        }
        if (input.match(/\s/)) {
          return "The name must not contain spaces";
        }
        return true;
      },
    }).then(answers => {
      const objClassName = answers.objClassName;
      const folder = `src/Objs/${objClassName}`;
      const humanFriendlyName = lodash.startCase(objClassName);
      this._generateFile(
        "XObjClass.js.ejs",
        `${folder}/${objClassName}ObjClass.js`,
        { objClassName }
      );
      this._generateFile(
        "XEditingConfig.js.ejs",
        `${folder}/${objClassName}EditingConfig.js`,
        { objClassName, humanFriendlyName }
      );
      this._generateFile(
        "XComponent.js.ejs",
        `${folder}/${objClassName}Component.js`,
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
