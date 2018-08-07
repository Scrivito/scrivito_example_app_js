import * as React from "react";
import * as Scrivito from "scrivito";

class BaseNavChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.registerDropdown(this);
  }

  componentWillUnmount() {
    this.props.unregisterDropdown(this);
  }

  toggleDropdown() {
    const newOpen = !this.state.open;
    this.props.closeDropdowns();
    this.setState({ open: newOpen });
  }

  closeDropdown() {
    this.setState({ open: false });
  }

  render() {
    const topLevelProps = {
      child: this.props.child,
      open: this.state.open,
      onClick: this.props.closeAll,
    };

    if (!this.props.expanded) {
      topLevelProps.onMouseEnter = this.toggleDropdown;
      topLevelProps.onMouseLeave = this.closeDropdown;
    }

    if (this.props.child.children().length === 0) {
      return <NavSingleChild {...topLevelProps} />;
    }

    return <Dropdown toggleDropdown={this.toggleDropdown} {...topLevelProps} />;
  }
}

const NavChild = Scrivito.connect(BaseNavChild);

const NavSingleChild = Scrivito.connect(({ child, open, ...otherProps }) => {
  const classNames = ["nav-item"];
  if (open) {
    classNames.push("open");
  }
  if (isActive(child)) {
    classNames.push("active");
  }

  return (
    <li className={classNames.join(" ")} {...otherProps}>
      <Scrivito.LinkTag to={child} className="nav-link">
        {child.get("title") || "<untitled>"}
      </Scrivito.LinkTag>
    </li>
  );
});

const Dropdown = Scrivito.connect(
  ({ child, open, toggleDropdown, ...otherProps }) => {
    const classNames = ["nav-item"];
    if (open) {
      classNames.push("open");
    }
    if (isActive(child)) {
      classNames.push("active");
    }

    return (
      <li className={classNames.join(" ")} {...otherProps}>
        <Scrivito.LinkTag
          to={child}
          className="nav-link"
          role="button"
          aria-haspopup="true"
          aria-expanded={open}
        >
          {child.get("title") || "<untitled>"}
        </Scrivito.LinkTag>
        <span
          className="menu-toggle"
          onClick={e => {
            toggleDropdown();
            e.stopPropagation();
          }}
        >
          <i className="fa fa-angle-down" aria-hidden="true" />
        </span>
        <Scrivito.ChildListTag
          className="dropdown-menu"
          parent={child}
          renderChild={innerChild => <NavSingleChild child={innerChild} />}
        />
      </li>
    );
  }
);

function isActive(page) {
  if (!Scrivito.currentPage()) {
    return false;
  }

  const currentPath = Scrivito.currentPage().path();
  if (currentPath) {
    return currentPath.startsWith(page.path());
  }

  if (Scrivito.currentPage().objClass() === "BlogPost") {
    return page.objClass() === "Blog";
  }

  return false;
}

export default NavChild;
