import * as Scrivito from "scrivito";
import testimonialSliderWidgetIcon from "../../assets/images/testimonial_slider_widget.svg";
import AboutBoxWidget from "../AboutBox/AboutBoxWidgetClass";

Scrivito.provideEditingConfig("AboutTeamWidget", {
  title: "About Barry Team",
  thumbnail: testimonialSliderWidgetIcon,
  attributes: {
    members: {
      title: "Barry Team Members",
    },
  },
  properties: ["members"],
  initialContent: {
    members: [new AboutBoxWidget({})],
  },
});
