import * as React from "react";
import * as Scrivito from "scrivito";
import AllIcons from "./IconEditorTab/AllIcons";
import IconComponent from "../Icon";
import IconSearch from "./IconEditorTab/IconSearch";
import IconSearchResults from "./IconEditorTab/IconSearchResults";

function IconEditorTab({ widget }) {
  const [searchValue, setSearchValue] = React.useState("");
  const currentIcon = widget.get("icon");

  return (
    <div className="icon-editor-tab">
      <div className="scrivito_detail_content">
        <div className="scrivito_detail_label">
          <span>Preview</span>
        </div>
        <div className="icon-editor-preview">
          <IconComponent icon={currentIcon} />
        </div>

        {Scrivito.canWrite() ? (
          <>
            <IconSearch
              searchValue={searchValue}
              setSearchValue={(newSearchValue) => {
                if (searchValue !== newSearchValue) {
                  setSearchValue(newSearchValue);
                }
              }}
            />
            <IconSearchResults
              currentIcon={currentIcon}
              searchValue={searchValue}
              setWidgetIcon={setWidgetIcon}
            />
            <AllIcons
              currentIcon={currentIcon}
              hide={searchValue.length}
              setWidgetIcon={setWidgetIcon}
            />
          </>
        ) : null}
      </div>
    </div>
  );

  function setWidgetIcon(event, icon) {
    event.preventDefault();
    event.stopPropagation();

    widget.update({ icon });
  }
}

Scrivito.registerComponent("IconEditorTab", IconEditorTab);
