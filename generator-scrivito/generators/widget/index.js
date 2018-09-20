const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  start() {
    this._creatingWidget();
  }

  _creatingName(name) {
    const defaultName = name;
    return defaultName;
  }

  _creatingUpperName(name) {
    const defNameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return defNameUpper;
  }

  _creatingWidget() {
    this.prompt({
      type: "input",
      name: "nameWidget",
      message: "Enter a name of the Widget: ",
    }).then(answers => {
      const defaultName = this._creatingName(answers.nameWidget);
      const defNameUpper = this._creatingUpperName(defaultName);
      this.destinationRoot(defNameUpper);
      const defNameUpperWidget = `${defNameUpper}Widget`;
      this._writeWidgetComponent(defaultName, defNameUpper, defNameUpperWidget);
      this._writeWidgetConfig(defaultName, defNameUpper, defNameUpperWidget);
      this._writeWidgetClass(defaultName, defNameUpper, defNameUpperWidget);
    });
  }

  // widgets

  _writeWidgetComponent(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("XWidgetComponent.js"),
      this.destinationPath(`${defNameUpper}WidgetComponent` + `.js`),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget,
      }
    );
  }

  _writeWidgetConfig(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("XWidgetEditingConfig.js"),
      this.destinationPath(`${defNameUpper}WidgetEditingConfig` + `.js`),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget,
      }
    );
  }

  _writeWidgetClass(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("XWidgetClass.js"),
      this.destinationPath(`${defNameUpper}WidgetClass` + `.js`),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget,
      }
    );
  }
};
