import * as Scrivito from "scrivito";
import isVideoObj from "../../utils/isVideoObj";

function currentPageNavigationOptions() {
  if (Scrivito.currentPage()) {
    switch (Scrivito.currentPage().objClass()) {
      case "Blog":
        return blogNavigationOptions(Scrivito.currentPage());
      case "BlogPost":
        return blogPostNavigationOptions(Scrivito.currentPage());
      case "Event":
        return eventNavigationOptions(Scrivito.currentPage());
      case "Homepage":
        return homepageNavigationOptions(Scrivito.currentPage());
      case "Job":
        return jobNavigationOptions(Scrivito.currentPage());
      case "LandingPage":
        return landingPageNavigationOptions(Scrivito.currentPage());
      case "Page":
        return pageNavigationOptions(Scrivito.currentPage());
      case "SearchResults":
        return searchResultsNavigationOptions(Scrivito.currentPage());
    }
  }

  return {
    navigationStyle: "solidWhite",
    backgroundImage: null,
    heightClassName: null,
    isLandingPage: false,
    useGradient: false,
  };
}

function blogNavigationOptions(obj) {
  const backgroundImage = obj.get("navigationBackgroundImage");
  return imageWithMediumHeightOrMinHeight(backgroundImage);
}

function blogPostNavigationOptions(obj) {
  let backgroundImage = obj.get("titleImage");
  if (!backgroundImage) {
    const blog = Scrivito.Obj.getByPermalink("blog");
    if (blog) {
      backgroundImage = blog.get("navigationBackgroundImage");
    }
  }

  return imageWithMediumHeightOrMinHeight(backgroundImage);
}

function eventNavigationOptions(obj) {
  const backgroundImage = obj.get("image");
  return imageWithMediumHeightOrNothing(backgroundImage);
}

function jobNavigationOptions(obj) {
  const backgroundImage = obj.get("image");
  return imageWithMediumHeightOrNothing(backgroundImage);
}

function homepageNavigationOptions(obj) {
  const isLandingPage = obj.get("showAsLandingPage") === "yes";
  const navigationOptions = pageNavigationOptions(obj);

  return { ...navigationOptions, isLandingPage };
}

function landingPageNavigationOptions(obj) {
  const navigationOptions = pageNavigationOptions(obj);

  return { ...navigationOptions, isLandingPage: true };
}

function pageNavigationOptions(obj) {
  const backgroundImage = obj.get("navigationBackgroundImage") || null;

  const useGradient =
    backgroundImage && obj.get("navigationBackgroundImageGradient") === "yes";

  const navigationHeight = obj.get("navigationHeight") || "small";
  let heightClassName = null;
  if (navigationHeight !== "small") {
    heightClassName = navigationHeight;
  }

  let navigationStyle = "solidWhite";
  if (backgroundImage || navigationHeight !== "small") {
    navigationStyle = "transparentDark";
  }

  return {
    navigationStyle,
    backgroundImage,
    heightClassName,
    useGradient,
  };
}

function searchResultsNavigationOptions(obj) {
  const backgroundImage = obj.get("navigationBackgroundImage");
  return imageWithMediumHeightOrMinHeight(backgroundImage);
}

function imageWithMediumHeightOrNothing(image) {
  if (image && !isVideoObj(image)) {
    return {
      navigationStyle: "transparentDark",
      backgroundImage: image,
      heightClassName: "medium-height",
    };
  }

  return {
    navigationStyle: "solidWhite",
    backgroundImage: null,
    heightClassName: null,
  };
}

function imageWithMediumHeightOrMinHeight(image) {
  if (image && !isVideoObj(image)) {
    return {
      navigationStyle: "transparentDark",
      backgroundImage: image,
      heightClassName: "medium-height",
    };
  }

  return {
    navigationStyle: "solidWhite",
    backgroundImage: null,
    heightClassName: "min-height",
  };
}

export default currentPageNavigationOptions;
