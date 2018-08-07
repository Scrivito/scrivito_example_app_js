import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("Video", {
  attributes: {
    tags: {
      title: "Tags",
      description: "Make it easier to find this video by adding some tags.",
    },
  },
  properties: ["tags"],
});
