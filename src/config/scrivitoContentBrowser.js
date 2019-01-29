import * as Scrivito from "scrivito";

Scrivito.configureContentBrowser({
  filters: filterContext => {
    const validObjClasses = filterContext._validObjClasses;
    if (validObjClasses && validObjClasses[0]) {
      const [head, ...tail] = validObjClasses;

      if (tail.length === 0) {
        return {
          _objClass: {
            options: {
              [head]: {
                ...descriptionForObjClass(head),
                selected: true,
              },
            },
          },
          _modification: modificationFilter,
        };
      }

      return {
        _objClass: {
          options: {
            All: {
              title: "All",
              icon: "folder",
              field: "_objClass",
              value: validObjClasses,
            },
            [head]: {
              ...descriptionForObjClass(head),
              selected: true,
            },
            ...tail.reduce((interimOptions, item) => {
              return {
                ...interimOptions,
                ...{ [item]: descriptionForObjClass(item) },
              };
            }, {}),
          },
        },
        _modification: modificationFilter,
      };
    }

    const pages = [
      "Page",
      "LandingPage",
      "BlogPost",
      "Author",
      "Event",
      "Job",
      "Redirect",
      "Homepage",
      "Blog",
      "SearchResults",
    ];

    return {
      _objClass: {
        options: {
          All: {
            title: "All",
            icon: "folder",
            query: Scrivito.Obj.all(),
            selected: true,
          },
          ...{ Image: descriptionForObjClass("Image") },
          Pages: {
            title: "Pages",
            icon: "sheet",
            field: "_objClass",
            value: pages,
            options: pages.reduce((interimOptions, item) => {
              return {
                ...interimOptions,
                ...{ [item]: descriptionForObjClass(item) },
              };
            }, {}),
          },
          ...{ Download: descriptionForObjClass("Download") },
          ...{ Video: descriptionForObjClass("Video") },
        },
      },
      _modification: modificationFilter,
    };
  },
});

function descriptionForObjClass(objClass) {
  const descriptions = {
    Author: { title: "Authors", icon: "user" },
    Blog: { title: "Blog", icon: "pen" },
    BlogPost: { title: "Blog posts", icon: "pen" },
    Download: { title: "Downloads", icon: "pdf" },
    Event: { title: "Events", icon: "cal" },
    Homepage: { title: "Homepage", icon: "inbox" },
    Image: { title: "Images", icon: "image" },
    Job: { title: "Jobs", icon: "suitcase" },
    LandingPage: { title: "Landing pages", icon: "inbox" },
    Page: { title: "Standard pages", icon: "sheet" },
    Redirect: { title: "Redirects", icon: "link" },
    SearchResults: { title: "Search results", icon: "lens" },
    Video: { title: "Videos", icon: "video" },
  };

  const description = descriptions[objClass] || {
    title: objClass,
    icon: "question",
  };
  return { field: "_objClass", value: objClass, ...description };
}

const modificationFilter = {
  title: "Changed",
  type: "checkbox",
  expanded: true,
  field: "_modification",
  options: {
    New: {
      value: "new",
    },
    Edited: {
      value: "edited",
    },
  },
};
