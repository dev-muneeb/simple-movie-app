// @flow
import React, { useState } from 'react';
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

const Header = (props:Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const gotoPage = (e: Object) => {
    const routeName = e.target.getAttribute('data-route-name');
    if (routeName && routeName !== props.history.location.pathname) {
      props.history.push(routeName);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="header" light expand="md">
      <Container>
        <NavbarBrand href="/">Find My Movies</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem
              className="headerLink"
              data-route-name="/"
              onClick={gotoPage}
              role="button"
              tabIndex={0}
            >
                            Home
            </NavItem>
            <NavItem
              className="headerLink"
              data-route-name="/contact"
              onClick={gotoPage}
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
};

export default withRouter(Header);
