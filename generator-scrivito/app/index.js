const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Welcome to the Scrivito Obj/Widget generator");
  }

  start() {
    this.prompt({
      type: "list",
      name: "type",
      message: "What do you want to generate?",
      choices: ["Generate a new Obj class", "Generate a new Widget class"],
    }).then(answers => {
      if (answers.type === "Generate a new Widget class") {
        this.composeWith("scrivito:widget");
      }
      if (answers.type === "Generate a new Obj class") {
        this.composeWith("scrivito:obj");
      }
    });
  }
};
