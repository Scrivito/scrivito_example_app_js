import * as React from "react";

function IconSearch({ setSearchValue, searchValue }) {
  return (
    <div id="search">
      <label htmlFor="search-input">
        <i className="fa fa-search" aria-hidden="true" />
        <span className="sr-only">Search icons</span>
      </label>
      <input
        id="search-input"
        className="form-control"
        placeholder="Search icons"
        autoComplete="off"
        spellCheck="false"
        autoCorrect="off"
        tabIndex="1"
        value={searchValue}
        onChange={e => setSearchValue(e, e.target.value)}
      />
      <ClearSearchButton
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
    </div>
  );
}

function ClearSearchButton({ setSearchValue, searchValue }) {
  if (!searchValue.length) {
    return null;
  }

  return (
    <a
      id="search-clear"
      href="#"
      className="fa fa-times-circle"
      aria-hidden="true"
      onClick={e => setSearchValue(e, "")}
    >
      <span className="sr-only">Clear search</span>
    </a>
  );
}

export default IconSearch;
