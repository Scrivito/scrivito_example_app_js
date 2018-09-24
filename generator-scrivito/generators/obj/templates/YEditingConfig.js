import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("<%= nameUpper %>", {
  attributes: {
    tags: {
      title: "Tags",
      description: "Make it easier to find this by adding some tags.",
    },
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
  },
  properties: ["title", "tags"],
});
