import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const <%= nameUpperWidget %> = Scrivito.provideWidgetClass("<%= nameUpperWidget %>", {
  attributes: {
    headline: "string",
  },
});

registerTextExtract("<%= nameUpperWidget %>", [
  { attribute: "headline", type: "string" },
]);

export default <%= nameUpperWidget %>;
