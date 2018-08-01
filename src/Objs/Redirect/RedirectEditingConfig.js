import * as Scrivito from "scrivito";
import redirectObjIcon from "../../assets/images/redirect_obj.svg";

Scrivito.provideEditingConfig("Redirect", {
  title: "Redirect",
  thumbnail: `/${redirectObjIcon}`,
  hideInSelectionDialogs: true,
  attributes: {
    link: {
      title: "Link"
    },
    openInUi: {
      title: "Open in Scrivito UI?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }]
    }
  },
  properties: ["link", "openInUi"],
  initialContent: {
    openInUi: "no"
  }
});
