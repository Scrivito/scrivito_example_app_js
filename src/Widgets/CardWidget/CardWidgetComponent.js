import React from "react";
import * as Scrivito from "scrivito";
import { CardWidget } from "./CardWidgetClass";

Scrivito.provideComponent(CardWidget, ({ widget }) => {
  const cardBodyClassNames = ["card-body"];
  const padding = widget.get("padding");
  cardBodyClassNames.push(padding || "p-4");

  const backgroundImage = widget.get("backgroundImage");
  const backgroundImageClassNames = ["img-background"];
  if (widget.get("backgroundAnimateOnHover")) {
    backgroundImageClassNames.push("img-zoom");
  }

  const image = widget.get("image");

  const cardClassNames = ["card"];

  const margin = widget.get("margin");
  cardClassNames.push(margin || "mb-4");

  const backgroundColor = widget.get("backgroundColor");
  if (backgroundColor && backgroundColor !== "transparent") {
    cardClassNames.push(`bg-${backgroundColor}`);
  }

  if (widget.get("cardExtended")) cardClassNames.push("card-extended");

  return (
    <Scrivito.WidgetTag className={cardClassNames.join(" ")}>
      {backgroundImage && (
        <Scrivito.InPlaceEditingOff>
          <Scrivito.ImageTag
            content={widget}
            attribute="backgroundImage"
            className={backgroundImageClassNames.join(" ")}
          />
        </Scrivito.InPlaceEditingOff>
      )}
      <LinkOrNotTag link={widget.get("linkTo")}>
        {image && (
          <Scrivito.InPlaceEditingOff>
            <Scrivito.ImageTag
              content={widget}
              attribute="image"
              className="img-box img-h-200"
            />
          </Scrivito.InPlaceEditingOff>
        )}
        <Scrivito.ContentTag
          content={widget}
          attribute="cardBody"
          className={cardBodyClassNames.join(" ")}
        />
        {widget.get("showFooter") && (
          <Scrivito.ContentTag
            content={widget}
            attribute="cardFooter"
            className="card-footer"
          />
        )}
      </LinkOrNotTag>
    </Scrivito.WidgetTag>
  );
});

const LinkOrNotTag = Scrivito.connect(({ children, link }) => {
  if (!link) return <>{children}</>;

  return <Scrivito.LinkTag to={link}>{children}</Scrivito.LinkTag>;
});
