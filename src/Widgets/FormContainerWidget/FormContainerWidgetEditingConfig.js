import * as Scrivito from "scrivito";
import formContainerWidgetIcon from "../../assets/images/form_container_widget.svg";
import FormButtonWidget from "../FormButtonWidget/FormButtonWidgetClass";
import FormInputFieldWidget from "../FormInputFieldWidget/FormInputFieldWidgetClass";
import TextWidget from "../TextWidget/TextWidgetClass";
import { pseudoRandom32CharHex } from "./pseudoRandom32CharHex";

Scrivito.provideEditingConfig("FormContainerWidget", {
  title: "Form",
  thumbnail: formContainerWidgetIcon,
  attributes: {
    formId: {
      title: "Form ID",
      description: "This ID identifies the form in Neoletter.",
    },
    submittingMessage: {
      title: "Message shown while the form is being submitted",
    },
    submittedMessage: {
      title: "Message shown after the form was successfully submitted",
    },
    failedMessage: {
      title: "Message shown if form submission failed",
    },
  },
  properties: ["submittingMessage", "submittedMessage", "failedMessage"],
  propertiesGroups: [
    {
      title: "System",
      key: "FormContainerWidgetSystem",
      properties: ["formId"],
    },
  ],
  initialContent: {
    formId: () => pseudoRandom32CharHex(),
    submittingMessage: "Submitting...",
    submittedMessage:
      "Your message has been successfully sent. Thank you for your request. We will get back to you as soon as possible.",
    failedMessage:
      "We are sorry, your request could not be completed. Please try again later.",
    content: () => [
      new FormInputFieldWidget({ required: true }),
      new TextWidget({
        text: "<p>By submitting, you agree to the terms and conditions of our privacy policy.</p>",
      }),
      new FormButtonWidget(),
    ],
  },
});
