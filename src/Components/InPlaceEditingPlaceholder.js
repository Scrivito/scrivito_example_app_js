import * as Scrivito from 'scrivito';
import placeholderCss from 'utils/placeholderCss';

const InPlaceEditingPlaceholder = ({ children, center }) => {
  if (!Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  const innerSpan = <span style={ placeholderCss }>{ children }</span>;

  if (center) {
    return <div className="text-center">{ innerSpan }</div>;
  }

  return innerSpan;
};

export default InPlaceEditingPlaceholder;
