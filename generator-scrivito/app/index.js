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
      choices: ["An Obj class", "A Widget class"],
    }).then(answers => {
      if (answers.type === "An Obj class") {
        this.composeWith("scrivito:obj");
      }
      if (answers.type === "A Widget class") {
        this.composeWith("scrivito:widget");
      }
    });
  }
};
