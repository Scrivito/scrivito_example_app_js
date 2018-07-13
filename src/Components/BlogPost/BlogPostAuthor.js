import * as React from "react";
import * as Scrivito from "scrivito";
import AuthorImage from "../AuthorImage";
import isImage from "../../utils/isImage";

function BlogPostAuthor({ author }) {
  if (!author) {
    return null;
  }
  if (author.objClass() !== "Author") {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="container">
        <hr />
        <div className="row">
          <AuthorImageAndDescription author={author} />
        </div>
      </div>
    </section>
  );
}

const AuthorImageAndDescription = Scrivito.connect(({ author }) => {
  if (!isImage(author.get("image"))) {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <AuthorDescription author={author} />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="col-md-1 col-sm-4 col-xs-4">
        <Scrivito.LinkTag to={author}>
          <AuthorImage image={author.get("image")} />
        </Scrivito.LinkTag>
      </div>
      <div className="col-md-11 col-sm-8 col-xs-8">
        <AuthorDescription author={author} />
      </div>
    </React.Fragment>
  );
});

const AuthorDescription = Scrivito.connect(({ author }) => (
  <React.Fragment>
    <Scrivito.LinkTag to={author}>
      <strong className="text-greymiddle">{author.get("title")}</strong>
    </Scrivito.LinkTag>
    <p>{author.get("description")}</p>
  </React.Fragment>
));

export default Scrivito.connect(BlogPostAuthor);
