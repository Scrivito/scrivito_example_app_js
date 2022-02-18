import * as Scrivito from "scrivito";
import dividerWidgetIcon from "../../assets/images/divider_widget.svg";

Scrivito.provideEditingConfig("DividerWidget", {
  title: "Divider",
  thumbnail: dividerWidgetIcon,
  attributes: {
    showLogo: {
      title: "Show logo?",
      description:
        'The divider logo can be changed on the homepage in the "Site settings". Default: Yes',
    },
  },
  properties: ["showLogo"],
  initialContent: {
    showLogo: true,
  },
});
