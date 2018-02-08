import * as React from 'react';
import BootstrapCollapse from 'react-bootstrap/lib/Collapse';
import CollapseToggle from './CollapseToggle';
import Logo from './Logo';
import Nav from './Nav';
import { SearchBox, SearchIcon } from './Search';

class FullNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.closeExpanded = this.closeExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }

  closeExpanded() {
    this.setState({ expanded: false });
  }

  render() {
    const {
      bootstrapNavbarClassNames,
      toggleSearch,
      scrolled,
      navigationStyle,
      showSearch,
    } = this.props;

    const classNames = [
      'navbar',
      'navbar-fixed-top',
      'navbar-default',
      ...bootstrapNavbarClassNames,
    ];

    return (
      <nav className={ classNames.join(' ') } >
        <div className="container">
          <SearchBox toggleSearch={ toggleSearch } showSearch={ showSearch } />

          <div className="navbar-header">
            <CollapseToggle
              expanded={ this.state.expanded }
              toggleExpanded={ this.toggleExpanded }
            />
            <Logo scrolled={ scrolled } navigationStyle={ navigationStyle } />
            <SearchIcon toggleSearch={ toggleSearch } />
          </div>

          <BootstrapCollapse in={ this.state.expanded }>
            <div className="navbar-collapse">
              <Nav closeExpanded={ this.closeExpanded } expanded={ this.state.expanded } />
            </div>
          </BootstrapCollapse>
        </div>
      </nav>
    );
  }
}


export default FullNavigation;
