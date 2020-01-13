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
            message: "The author should be set.",
            severity: "warning",
          };
        }
      },
    ],
    [
      "testimonial",

      testimonial => {
        if (!testimonial) {
          return {
            message: "The testimonial should be set.",
            severity: "warning",
          };
        }
      },
    ],
  ],
  titleForContent: widget => {
    const parts = [widget.get("author"), widget.get("testimonial")];
    const summary = parts.filter(e => e).join(" - ");

    if (summary) {
      return `Testimonial: ${summary}`;
    }
  },
});
