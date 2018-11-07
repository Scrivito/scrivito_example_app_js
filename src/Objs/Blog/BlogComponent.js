import * as React from "react";
import * as Scrivito from "scrivito";
import BlogPost from "../BlogPost/BlogPostObjClass";
import navigateToBlogWithTag from "../../utils/navigateToBlogWithTag";
import SchemaDotOrg from "../../Components/SchemaDotOrg";
import TagList from "../../Components/TagList";

Scrivito.provideComponent("Blog", ({ page, params }) => {
  const tags = [...BlogPost.all().facet("tags")].map(facet => facet.name());
  const currentTag = params.tag;

  return (
    <div>
      <TagList
        tags={tags}
        showTags
        setTag={navigateToBlogWithTag}
        currentTag={currentTag}
      />
      <Scrivito.ContentTag className="div" content={page} attribute="body" />
      <SchemaDotOrg content={page} />
    </div>
  );
});
