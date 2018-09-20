import * as React from "react";
import * as Scrivito from "scrivito";
import fromNow from "moment-from-now";
import Highlighter from "react-highlight-words";
import { truncate } from "lodash-es";
import { textExtractFromObj } from "../../utils/textExtract";
import isVideoObj from "../../utils/isVideoObj";

const PreviewImage = Scrivito.connect(({ item }) => {
  const image =
    item.get("navigationBackgroundImage") ||
    item.get("titleImage") ||
    item.get("image");
  if (!image || isVideoObj(image)) {
    return null;
  }
  return (
    <Scrivito.LinkTag to={item} className="result-image">
      <Scrivito.ImageTag content={image} alt={image.get("alternativeText")} />
    </Scrivito.LinkTag>
  );
});

const Details = Scrivito.connect(({ item }) => {
  const details = [];

  const date = item.get("publishedAt") || item.lastChanged();
  if (date) {
    details.push(fromNow(date));
  }

  const author = item.get("author");
  if (author) {
    details.push(`by ${author.get("title")}`);
  }

  const tags = item.get("tags");
  if (tags && tags.length) {
    details.push(`tags: ${tags.join(", ")}`);
  }

  if (!details.length) {
    return null;
  }

  return <small>{details.join(" // ")}</small>;
});

function SearchResultItem({ resultItem, q }) {
  const searchWords = q.split(/\s+/);
  const textExtract = textExtractFromObj(resultItem);
  const textToHighlight = truncate(textExtract, {
    length: 200,
    separator: /,? +/,
  });

  return (
    <div className="result-item">
      <PreviewImage item={resultItem} />
      <div className="result-content">
        <Scrivito.LinkTag to={resultItem}>
          <h3 className="h3">
            <Highlighter
              autoEscape
              highlightTag="mark"
              searchWords={searchWords}
              textToHighlight={resultItem.get("title") || ""}
            />
          </h3>
        </Scrivito.LinkTag>
        <p>
          <Highlighter
            autoEscape
            highlightTag="mark"
            searchWords={searchWords}
            textToHighlight={textToHighlight}
          />
        </p>
        <Details item={resultItem} />
      </div>
      <div className="result-options">
        <Scrivito.LinkTag to={resultItem} className="btn btn-clear">
          Read more
          <i className="fa fa-angle-right fa-4" aria-hidden="true" />
        </Scrivito.LinkTag>
      </div>
    </div>
  );
}

export default Scrivito.connect(SearchResultItem);
