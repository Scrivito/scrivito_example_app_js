import * as Scrivito from "scrivito";

export const BlogOverviewWidget = Scrivito.provideWidgetClass(
  "BlogOverviewWidget",
  {
    attributes: {
      maxItems: "integer",
      author: ["reference", { only: "Author" }],
      tags: "stringlist",
    },
  }
);
