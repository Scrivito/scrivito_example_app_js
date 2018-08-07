import * as React from "react";
import * as Scrivito from "scrivito";
import NavChild from "./NavChild";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.registeredDropdowns = [];

    this.closeAll = this.closeAll.bind(this);
    this.closeDropdowns = this.closeDropdowns.bind(this);
    this.registerDropdown = this.registerDropdown.bind(this);
    this.unregisterDropdown = this.unregisterDropdown.bind(this);
  }

  closeAll() {
    this.props.closeExpanded();
    this.closeDropdowns();
  }

  closeDropdowns() {
    this.registeredDropdowns.forEach(dropdown => dropdown.closeDropdown());
  }

  registerDropdown(dropdownComponent) {
    this.registeredDropdowns.push(dropdownComponent);
  }

  unregisterDropdown(dropdownComponent) {
    this.registeredDropdowns = this.registeredDropdowns.filter(
      i => i !== dropdownComponent
    );
  }

  render() {
    return (
      <Scrivito.ChildListTag
        className="nav navbar-nav navbar-right"
        parent={Scrivito.Obj.root()}
        renderChild={child => (
          <NavChild
            child={child}
            registerDropdown={this.registerDropdown}
            unregisterDropdown={this.unregisterDropdown}
            closeAll={this.closeAll}
            closeDropdowns={this.closeDropdowns}
            expanded={this.props.expanded}
          />
        )}
      />
    );
  }
}

export default Scrivito.connect(Nav);
