import * as React from "react";
import * as Scrivito from "scrivito";
import TagList from "../../Components/TagList";

function SearchResultsTagList({ tags, params }) {
  return (
    <TagList
      tags={tags}
      showTags={tags.length}
      setTag={newTag => {
        const newParams = { q: params.q };
        if (newTag) {
          newParams.tag = newTag;
        }

        Scrivito.navigateTo(() => Scrivito.currentPage(), newParams);
      }}
      currentTag={params.tag}
    />
  );
}

export default SearchResultsTagList;
