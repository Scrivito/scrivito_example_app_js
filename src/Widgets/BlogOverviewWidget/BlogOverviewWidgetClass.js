import * as Scrivito from "scrivito";

const BlogOverviewWidget = Scrivito.provideWidgetClass("BlogOverviewWidget", {
  attributes: {
    maxItems: "integer",
    author: ["reference", { only: "Author" }],
    tags: "stringlist",
  },
});

export default BlogOverviewWidget;
