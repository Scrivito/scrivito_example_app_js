import * as Scrivito from "scrivito";
import redirectObjIcon from "../../assets/images/redirect_obj.svg";

Scrivito.provideEditingConfig("Redirect", {
  title: "Redirect",
  thumbnail: redirectObjIcon,
  hideInSelectionDialogs: true,
  attributes: {
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
    link: {
      title: "Link",
    },
  },
  properties: ["title", "link"],
  validations: [
    [
      "link",

      link => {
        if (!link) {
          return "The target must not be empty.";
        }
      },
    ],
  ],
});
