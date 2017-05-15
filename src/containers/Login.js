import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import * as actions from '../actions/auth_actions';
import { bindActionCreators } from 'redux';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      showSignIn: true,
      emailText: '',
      passwordText: '',
      retypePasswordText: ''
    }
  }

  sendFormData = (e) => {
    e.preventDefault();
    this.props.getToken({
      email: this.state.emailText,
      password: this.state.passwordText
    });
  }

  renderSignIn = () =>
    (
      <form className="form-horizontal">
        <fieldset>
          <legend>{this.state.showSignIn ? "Login" : "Sign Up"}</legend>

          <div className="form-group">
            <label className="col-md-4 control-label">Email:</label>
            <div className="col-md-4">
            <input id="Email"
              name="Email"
              type="text"
              placeholder="myemail@domain.com"
              className="form-control input-md"
              required=""
              value={ this.state.emailText }
              onChange={ (e) => { this.setState({ emailText: e.target.value }); } }
            />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label">Password:</label>
            <div className="col-md-4">
              <input id="Password"
                name="Password"
                type="password"
                className="form-control input-md"
                required=""
                value={ this.state.passwordText }
                onChange={ (e) => { this.setState({ passwordText: e.target.value }) } }
              />
            </div>
          </div>

          {this.state.showSignIn ?  null : this.renderVerifyPasswordInput()}

          <div className="form-group">
            <label className="col-md-4 control-label"></label>
            <div className="col-md-8">
              <button
                id="button1"
                name="button1"
                className={this.state.showSignIn ?
                  "btn btn-info"
                  :
                  "btn btn-link"
                }
                onClick={this.state.showSignIn ?
                  this.sendFormData
                  :
                  this.togglePage
                }
                >Sign In </button>
              <button
                id="button2"
                name="button2"
                className={this.state.showSignIn ?
                  "btn btn-link"
                  :
                  "btn btn-info"
                }
                onClick={this.state.showSignIn ?
                  this.togglePage
                  :
                  this.sendFormData
                }
                >Sign-Up</button>
            </div>
          </div>

        </fieldset>
      </form>
    )

  renderVerifyPasswordInput = () => {
    return(
      <div className="form-group">
        <label className="col-md-4 control-label">Re-type Password:</label>
        <div className="col-md-4">
          <input id="Password"
            name="Password"
            type="text"
            className="form-control input-md"
            required=""
            value={ this.state.retypePasswordText }
            onChange={ (e) => { this.setState({ retypePasswordText: e.target.value }) } }
          />
        </div>
      </div>
    )
  }

  render(){
    if (!this.props.authState.isLoggedIn) {
      return (
        <div>
          { this.renderSignIn() }
        </div>
      )
    }
    else{
      return (
        <App
          logout={this.logout}
        />
      )
    }
  }
}

function mapStateToProps(state){
  return { ...state }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    ...actions
    // loginUser: actions.getToken,
    // logoutUser: actions.logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
