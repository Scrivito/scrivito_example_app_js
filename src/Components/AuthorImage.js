import * as React from "react";
import * as Scrivito from "scrivito";
import { InPlaceEditingPlaceholder } from "./InPlaceEditingPlaceholder";
import { isImageObj } from "../utils/isImageObj";

export const AuthorImage = Scrivito.connect(function AuthorImage({ image }) {
  if (!isImageObj(image)) {
    return (
      <InPlaceEditingPlaceholder center>
        Click here to select an author image.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <Scrivito.BackgroundImageTag
      className="rounded-circle"
      style={{
        background: { image },

        // relative square in css - see git history for link to explanation
        width: "100%",
        paddingBottom: "100%",
      }}
    />
  );
});
