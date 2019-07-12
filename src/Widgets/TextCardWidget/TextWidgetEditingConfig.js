import * as Scrivito from "scrivito";
import headlineWidgetIcon from "../../assets/images/headline_widget.svg";

Scrivito.provideEditingConfig("TextCardWidget", {
  title: "TextCard",
  thumbnail: headlineWidgetIcon,
  attributes: {
    header: {
      title: "Heading tag",
      description: "Text of Heading tag",
    },
    headerColor: {
      title: "Heading tag color",
      description: "Background color of Heading tag",
      values: [
        { value: "black", title: "Black" },
        { value: "pink", title: "Pink" },
        { value: "peach", title: "Peach" },
        { value: "green", title: "Green" },
      ],
    },
    title: {
      title: "Title",
      description: "Title of Text card",
    },
    description: {
      title: "Description",
      description: "Description of Text card",
    },
  },
  properties: ["header", "headerColor", "title", "description"],
  initialContent: {
    header: "",
    headColor: "black",
    title: "Title",
    description: "Description",
  },
});
