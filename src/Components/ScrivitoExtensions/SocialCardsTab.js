import * as React from "react";
import * as Scrivito from "scrivito";
import EditAttribute from "./EditAttribute";
import getMetadata from "../../utils/getMetadata";

const SocialCardsTab = Scrivito.connect(({ obj }) => {
  const uiContext = Scrivito.uiContext();
  if (uiContext === undefined) {
    return null;
  }

  return (
    <div className={`scrivito_${uiContext.theme}`}>
      <div className="scrivito_detail_content">
        <div className="row">
          <div className="col-sm-6">
            <TwitterInput obj={obj} />
          </div>
          <div className="col-sm-6">
            <TwitterPreview obj={obj} />
          </div>
        </div>
      </div>

      <div className="scrivito_detail_content">
        <div className="row">
          <div className="col-sm-6">
            <FacebookInput obj={obj} />
          </div>
          <div className="col-sm-6">
            <FacebookPreview obj={obj} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default SocialCardsTab;

const TwitterInput = Scrivito.connect(({ obj }) => (
  <div>
    <div className="scrivito_detail_label">
      <span className="headline">Twitter</span>
    </div>
    <EditAttribute
      content={obj}
      attribute="tcCreator"
      title="Creator"
      description="Twitter handle of the tweet creator. Start with @"
    />
    <div className="scrivito_detail_label">
      <span>Image</span>
    </div>
    <Scrivito.ImageTag
      content={obj}
      attribute="tcImage"
      className="seo_card_img"
    />
    <div className="scrivito_notice_body">Add or replace the image here.</div>
    <EditAttribute content={obj} attribute="tcTitle" title="Title" />
    <EditAttribute
      content={obj}
      attribute="tcDescription"
      title="Description"
      description="Limit to 200 characters"
    />
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
    <EditAttribute
      content={obj}
      attribute="ogTitle"
      title="Title"
      description="Add a catchy title for the post."
    />
    <EditAttribute
      content={obj}
      attribute="ogDescription"
      title="Description"
      description="What is this post about and why would someone want to read it? Limit to 300 characters."
    />
  </div>
));

const TwitterPreview = Scrivito.connect(({ obj }) => (
  <div className="seo_card_preview">
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
  <div className="seo_card_preview">
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

  return <img src={src} alt="seo-card-preview-img" />;
}

function lookupMetadata(obj, value) {
  const metadata = getMetadata(obj);

  if (value.includes("og:")) {
    const ogData = metadata.find((x) => x.property === value);
    if (ogData) {
      return ogData.content;
    }
  }

  if (value.includes("twitter:")) {
    const twitterData = metadata.find((x) => x.name === value);
    if (twitterData) {
      return twitterData.content;
    }
  }

  return "";
}
