import * as Scrivito from "scrivito";

function navigateToBlogWithTag(tag) {
  const params = {};
  if (tag) {
    params.tag = tag;
  }

  Scrivito.navigateTo(() => Scrivito.Obj.getByPermalink("blog"), params);
}

export default navigateToBlogWithTag;
