import * as React from "react";
import * as Scrivito from "scrivito";
import getMetadata from "../../utils/getMetadata";

Scrivito.registerComponent("SocialCardsTab", ({ obj }) => (
  <div className="">
    <div className="scrivito_detail_content">
      <div className="row">
        <div className="col-sm-6">
          <div className="seo_card_input">
            <TwitterInput obj={obj} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="seo_card_preview">
            <TwitterPreview obj={obj} />
          </div>
        </div>
      </div>
    </div>

    <div className="scrivito_detail_content">
      <div className="row">
        <div className="col-sm-6">
          <div className="seo_card_input">
            <FacebookInput obj={obj} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="seo_card_preview">
            <FacebookPreview obj={obj} />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const TwitterInput = Scrivito.connect(({ obj }) => (
  <div>
    <div className="scrivito_detail_label">
      <span className="headline">Twitter</span>
    </div>
    <div className="scrivito_detail_label">
      <span>Creator</span>
    </div>
    <Scrivito.ContentTag
      content={obj}
      attribute="tcCreator"
      className="input"
    />
    <div className="scrivito_notice_body">
      Twitter handle of the tweet creator. Start with {"@"}
    </div>
    <div className="scrivito_detail_label">
      <span>Image</span>
    </div>
    <Scrivito.ImageTag
      content={obj}
      attribute="tcImage"
      className="seo_card_img"
    />
    <div className="scrivito_notice_body">Add or replace the image here.</div>
    <div className="scrivito_detail_label">
      <span>Title</span>
    </div>
    <Scrivito.ContentTag content={obj} attribute="tcTitle" className="input" />
    <div className="scrivito_detail_label">
      <span>Description</span>
    </div>
    <Scrivito.ContentTag
      content={obj}
      attribute="tcDescription"
      className="input"
    />
    <div className="scrivito_notice_body">Limit to 140 characters</div>
  </div>
));

const FacebookInput = Scrivito.connect(({ obj }) => (
  <div>
    <div className="scrivito_detail_label">
      <span className="headline">Facebook</span>
    </div>
    <div className="scrivito_detail_label">
      <span>Image</span>
    </div>
    <Scrivito.ImageTag
      content={obj}
      attribute="ogImage"
      className="seo_card_img"
    />
    <div className="scrivito_notice_body">Add or replace the image here.</div>
    <div className="scrivito_detail_label">
      <span>Title</span>
    </div>
    <Scrivito.ContentTag content={obj} attribute="ogTitle" className="input" />
    <div className="scrivito_notice_body">Add a catchy title for the post.</div>
    <div className="scrivito_detail_label">
      <span>Description</span>
    </div>
    <Scrivito.ContentTag
      content={obj}
      attribute="ogDescription"
      className="input"
    />
    <div className="scrivito_notice_body">
      What is this post about and why would someone want to read it?
    </div>
  </div>
));

const TwitterPreview = Scrivito.connect(({ obj }) => (
  <div>
    <div className="scrivito_detail_label">
      <span className="headline">Twitter preview</span>
      <span>Twitter (Summary card with large image)</span>
    </div>
    <div className="creator">
      Tweet creator: {lookupMetadata(obj, "twitter:creator")}
    </div>

    <div className="card twitter_card">
      <div className="seo_card_preview_img">
        <OptionalImage src={lookupMetadata(obj, "twitter:image")} />
      </div>
      <div className="card_text">
        <h5>{lookupMetadata(obj, "twitter:title")}</h5>
        <p>{lookupMetadata(obj, "twitter:description")}</p>
      </div>
    </div>
  </div>
));

const FacebookPreview = Scrivito.connect(({ obj }) => (
  <div>
    <div className="scrivito_detail_label">
      <span className="headline">Facebook preview</span>
      <span>Facebook (Article style)</span>
    </div>
    <div className="card fb_card">
      <div className="seo_card_preview_img">
        <OptionalImage src={lookupMetadata(obj, "og:image")} />
      </div>
      <div className="card_text">
        <h5>{lookupMetadata(obj, "og:title")}</h5>
        <p>{lookupMetadata(obj, "og:description")}</p>
      </div>
    </div>
  </div>
));

function OptionalImage({ src }) {
  if (!src) {
    return null;
  }

  return <img src={src} />;
}

function lookupMetadata(obj, value) {
  const metadata = getMetadata(obj);

  if (value.includes("og:")) {
    const ogData = metadata.find(x => x.property === value);
    if (ogData) {
      return ogData.content;
    }
  }

  if (value.includes("twitter:")) {
    const twitterData = metadata.find(x => x.name === value);
    if (twitterData) {
      return twitterData.content;
    }
  }

  return "";
}
