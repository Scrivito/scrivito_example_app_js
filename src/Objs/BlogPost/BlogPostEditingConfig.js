import * as Scrivito from "scrivito";
import blogPostObjIcon from "../../assets/images/blog_post_obj.svg";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import { metadata, socialCards } from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("BlogPost", {
  title: "Blog Post",
  thumbnail: blogPostObjIcon,
  attributes: {
    ...metadata.editingConfigAttributes,
    author: {
      title: "Author",
    },
    publishedAt: {
      title: "Published at",
      description: "When was this blog post published?",
    },
    titleImage: {
      title: "Header image",
      description:
        "The background image of the header." +
        " If no image is selected, the header image of the blog is shown.",
    },
    tags: {
      title: "Tags",
    },
  },
  properties: ["author", "publishedAt", "titleImage", "tags"],
  propertiesGroups: [socialCards.propertiesGroup, metadata.propertiesGroup],
  initialContent: {
    ...metadata.initialContent,
    body: [new SectionWidget({})],
    publishedAt: () => new Date(),
    title: "Lorem Ipsum",
  },
  validations: [
    ...socialCards.validations,
    [
      "title",

      title => {
        if (!title) {
          return { message: "The title must be set.", severity: "error" };
        }
      },
    ],
  ],
});
