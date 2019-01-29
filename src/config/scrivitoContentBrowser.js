import * as Scrivito from "scrivito";

Scrivito.configureContentBrowser({
  filters: filterContext => {
    if (filterContext._validObjClasses && filterContext._validObjClasses[0]) {
      const objClass = filterContext._validObjClasses[0];
      return {
        _objClass: {
          options: {
            All: {
              title: "All",
              icon: "folder",
              query: Scrivito.Obj.all(),
            },
            [objClass]: {
              title: objClass,
              query: Scrivito.Obj.where("_objClass", "equals", objClass),
              selected: true,
            },
          },
        },
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
      _modification: {
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
      },
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
