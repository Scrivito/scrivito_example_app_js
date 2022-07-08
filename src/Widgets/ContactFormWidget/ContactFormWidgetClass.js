import * as Scrivito from "scrivito";

export const ContactFormWidget = Scrivito.provideWidgetClass(
  "ContactFormWidget",
  {
    attributes: {
      agreementText: "string",
      buttonText: "string",
      backgroundColor: ["enum", { values: ["white", "transparent"] }],
    },
  }
);
