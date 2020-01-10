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
  ],
  titleForContent: widget => {
    const author = widget.get("author");
    const testimonial = truncate(widget.get("testimonial"));

    if (author && testimonial) {
      return `Testimonial: ${author} - ${testimonial}`;
    }
    if (author || testimonial) {
      return `Testimonial: ${author || testimonial}`;
    }
  },
});
