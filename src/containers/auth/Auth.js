import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authActions } from './';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import SignIn from './components/SignIn';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: true,
      emailText: '',
      passwordText: '',
      retypePasswordText: ''
    };
  }

  sendFormData = e => {
    e.preventDefault();
    // use login flow if on loging page
    if (this.state.showSignIn) {
      this.props.getToken({
        email: this.state.emailText,
        password: this.state.passwordText
      });
      // else use signup route
      // validate that PW match and are 6 chars
    } else if (this.state.passwordText === this.state.retypePasswordText) {
      if (this.state.passwordText.length >= 6) {
        this.props.getNewUserToken({
          email: this.state.emailText,
          password: this.state.passwordText
        });
      } else {
        this.props.loginError({
          message: 'Passwords need to be 6 characters or longer.',
          status: 'warning'
        });
      }
    } else {
      this.props.loginError({
        message: 'Your passwords do not match!',
        status: 'warning'
      });
    }
  };

  togglePage = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ showSignIn: !this.state.showSignIn });
  };

  renderSignIn = () =>
    <div>
      <SignIn
        showSignIn={this.state.showSignIn}
        emailText={this.state.emailText}
        emailTextChange={e => this.setState({ emailText: e.target.value })}
        passwordText={this.state.passwordText}
        passwordTextChange={e =>
          this.setState({ passwordText: e.target.value })}
        sendFormData={this.sendFormData}
        togglePage={this.togglePage}
        retypePasswordText={this.state.retypePasswordText}
        retypePasswordTextChange={e =>
          this.setState({ retypePasswordText: e.target.value })}
      />
    </div>;

  render() {
    if (this.props.authState.isLoggedIn) {
      return <Redirect to="TodoList" />;
    } else {
      return (
        <div>
          {this.renderSignIn()}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...authActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
