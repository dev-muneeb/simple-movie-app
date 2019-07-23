// @flow
import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import type { RouterHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Header.scss';

type Props = {
    history: RouterHistory
}
type State = {
    isOpen: Boolean,
}

class Header extends React.Component<Props, State> {
    state = {
      isOpen: false,
    }

    gotoPage = (e: Object) => {
      const routeName = e.target.getAttribute('data-route-name');
      if (routeName && routeName !== this.props.history.location.pathname) {
        this.props.history.push(routeName);
      }
    };

    toggle = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
    }

    render() {
      return (
        <Navbar className="header" light expand="md">
          <Container>
            <NavbarBrand href="/">Find My Movies</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem
                  className="headerLink"
                  data-route-name="/"
                  onClick={this.gotoPage}
                  role="button"
                  tabIndex={0}
                >
                                Home
                </NavItem>
                <NavItem
                  className="headerLink"
                  data-route-name="/contact"
                  onClick={this.gotoPage}
                  role="button"
                  tabIndex={0}
                >
                                Contact
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }
}

export default withRouter(Header);
