const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Welcome to the Scrivito Obj/Widget generator");
    this.argument("type", { type: String, required: false, desc: "Type of generator to use 'widget' or 'obj'" });
    this.argument("name", { type: String, required: false, desc: "Name of the class" });
  }

  start() {
    if (this.options.type) {
      return this.composeWith("scrivito:" + this.options.type, {name: this.options.name});
    }

    this.prompt({
      type: "list",
      name: "type",
      message: "What do you want to generate?",
      choices: ["An Obj class", "A Widget class"],
    }).then((answers) => {
      if (answers.type === "An Obj class") {
        this.composeWith("scrivito:obj", {name: this.options.name});
      }
      if (answers.type === "A Widget class") {
        this.composeWith("scrivito:widget", {name: this.options.name});
      }
    });
  }
};
