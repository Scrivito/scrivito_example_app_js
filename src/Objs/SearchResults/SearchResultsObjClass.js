import * as Scrivito from "scrivito";
import metaDataAttributes from "../_metaDataAttributes";

const SearchResults = Scrivito.provideObjClass("SearchResults", {
  attributes: {
    title: "string",
    navigationBackground: "reference",
    ...metaDataAttributes,
  },
});

export default SearchResults;
