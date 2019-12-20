import * as Scrivito from "scrivito";
import { truncate } from "lodash-es";

Scrivito.provideEditingConfig("TestimonialWidget", {
  title: "Testimonial",
  attributes: {
    testimonial: {
      title: "Testimonial",
    },
    author: {
      title: "Author",
      description: "Who said it?",
    },
    authorImage: {
      title: "Author image",
    },
  },
  properties: ["testimonial", "author", "authorImage"],
  initialContent: {
    author: "Someone",
    testimonial: "This is great!",
  },
  validations: [
    [
      "author",

      author => {
        if (!author) {
          return {
            message: "Author should be set.",
            severity: "warning",
          };
        }
      },
    ],
  ],
  titleForContent: widget =>
    `${widget.get("author")}: ${truncate(widget.get("testimonial"))}`,
});
