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
import List from './List';

import { flashActions } from './flash';
import { authActions } from './auth';
import { accountActions } from './account';
import { todosActions } from './todos';

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
                  : <List />}
            />
            <Route path="/Auth" component={Auth} />
            <Route path="/Account" render={() => <Account {...this.props} />} />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...flashActions,
      ...authActions,
      ...accountActions,
      ...todosActions
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
