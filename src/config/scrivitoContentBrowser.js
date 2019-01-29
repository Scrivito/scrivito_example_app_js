import * as Scrivito from "scrivito";

Scrivito.configureContentBrowser({
  filters: filterContext => {
    const validObjClasses = filterContext._validObjClasses;
    if (validObjClasses) {
      switch (validObjClasses.length) {
        case 0:
          return invalidObjClassFilter();
        case 1:
          return objClassFilter(validObjClasses[0]);
        default:
          return objClassesFilter(validObjClasses);
      }
    }

    return defaultFilter();
  },
});

function invalidObjClassFilter() {
  return {
    _objClass: {
      options: {
        All: {
          title: "Invalid restrictions",
          selected: true,
        },
      },
    },
  };
}

function objClassFilter(objClass) {
  return {
    _objClass: {
      options: {
        [objClass]: {
          ...descriptionForObjClass(objClass),
          selected: true,
        },
      },
    },
    _modification: MODIFICATION_FILTER,
  };
}

function objClassesFilter(objClasses) {
  return {
    _objClass: {
      options: {
        All: {
          title: "All",
          icon: "folder",
          field: "_objClass",
          value: objClasses,
          selected: true,
        },
        ...objClasses.reduce((interimOptions, item) => {
          return {
            ...interimOptions,
            ...{ [item]: descriptionForObjClass(item) },
          };
        }, {}),
      },
    },
    _modification: MODIFICATION_FILTER,
  };
}

function defaultFilter() {
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
          value: PAGES,
          options: PAGES.reduce((interimOptions, item) => {
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
    _modification: MODIFICATION_FILTER,
  };
}

function descriptionForObjClass(objClass) {
  const description = DESCRIPTIONS[objClass] || {
    title: objClass,
    icon: "question",
  };
  return { field: "_objClass", value: objClass, ...description };
}

const DESCRIPTIONS = {
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

const PAGES = [
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

const MODIFICATION_FILTER = {
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
