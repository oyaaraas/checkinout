import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">checkinout</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <Link to="/profile">Profil</Link>
            </NavItem>
            <NavItem>
              <Link to="/login">Logg inn</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
