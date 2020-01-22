import * as Scrivito from "scrivito";

const StudentWidget = Scrivito.provideWidgetClass("StudentWidget", {
  attributes: {
    name: "string",
    birthday: "date",
    city: "string",
    height: "string",
    image: ["reference", {only: ["Image"]}],
    alignment: ["enum", { values: ["left", "center", "right"] }]
  },
});

export default StudentWidget;
