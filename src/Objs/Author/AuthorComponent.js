import * as React from "react";
import * as Scrivito from "scrivito";
import AuthorImage from "../../Components/AuthorImage";
import BlogPostMorePosts from "../../Components/BlogPost/BlogPostMorePosts";
import SchemaDotOrg from "../../Components/SchemaDotOrg";

Scrivito.provideComponent("Author", ({ page }) => (
  <React.Fragment>
    <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-4 col-xs-4">
            <Scrivito.ContentTag content={page} attribute="image">
              <AuthorImage image={page.get("image")} />
            </Scrivito.ContentTag>
          </div>
          <div className="col-md-10 col-sm-8 col-xs-8">
            <Scrivito.ContentTag
              content={page}
              attribute="title"
              tag="h1"
              className="h1"
            />
            <Scrivito.ContentTag
              content={page}
              attribute="description"
              tag="h2"
              className="h4"
            />
          </div>
        </div>
      </div>
    </section>
    <BlogPostMorePosts author={page} />
    <SchemaDotOrg content={page} />
  </React.Fragment>
));
