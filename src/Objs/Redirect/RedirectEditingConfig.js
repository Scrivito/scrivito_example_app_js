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
    openInUi: {
      title: "Open in Scrivito UI?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["title", "link", "openInUi"],
  initialContent: {
    openInUi: "no",
  },
});
