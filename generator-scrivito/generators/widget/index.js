const Generator = require("yeoman-generator");
const lodash = require("lodash");

module.exports = class extends Generator {
  start() {
    this.prompt({
      type: "input",
      name: "widgetClassName",
      message: "Enter a name of the Widget (e.g. MyImageWidget):",
    }).then(answers => {
      const widgetClassName = answers.widgetClassName;
      const humanFriendlyName = lodash.startCase(
        widgetClassName.replace(/Widget$/, "")
      );
      this._writeWidgetComponent(widgetClassName);
      this._writeWidgetEditingConfig(widgetClassName, humanFriendlyName);
      this._writeWidgetClass(widgetClassName);
    });
  }

  _writeWidgetComponent(widgetClassName) {
    this.fs.copyTpl(
      this.templatePath("XWidgetComponent.js.ejs"),
      this.destinationPath(
        `src/Widgets/${widgetClassName}/${widgetClassName}Component.js`
      ),
      { widgetClassName }
    );
  }

  _writeWidgetEditingConfig(widgetClassName, humanFriendlyName) {
    this.fs.copyTpl(
      this.templatePath("XWidgetEditingConfig.js.ejs"),
      this.destinationPath(
        `src/Widgets/${widgetClassName}/${widgetClassName}EditingConfig.js`
      ),
      {
        widgetClassName,
        humanFriendlyName,
      }
    );
  }

  _writeWidgetClass(widgetClassName) {
    this.fs.copyTpl(
      this.templatePath("XWidgetClass.js.ejs"),
      this.destinationPath(
        `src/Widgets/${widgetClassName}/${widgetClassName}Class.js`
      ),
      { widgetClassName }
    );
  }
};
