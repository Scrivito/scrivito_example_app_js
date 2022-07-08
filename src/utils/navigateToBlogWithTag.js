import * as Scrivito from "scrivito";

export function navigateToBlogWithTag(tag) {
  const params = {};
  if (tag) params.tag = tag;

  Scrivito.navigateTo(() => Scrivito.Obj.getByPermalink("blog"), params);
}
