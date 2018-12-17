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

    return {
      _objClass: {
        options: {
          All: {
            title: "All",
            icon: "folder",
            query: Scrivito.Obj.all(),
            selected: true,
          },
          Images: {
            title: "Images",
            icon: "image",
            field: "_objClass",
            value: "Image",
          },
          Pages: {
            title: "Pages",
            icon: "sheet",
            field: "_objClass",
            value: [
              "Author",
              "Blog",
              "BlogPost",
              "Event",
              "Homepage",
              "Job",
              "LandingPage",
              "Page",
              "Redirect",
              "SearchResults",
            ],
            options: {
              Page: {
                title: "Standard pages",
                icon: "sheet",
              },
              LandingPage: {
                title: "Landing pages",
                icon: "inbox",
              },
              BlogPost: {
                title: "Blog posts",
                icon: "pen",
              },
              Author: {
                title: "Authors",
                icon: "user",
              },
              Event: {
                title: "Events",
                icon: "cal",
              },
              Job: {
                title: "Jobs",
                icon: "suitcase",
              },
              Redirect: {
                title: "Redirects",
                icon: "link",
              },
              Homepage: {
                title: "Homepage",
                icon: "inbox",
              },
              Blog: {
                title: "Blog",
                icon: "pen",
              },
              SearchResults: {
                title: "Search results",
                icon: "lens",
              },
            },
          },
          Download: {
            title: "Downloads",
            icon: "pdf",
            field: "_objClass",
            value: "Download",
          },
          Video: {
            title: "Videos",
            icon: "video",
            field: "_objClass",
            value: "Video",
          },
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
