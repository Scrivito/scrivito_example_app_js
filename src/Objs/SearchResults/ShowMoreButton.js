import * as React from "react";

function ShowMoreButton({ currentMaxItems, totalCount, onClick }) {
  if (currentMaxItems >= totalCount) {
    return null;
  }

  return (
    <React.Fragment>
      <br />
      <div className="text-center">
        <span className="btn btn-primary" onClick={onClick}>
          Load more
          <i className="fa fa-angle-right fa-4" aria-hidden="true" />
        </span>
      </div>
    </React.Fragment>
  );
}

export default ShowMoreButton;
