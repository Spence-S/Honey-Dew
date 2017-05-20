import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown,
  Grid
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import LandingPage from './LandingPage';

import Login from './Login';
import App from './App';

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/"><div className="fancy small">HoneyDew</div></Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
                <LinkContainer to="/App"><NavItem>App</NavItem></LinkContainer>
                <LinkContainer to="/Login"><NavItem>Login</NavItem></LinkContainer>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem>Action</MenuItem>
                  <MenuItem>Another action</MenuItem>
                  <MenuItem>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Grid fluid>
            <Route exact path="/" component={LandingPage} />

            <Route exact path="/App" render={() => (
              !this.props.authState.isLoggedIn ?
                <Redirect to="/Login" /> : <App />
            )}
          />
            <Route path="/Login" component={Login} />
          </Grid>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return { ...state }
}

export default connect(mapStateToProps, null)(Main);
