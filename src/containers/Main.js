import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './nav/NavBar';

import { history } from '..';
import { ConnectedRouter } from 'react-router-redux';

// Components
import LandingPage from './LandingPage';
import Auth from './auth/';
// import TodoList from './todos';
import Account from './account';
import Flash from './flash';
import App from './App';

import { flashActions } from './flash';
// import { authActions } from './auth';
import { accountActions } from './account';

class Main extends Component {
  renderFlashMessage = () => {
    // check if there is a message to show
    if (this.props.flashState.showFlash) {
      //show message
      return (
        <Flash
          offClick={() => this.props.hideFlash()}
          show={this.props.flashState.showFlash}
          message={this.props.flashState.message}
          style={this.props.flashState.status}
        />
      );
    }
  };

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <NavBar />
          <div className="container-fluid">
            {this.renderFlashMessage()}
            <Route exact path="/" component={LandingPage} />
            <Route
              exact
              path="/TodoList"
              render={() =>
                !this.props.authState.isLoggedIn
                  ? <Redirect to="/Auth" />
                  : <App />}
            />
            <Route
              exact
              path="/UserChat"
              render={() =>
                !this.props.authState.isLoggedIn
                  ? <Redirect to="/Auth" />
                  : <UserList />}
            />
            <Route path="/Auth" component={Auth} />
            <Route path="/Account" render={() => <Account {...this.props} />} />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

function mapState(state) {
  return { ...state };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      ...flashActions,
      ...accountActions
    },
    dispatch
  );
}
export default connect(mapState, mapDispatch)(Main);
