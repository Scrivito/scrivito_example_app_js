import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("StudentWidget", {
  title: "Student",
  attributes: {
    alignment: {
      title: "Alignment",
      description: "Default: center",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
  },
  properties: ["city", "name", "birthday", "height", "image"],
  initialContent: {
    alignment: "center"
  }
});
