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

        // relative square in css - see d29318acaa903a74672938b2cd85d6d1c678eaab for a link to an explanation
        width: "100%",
        paddingBottom: "100%",
      }}
    />
  );
});
