import * as React from "react";
import * as Scrivito from "scrivito";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      q: props.params.q || "",
    };
  }

  render() {
    return (
      <section className="bg-nav-content">
        <div className="container">
          <div className="nav-centered">
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="input-group">
                <input
                  className="form-control"
                  placeholder="Search for..."
                  value={this.state.q}
                  onChange={e => this.handleChange(e)}
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="submit">
                    <span className="d-none d-sm-inline">Search again</span>
                    <i className="fa fa-search fa-1" aria-hidden="true" />
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  handleChange(event) {
    this.setState({ q: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    Scrivito.navigateTo(() => Scrivito.currentPage(), { q: this.state.q });
  }
}

export default SearchInput;
