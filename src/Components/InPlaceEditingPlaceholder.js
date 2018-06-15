import * as React from 'react';
import * as Scrivito from 'scrivito';
import placeholderCss from '../utils/placeholderCss';

const InPlaceEditingPlaceholder = ({ children, center, block }) => {
  if (!Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  const innerSpan = <h2 className="h5" style={ placeholderCss }>{ children }</h2>;

  if (center) {
    return <div className="text-center">
              <i className="fa fa-calendar-o fa-lg" aria-hidden="true" title="date" />
              { innerSpan }
            </div>;
  }

  if (block) {
    return <div>
               <i className="fa fa-calendar-o fa-lg" aria-hidden="true" title="date" />
               { innerSpan }
          </div>;
  }

  return innerSpan;
};

export default InPlaceEditingPlaceholder;
