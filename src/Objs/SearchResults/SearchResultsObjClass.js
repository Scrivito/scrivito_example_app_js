import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const SearchResults = Scrivito.provideObjClass("SearchResults", {
  attributes: {
    title: "string",
    navigationBackgroundImage: ["reference", { only: ["Image"] }],
    ...metadataAttributes,
  },
});

export default SearchResults;
