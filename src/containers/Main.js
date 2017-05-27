import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { history } from '..';
import { ConnectedRouter } from 'react-router-redux';

// Components
import LandingPage from './LandingPage';
import Login from './Login';
import App from './App';
import Account from './Account';

class Main extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
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
                <LinkContainer to="/Login"><NavItem>{this.props.authState.isLoggedIn ? 'Logout' : 'Login' }</NavItem></LinkContainer>
                <NavDropdown title={
                                    this.props.authState.isLoggedIn ?
                                    //'account img'
                                    (<img alt="fbpic" className="img-circle noouter" src={this.props.authState.facebook.picture.data.url} />)
                                    :
                                    'Account'
                                    } id="basic-nav-dropdown">
                  <LinkContainer to="/account"><MenuItem>Account</MenuItem></LinkContainer>
                  <MenuItem>Notifications</MenuItem>
                  <MenuItem>Stats</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            <Route exact path="/" component={LandingPage} />

            <Route exact path="/App" render={() => (
              !this.props.authState.isLoggedIn ?
                <Redirect to="/Login" /> : <App />
            )}
          />
            <Route path="/Login" component={Login} />
            <Route path="/Account" render={() => <Account {...this.props} />} />
        </div>
      </ConnectedRouter>
    )
  }
}

function mapStateToProps(state){
  return { ...state }
}

export default connect(mapStateToProps, null)(Main);
