const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Welcome to the Scrivito obj/widget generator!");
  }

  start() {
    this.prompt({
      type: "list",
      name: "type",
      message: "What do you want to generate?",
      choices: ["Generate a new Obj", "Generate a new Widget"],
    }).then(answers => {
      if (answers.type === "Generate a new Widget") {
        this.composeWith("scrivito:widget");
      }
      if (answers.type === "Generate a new Obj") {
        this.composeWith("scrivito:obj");
      }
    });
  }

  _creatingUpperName(name) {
    const defNameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return defNameUpper;
  }