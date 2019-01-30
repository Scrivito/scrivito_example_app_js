import * as Scrivito from "scrivito";

Scrivito.configureContentBrowser({
  filters: ({ _validObjClasses }) => {
    if (_validObjClasses) {
      switch (_validObjClasses.length) {
        case 0:
          return defaultFilter();
        case 1:
          return objClassFilter(_validObjClasses[0]);
        default:
          return objClassesFilter(_validObjClasses);
      }
    }

    return defaultFilter();
  },
});

function objClassFilter(objClass) {
  return {
    _objClass: {
      options: {
        [objClass]: {
          ...filterOptionForObjClass(objClass),
          selected: true,
        },
      },
    },
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
        ...objClasses.reduce((result, value) => {
          result[value] = filterOptionForObjClass(value);
          return result;
        }, {}),
      },
    },
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
        ...{ Image: filterOptionForObjClass("Image") },
        Pages: {
          title: "Pages",
          icon: "sheet",
          field: "_objClass",
          value: PAGES,
          options: PAGES.reduce((result, value) => {
            result[value] = filterOptionForObjClass(value);
            return result;
          }, {}),
        },
        ...{ Download: filterOptionForObjClass("Download") },
        ...{ Video: filterOptionForObjClass("Video") },
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
}

function filterOptionForObjClass(objClass) {
  const description = FILTER_OPTIONS[objClass] || {
    title: objClass,
    icon: "question",
  };
  return { field: "_objClass", value: objClass, ...description };
}

const FILTER_OPTIONS = {
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
