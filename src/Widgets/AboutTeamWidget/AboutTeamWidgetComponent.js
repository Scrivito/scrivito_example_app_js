import * as React from "react";
import * as Scrivito from "scrivito";
import Slider from "react-slick";
import placeholderCss from "../../utils/placeholderCss";
import AboutBoxWidget from "../AboutBox/AboutBoxWidgetClass";

function SlickNextButton(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa fa-chevron-right" />
    </div>
  );
}

function SlickPrevButton(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa fa-chevron-left" />
    </div>
  );
}

Scrivito.provideComponent("AboutTeamWidget", ({ widget }) => {
  const members = widget.get("members");

  return (
    <React.Fragment>
      <Slider
        className="about-team"
        nextArrow={<SlickNextButton />}
        prevArrow={<SlickPrevButton />}
        {...sliderSettings}
      >
        {members.map(member => (
          <div className="about-box" key={member.id()}>
            <Scrivito.ImageTag content={member} attribute="image" tag="img" />
            <div className="body">
              <Scrivito.ContentTag
                content={member}
                attribute="position"
                tag="div"
                className="position"
              />
              <Scrivito.ContentTag
                content={member}
                attribute="name"
                tag="div"
                className="name"
              />
            </div>
          </div>
        ))}
      </Slider>
      <Addmember widget={widget} />
    </React.Fragment>
  );
});

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
};

const Addmember = ({ widget }) => {
  if (!Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  return (
    <div className="text-center">
      <a
        href="#"
        style={placeholderCss}
        className="edit-mode-link"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          const newmembers = [...widget.get("members"), new AboutBoxWidget({})];
          widget.update({ members: newmembers });
        }}
      >
        Click to add a member
      </a>
    </div>
  );
};
