import * as React from "react";
import * as Scrivito from "scrivito";
import ShowMoreButton from "./ShowMoreButton";
import SearchInput from "./SearchInput";
import SearchResultItem from "./SearchResultItem";
import SearchResultsTagList from "./SearchResultsTagList";

class SearchResultsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxItems: 10 };

    this.incrementMaxItems = this.incrementMaxItems.bind(this);
    this.calculateResults = this.calculateResults.bind(this);
  }

  calculateResults() {
    if (!this.query()) {
      return {
        searchResults: [],
        totalCount: 0,
        tags: [],
      };
    }

    let search = Scrivito.Obj.where("*", "containsPrefix", this.query()).andNot(
      "_objClass",
      "equals",
      blacklistObjClasses
    );

    // make sure, that tags are calculated _before_ limiting to specific tag.
    const tags = search.facet("tags").map((tag) => tag.name());

    if (this.props.params.tag) {
      search = search.and("tags", "equals", this.props.params.tag);
    }

    return {
      searchResults: search.take(this.state.maxItems),
      totalCount: search.count(),
      tags,
    };
  }

  render() {
    const { searchResults, totalCount, tags } = this.calculateResults();

    return (
      <div>
        <SearchInput params={this.props.params} />

        <section className="bg-white">
          <div className="container">
            <h1 className="h2 b-bottom text-center">
              {totalCount} search result
              {totalCount !== 1 && "s"}
            </h1>
            <SearchResultsTagList tags={tags} params={this.props.params} />
          </div>
        </section>

        <section className="bg-white no-padding">
          <div className="container">
            {searchResults.map((resultItem, index) => (
              <SearchResultItem
                resultItem={resultItem}
                q={this.query()}
                key={index}
              />
            ))}
          </div>
          <ShowMoreButton
            totalCount={totalCount}
            currentMaxItems={this.state.maxItems}
            onClick={this.incrementMaxItems}
          />
          <br />
          <br />
        </section>
      </div>
    );
  }

  incrementMaxItems() {
    this.setState({ maxItems: this.state.maxItems + 10 });
  }

  query() {
    return this.props.params.q.trim();
  }
}

Scrivito.provideComponent("SearchResults", SearchResultsComponent);

const blacklistObjClasses = ["Image", "SearchResults", "Video"];
