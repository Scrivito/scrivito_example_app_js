import * as Scrivito from "scrivito";
import HeadlineWidget from "../../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("ShawnTestPage", {
  title: "Shawn Test Page",
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Title",
      description: "Limit to 55 characters.",
    },
  },
  properties: ["title"],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    body: [
      new SectionWidget({
        content: [new HeadlineWidget({ style: "h1" })],
      }),
    ],
    ...metadataInitialContent,
  },
  validations: [...metadataValidations],
});
