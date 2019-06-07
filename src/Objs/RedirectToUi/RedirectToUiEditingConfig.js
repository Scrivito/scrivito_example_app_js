import * as Scrivito from "scrivito";
import redirectObjIcon from "../../assets/images/redirect_obj.svg";

Scrivito.provideEditingConfig("RedirectToUi", {
  title: "Redirect To Ui",
  thumbnail: redirectObjIcon,
  hideInSelectionDialogs: true,
  attributes: {
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
    reference: {
      title: "Reference",
    },
  },
  properties: ["title", "reference"],
});
