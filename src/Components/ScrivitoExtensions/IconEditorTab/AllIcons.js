import * as React from "react";
import { take } from "lodash-es";
import fontAwesomeIcons from "./fontAwesomeIcons";

class AllIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialRender: true,
    };

    this.categoryMap = {};
    fontAwesomeIcons.forEach(icon =>
      icon.categories.forEach(category => {
        if (!this.categoryMap[category]) {
          this.categoryMap[category] = [];
        }
        this.categoryMap[category].push(icon);
      })
    );
  }

  componentDidMount() {
    if (this.state.initialRender === true) {
      setTimeout(() => this.setState({ initialRender: false }), 10);
    }
  }

  render() {
    const { setWidgetIcon, currentIcon, hide } = this.props;

    if (hide) {
      return null;
    }

    return (
      <React.Fragment>
        <div id="icons">
          {
            <CategoriesAndIcons
              initialRender={this.state.initialRender}
              categoryMap={this.categoryMap}
              currentIcon={currentIcon}
              setWidgetIcon={setWidgetIcon}
            />
          }
        </div>
      </React.Fragment>
    );
  }
}

function CategoriesAndIcons({
  initialRender,
  categoryMap,
  currentIcon,
  setWidgetIcon,
}) {
  // Note: the initialRender is a performance tweak,
  // to improve loading time for first "meaningful content".
  // It is faster, because it first renders only the first 50 icons
  // and in a second render all other icons.
  // This reduced time to first meaningful content by around 45%.
  if (initialRender) {
    const [category, categoryIcons] = Object.entries(categoryMap)[0];
    const icons = take(categoryIcons, 50);

    return (
      <Category
        category={category}
        icons={icons}
        currentIcon={currentIcon}
        setWidgetIcon={setWidgetIcon}
      />
    );
  }

  return Object.entries(categoryMap).map(([category, icons]) => (
    <Category
      key={category}
      category={category}
      icons={icons}
      currentIcon={currentIcon}
      setWidgetIcon={setWidgetIcon}
    />
  ));
}

function Category({ category, icons, currentIcon, setWidgetIcon }) {
  return (
    <section>
      <span className="headline">{category}</span>
      <div className="row">
        {icons.map((icon, innerIndex) => {
          const cssIcon = `fa-${icon.id}`;

          const aClassNames = [];
          if (currentIcon === cssIcon) {
            aClassNames.push("active");
          }

          // Note: It is up to 10% faster to inline the SingleIcon component,
          // instead of creating one SingleIcon component for each of the 675 icons.
          return (
            <div
              key={`${icon.id}${innerIndex}`}
              className="fa-hover col-md-3 col-sm-4"
            >
              <a
                href="#"
                className={aClassNames.join(" ")}
                onClick={e => setWidgetIcon(e, cssIcon)}
              >
                <i className={["fa", cssIcon].join(" ")} aria-hidden="true" />
                <span className="sr-only">Example of </span>
                {icon.name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AllIcons;
