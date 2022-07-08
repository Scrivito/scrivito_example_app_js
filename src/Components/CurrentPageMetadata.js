import * as React from "react";
import * as Scrivito from "scrivito";
import { Helmet } from "react-helmet-async";
import { getMetadata } from "../utils/getMetadata";
import favicon from "../assets/images/favicon.png";

export const CurrentPageMetadata = Scrivito.connect(() => {
  let lang = "en";
  let title = "";
  let meta = [];
  const links = [
    {
      rel: "shortcut icon",
      type: "image/png",
      href: favicon,
    },
  ];

  const page = Scrivito.currentPage();
  if (page) {
    lang = page.language() || "en";
    title = page.get("title") || "";
    meta = getMetadata(page);
    links.push({ rel: "canonical", href: Scrivito.urlFor(page) });
  }

  const htmlAttributes = { lang };

  return (
    <Helmet
      meta={meta}
      htmlAttributes={htmlAttributes}
      title={title}
      link={links}
    />
  );
});
