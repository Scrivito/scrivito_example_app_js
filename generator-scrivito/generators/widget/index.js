const Generator = require("yeoman-generator");
const lodash = require("lodash");
const gulpPrettier = require("gulp-prettier");

module.exports = class extends Generator {
  start() {
    this.prompt({
      type: "input",
      name: "widgetClassName",
      message: "Enter a name of the Widget (e.g. GiphyWidget):",
    }).then(answers => {
      const widgetClassName = answers.widgetClassName.trim();
      const folder = `src/Widgets/${widgetClassName}`;
      const humanFriendlyName = lodash.startCase(
        widgetClassName.replace(/Widget$/, "")
      );
      this._generateFile(
        "XWidgetComponent.js.ejs",
        `${folder}/${widgetClassName}Component.js`,
        { widgetClassName }
      );
      this._generateFile(
        "XWidgetEditingConfig.js.ejs",
        `${folder}/${widgetClassName}EditingConfig.js`,
        { widgetClassName, humanFriendlyName }
      );
      this._generateFile(
        "XWidgetClass.js.ejs",
        `${folder}/${widgetClassName}Class.js`,
        { widgetClassName }
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
