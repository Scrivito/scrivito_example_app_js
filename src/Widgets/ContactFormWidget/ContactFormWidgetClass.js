import * as Scrivito from "scrivito";

const ContactFormWidget = Scrivito.provideWidgetClass("ContactFormWidget", {
  attributes: {
    agreementText: "string",
    buttonText: "string",
    backgroundColor: ["enum", { values: ["white", "transparent"] }],
  },
});

export default ContactFormWidget;
