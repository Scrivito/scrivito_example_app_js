import * as React from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ShowMoreButton({ currentMaxItems, totalCount, onClick }) {
  if (currentMaxItems >= totalCount) {
    return null;
  }

  return (
    <React.Fragment>
      <br />
      <div className="text-center">
        <a className="btn btn-primary" onClick={onClick}>
          Load more
          <i className="fa fa-angle-right fa-4" aria-hidden="true" />
        </a>
      </div>
    </React.Fragment>
  );
}
/* eslint-enable jsx-a11y/anchor-is-valid */

export default ShowMoreButton;
