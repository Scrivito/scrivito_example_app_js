const Generator = require("yeoman-generator");
const lodash = require("lodash");
const gulpPrettier = require("gulp-prettier");

module.exports = class extends Generator {
  start() {
    if (this.options.name && this._validate(this.options.name) === true) {
      this._generateFiles(this.options.name);
      return ;
    }

    this.prompt({
      type: "input",
      name: "widgetClassName",
      message: "Enter the name of the new Widget class (e.g. GiphyWidget):",
      filter(input) {
        return input.trim();
      },
      validate: (input) => {
        return this._validate(input);
      },
    }).then(answers => {
      this._generateFiles(answers.widgetClassName);
    });
  }

  _validate(input) {
    if (input.length === 0) {
      return "A name for the widget class must be provided";
    }
    if (input.charAt(0) !== input.charAt(0).toUpperCase()) {
      return "The name must start with a capital letter";
    }
    if (input.match(/\s/)) {
      return "The name must not contain spaces";
    }
    return true;
  }

  _generateFiles(widgetClassName) {
    const folder = `src/Widgets/${widgetClassName}`;
    const humanFriendlyName = lodash.startCase(
      widgetClassName.replace(/Widget$/, "")
    );
    const cssClassName = lodash.kebabCase(widgetClassName);
    this._generateFile(
      "XWidgetClass.js.ejs",
      `${folder}/${widgetClassName}Class.js`,
      { widgetClassName }
    );
    this._generateFile(
      "XWidgetEditingConfig.js.ejs",
      `${folder}/${widgetClassName}EditingConfig.js`,
      { widgetClassName, humanFriendlyName }
    );
    this._generateFile(
      "XWidgetComponent.js.ejs",
      `${folder}/${widgetClassName}Component.js`,
      { widgetClassName, cssClassName }
    );
    this._generateFile("X.scss.ejs", `${folder}/${widgetClassName}.scss`, {
      widgetClassName,
      cssClassName,
    });
    this.registerTransformStream(gulpPrettier());
  }

  _generateFile(templatePath, destinationPath, context) {
    this.fs.copyTpl(
      this.templatePath(templatePath),
      this.destinationPath(destinationPath),
      context
    );
  }
};
