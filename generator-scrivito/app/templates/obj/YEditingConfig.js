import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("<%= nameUpper %>", {
  title: "<%= nameUpper %>",
  attributes: {
    title: {
      title: "Name",
      description: "description"
    }
  },
  properties: ["title"]
});
