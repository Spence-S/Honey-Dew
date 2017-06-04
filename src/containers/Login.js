import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth_actions';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'


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
    // use login flow if on loging page
    if(this.state.showSignIn){
      this.props.getToken({
        email: this.state.emailText,
        password: this.state.passwordText
      });
      // else use signup route
      // validate that PW match and are 6 chars
    } else if (this.state.passwordText === this.state.retypePasswordText) {
      if(this.state.passwordText.length >= 6){
        this.props.getNewUserToken({
          email:this.state.emailText,
          password: this.state.passwordText
        });
      } else {
        this.props.loginError({
          message: 'Passwords need to be 6 characters or longer.',
          status: 'warning'
        })
      }
    } else {
      this.props.loginError({
        message: 'Your passwords do not match!',
        status: 'warning'
      });
    }
  }

  togglePage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({showSignIn: !this.state.showSignIn});
  }

  renderSignIn = () =>
    (<div>
      <form className="form-horizontal">
        <fieldset>
          <legend className='col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4'>{this.state.showSignIn ? "Login" : "Sign Up"}</legend>
          <div className='form-group'>
            <div className='col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4'>
              {!this.state.showSignIn ? (
                <div >
                  <h4>Thanks for your interest in Honey Dew!</h4>
                  We care about your security. Passwords should be at least 6 characters.
                </div>
              ) : (
                <div>
                  Login with email and password. Facebook Login is coming soon!
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-3 col-md-4 control-label">Email:</label>
            <div className="col-sm-6 col-md-4">
            <input id="Email"
              name="Email"
              type="text"
              placeholder="myemail@domain.com"
              className="form-control input-md"
              required
              value={ this.state.emailText }
              onChange={ (e) => { this.setState({ emailText: e.target.value }); } }
            />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-3 col-md-4 control-label">Password:</label>
            <div className="col-sm-6 col-md-4">
              <input id="Password"
                name="Password"
                type="password"
                className="form-control input-md"
                required
                value={ this.state.passwordText }
                onChange={ (e) => { this.setState({ passwordText: e.target.value }) } }
              />
            </div>
          </div>

          {this.state.showSignIn ?  null : this.renderVerifyPasswordInput()}

          <div className="form-group">
            <label className="col-sm-3 col-md-4 control-label"></label>
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
    </div>
    )

  renderVerifyPasswordInput = () => {
    return(
      <div className="form-group">
        <label className="col-sm-3 col-md-4 control-label">Re-type Password:</label>
        <div className="col-sm-6 col-md-4">
          <input id="Password"
            name="Password"
            type="password"
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
    if(this.props.authState.isLoggedIn) {
      return(
        <Redirect to='App' />
      )
    } else {
      return (
        <div>
          { this.renderSignIn() }
        </div>
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
