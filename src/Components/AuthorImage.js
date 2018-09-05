import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "./InPlaceEditingPlaceholder";
import isImage from "../utils/isImage";

function AuthorImage({ image }) {
  if (!isImage(image)) {
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

        // relative square in css - https://stackoverflow.com/a/23924580/881759
        width: "100%",
        paddingBottom: "100%",
      }}
    />
  );
}

export default Scrivito.connect(AuthorImage);
