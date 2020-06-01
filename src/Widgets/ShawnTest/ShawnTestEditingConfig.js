import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ShawnTest", {
  title: "Shawn Test",
  initialContent: {
    headline: "Lorem Ipsum",
    body: "<b>This is some test body content</b>",
  },
  attributes: {
    body: {
      title: "HTML/Text",
      description: "The actual source code of this text",
    },
    headline: {
      title: "Title",
      description: "Title of the page",
    },
  },
  properties: ["headline", "body"],
});
