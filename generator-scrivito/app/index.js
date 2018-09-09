"use strict";

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Hello in scrivito Obj/Widgets generator!");
    this.option("obj", { type: String });
    this.option("widget", { type: String });
  }
  start() {
    if (this.options.obj) {
      this._creatingObj();
    } else if (this.options.widget) {
      this._creatingWidget();
    } else if (!this.options.obj || !this.options.widget) {
      this.prompt({
        type: "list",
        name: "type",
        message: "Choose which one template you want to create: ",
        choices: ["Generate a new Obj", "Generate a new Widget"]
      }).then(answers => {
        if (answers.type === "Generate a new Widget") {
          this._creatingWidget();
        }
        if (answers.type === "Generate a new Obj") {
          this._creatingObj();
        }
      });
    }
  }

  _creatingName(name) {
    const defaultName = name;
    return defaultName;
  }

  _creatingUpperName(name) {
    const defNameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return defNameUpper;
  }

  _creatingObj() {
    this.prompt([
      {
        type: "input",
        name: "nameObj",
        message: "Enter a name of the Obj: "
      },
      {
        type: "list",
        name: "type",
        message: "Choose which one template you want to create: ",
        choices: [
          "Generate an Obj with a react component (default)",
          "Generate an Obj without a react component (e.g. like a download)"
        ]
      }
    ]).then(answers => {
      const defaultName = this._creatingName(answers.nameObj);
      const defNameUpper = this._creatingUpperName(defaultName);
      this.destinationRoot(defNameUpper);

      switch (answers.type) {
        case "Generate an Obj with a react component (default)":
          this._writeObjComponent(defaultName, defNameUpper);
          this._writeXObjConfig(defaultName, defNameUpper);
          this._writeXObjClass(defaultName, defNameUpper);

        case "Generate an Obj without a react component (e.g. like a download)":
          this._writeYObjConfig(defaultName, defNameUpper);
          this._writeYObjClass(defaultName, defNameUpper);
      }
    });
  }

  _creatingWidget() {
    this.prompt({
      type: "input",
      name: "nameWidget",
      message: "Enter a name of the Widget: "
    }).then(answers => {
      const defaultName = this._creatingName(answers.nameWidget);
      const defNameUpper = this._creatingUpperName(defaultName);
      this.destinationRoot(defNameUpper);
      const defNameUpperWidget = defNameUpper + "Widget";
      this._writeWidgetComponent(defaultName, defNameUpper, defNameUpperWidget);
      this._writeWidgetConfig(defaultName, defNameUpper, defNameUpperWidget);
      this._writeWidgetClass(defaultName, defNameUpper, defNameUpperWidget);
    });
  }

  // objects

  _writeObjComponent(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XObjcomponent.js"),
      this.destinationPath(defNameUpper + "Component" + ".js"),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeXObjConfig(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XEditingConfig.js"),
      this.destinationPath(defNameUpper + "EditingConfig" + ".js"),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeYObjConfig(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("YEditingConfig.js"),
      this.destinationPath(defNameUpper + "EditingConfig" + ".js"),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeXObjClass(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("XObjClass.js"),
      this.destinationPath(defNameUpper + "ObjClass" + ".js"),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeYObjClass(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("YObjClass.js"),
      this.destinationPath(defNameUpper + "ObjClass" + ".js"),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  // widgets

  _writeWidgetComponent(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("widgetComponent.js"),
      this.destinationPath(defNameUpper + "WidgetComponent" + ".js"),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget
      }
    );
  }

  _writeWidgetConfig(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("widgetEditingConfig.js"),
      this.destinationPath(defNameUpper + "WidgetEditingConfig" + ".js"),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget
      }
    );
  }

  _writeWidgetClass(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("widgetClass.js"),
      this.destinationPath(defNameUpper + "WidgetClass" + ".js"),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget
      }
    );
  }
};
