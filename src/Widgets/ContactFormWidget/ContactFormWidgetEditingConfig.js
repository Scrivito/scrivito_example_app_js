import * as Scrivito from "scrivito";
import contactFormWidgetIcon from "../../assets/images/contact_form_widget.svg";

Scrivito.provideEditingConfig("ContactFormWidget", {
  title: "Contact Form",
  thumbnail: contactFormWidgetIcon,
  attributes: {
    agreementText: {
      title: "Agreement text",
      description: "Optional",
    },
    buttonText: {
      title: "Submit button text",
      description: "Default: send message",
    },
    backgroundColor: {
      title: "Background color",
      description: "Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "transparent", title: "Transparent" },
      ],
    },
  },
  properties: ["agreementText", "buttonText", "backgroundColor"],
  initialContent: {
    buttonText: "send message",
    backgroundColor: "white",
  },
});
