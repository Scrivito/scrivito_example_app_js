const Generator = require("yeoman-generator");
const capitalizeFirstLetter = require("../../utils/capitalizeFirstLetter");

module.exports = class extends Generator {
  start() {
    this.prompt({
      type: "input",
      name: "widgetClassName",
      message: "Enter a name of the Widget (e.g. MyWidget):",
    }).then(answers => {
      const widgetClassName = answers.widgetClassName;
      const defNameUpperWidget = `${widgetClassName}Widget`;
      this._writeWidgetComponent(widgetClassName, defNameUpperWidget);
      this._writeWidgetEditingConfig(widgetClassName, defNameUpperWidget);
      this._writeWidgetClass(widgetClassName, defNameUpperWidget);
    });
  }

  _writeWidgetComponent(widgetClassName, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("XWidgetComponent.js"),
      this.destinationPath(
        `src/Widgets/${defNameUpperWidget}/${widgetClassName}WidgetComponent.js`
      ),
      {
        widgetClassName,
        nameUpperWidget: defNameUpperWidget,
      }
    );
  }

  _writeWidgetEditingConfig(widgetClassName, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("XWidgetEditingConfig.js"),
      this.destinationPath(
        `src/Widgets/${defNameUpperWidget}/${widgetClassName}WidgetEditingConfig.js`
      ),
      {
        widgetClassName,
        nameUpperWidget: defNameUpperWidget,
      }
    );
  }

  _writeWidgetClass(widgetClassName, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("XWidgetClass.js"),
      this.destinationPath(
        `src/Widgets/${defNameUpperWidget}/${widgetClassName}WidgetClass.js`
      ),
      {
        widgetClassName,
        nameUpperWidget: defNameUpperWidget,
      }
    );
  }
};
