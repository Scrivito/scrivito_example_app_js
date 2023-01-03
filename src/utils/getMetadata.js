import * as Scrivito from "scrivito";
import { truncate } from "lodash-es";
import { urlFromBinaryObj } from "./urlFromBinaryObj";
import { isImageObj } from "./isImageObj";

export function getMetadata(page) {
  const meta = [
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:type", content: "article" },
    { property: "og:url", content: Scrivito.urlFor(page) },
  ];
  const extractedText = Scrivito.extractText(page, { length: 330 });

  if (!page.get("robotsIndex")) {
    meta.push({ name: "robots", content: "noindex" });
  }

  const description = page.get("metaDataDescription");
  if (description) meta.push({ name: "description", content: description });

  const root = Scrivito.Obj.root();
  if (root) {
    const facebookAppId = root.get("facebookAppId");
    if (facebookAppId) {
      meta.push({ property: "fb:app_id", content: facebookAppId });
    }

    const twitterSite = root.get("twitterSite");
    if (twitterSite) meta.push({ name: "twitter:site", content: twitterSite });
  }

  const tcCreator = page.get("tcCreator");
  if (tcCreator) meta.push({ name: "twitter:creator", content: tcCreator });

  const tcDescription =
    page.get("tcDescription") ||
    truncate(extractedText, { length: 137, separator: /,? +/ });
  if (tcDescription) {
    meta.push({ name: "twitter:description", content: tcDescription });
  }

  const tcImage = firstImageUrlForAttributes(page, [
    "tcImage",
    "titleImage",
    "navigationBackgroundImage",
    "image",
  ]);

  if (tcImage) meta.push({ name: "twitter:image", content: tcImage });

  const tcTitle = page.get("tcTitle") || page.get("title");
  if (tcTitle) meta.push({ name: "twitter:title", content: tcTitle });

  const ogDescription =
    page.get("ogDescription") ||
    truncate(extractedText, { length: 297, separator: /,? +/ });
  if (ogDescription) {
    meta.push({ property: "og:description", content: ogDescription });
  }

  const ogImage = firstImageUrlForAttributes(page, [
    "ogImage",
    "titleImage",
    "navigationBackgroundImage",
    "image",
  ]);

  if (ogImage) meta.push({ property: "og:image", content: ogImage });

  const ogTitle = page.get("ogTitle") || page.get("title");
  if (ogTitle) meta.push({ property: "og:title", content: ogTitle });

  return meta;
}

function firstImageUrlForAttributes(obj, attributes) {
  let url;

  attributes.forEach((attribute) => {
    if (url) return;

    const binary = obj.get(attribute);
    if (!isImageObj(binary)) return;

    url = urlFromBinaryObj(binary);
  });

  return url;
}
