import React, { Component } from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Redirect, Link } from 'react-router-dom';

const NavBar = props =>
  <div>
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <div className="fancy small">HoneyDew</div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer exact to="/">
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/TodoList">
            <NavItem>TodoList</NavItem>
          </LinkContainer>
          {this.props.authState.isLoggedIn
            ? // Make logout logout immediately when logged in
              <NavItem onClick={() => this.props.logoutThunk()}>Logout</NavItem>
            : // or link to login page if logged out
              <LinkContainer to="/Auth">
                <NavItem>Login</NavItem>
              </LinkContainer>}
          <NavDropdown
            title={
              // need to review this and change to check if image url exists
              // needs to verify user state and image has been set
              this.props.authState && this.props.accountState.image
                ? //'account img'
                  <img
                    alt="fbpic"
                    className="img-circle noouter tiny"
                    src={this.props.accountState.picture}
                  />
                : 'Account'
            }
            id="basic-nav-dropdown"
          >
            <LinkContainer to="/account">
              <MenuItem>Account</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>;

export default NavBar;
