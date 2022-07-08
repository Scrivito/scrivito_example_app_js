import * as Scrivito from "scrivito";
import { metadataAttributes } from "../_metadataAttributes";
import { defaultPageAttributes } from "../_defaultPageAttributes";

export const LandingPage = Scrivito.provideObjClass("LandingPage", {
  attributes: {
    ...defaultPageAttributes,
    ...metadataAttributes,
  },
  extractTextAttributes: ["navigationSection", "body"],
});
