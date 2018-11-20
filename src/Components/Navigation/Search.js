import * as React from "react";
import * as Scrivito from "scrivito";

const SearchBox = Scrivito.connect(
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        q: "",
      };

      this.inputRef = React.createRef();
    }

    componentDidUpdate() {
      this.initFocus();
    }

    render() {
      return (
        <div className="search-box">
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="input-group">
              <input
                className="form-control"
                placeholder="Search..."
                value={this.state.q}
                onChange={e => this.onChange(e)}
                ref={this.inputRef}
              />
              <div className="input-group-btn">
                <button type="submit" className="btn btn-search">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-clear-white"
                  onClick={this.props.toggleSearch}
                >
                  <i className="fa fa-times-circle " aria-hidden="true" />
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }

    initFocus() {
      if (this.props.showSearch) {
        this.inputRef.current.focus();
      }
    }

    onChange(event) {
      this.setState({ q: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      Scrivito.navigateTo(oldestSearchResultsPage, { q: this.state.q });
      this.setState({ q: "" });
      this.props.toggleSearch();
    }
  }
);

function oldestSearchResultsPage() {
  return Scrivito.Obj.where("_objClass", "equals", "SearchResults")
    .order("_createdAt")
    .first();
}

function SearchIcon({ toggleSearch }) {
  if (
    Scrivito.currentPage() &&
    Scrivito.currentPage().objClass() === "SearchResults"
  ) {
    return (
      <span className="navbar-search-toggle disabled">
        <i className="fa fa-search" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span className="navbar-search-toggle" onClick={toggleSearch}>
      <i className="fa fa-search" aria-hidden="true" />
    </span>
  );
}

export { SearchBox, SearchIcon };
