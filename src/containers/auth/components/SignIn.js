import React from 'react';

import VerifyPasswordInput from './VerifyPasswordInput';

const SignIn = props =>
  <div>
    <form className="form-horizontal">
      <fieldset>
        <legend className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
          {props.showSignIn ? 'Login' : 'Sign Up'}
        </legend>
        <div className="form-group">
          <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            {!props.showSignIn
              ? <div>
                  <h4>Thanks for your interest in Honey Dew!</h4>
                  We care about your security. Passwords should be at least 6
                  characters.
                </div>
              : <div>
                  Login with email and password. Facebook Login is coming soon!
                </div>}
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 col-md-4 control-label">Email:</label>
          <div className="col-sm-6 col-md-4">
            <input
              id="Email"
              name="Email"
              type="text"
              placeholder="myemail@domain.com"
              className="form-control input-md"
              required
              value={props.emailText}
              onChange={e => {
                props.emailTextChange(e);
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-3 col-md-4 control-label">Password:</label>
          <div className="col-sm-6 col-md-4">
            <input
              id="Password"
              name="Password"
              type="password"
              className="form-control input-md"
              required
              value={props.passwordText}
              onChange={e => {
                props.passwordTextChange(e);
              }}
            />
          </div>
        </div>

        {props.showSignIn
          ? null
          : <VerifyPasswordInput
              retypePasswordText={props.retypePasswordText}
              retypePasswordTextChange={e => props.retypePasswordTextChange(e)}
            />}

        <div className="form-group">
          <label className="col-sm-3 col-md-4 control-label" />
          <div className="col-md-8">
            <button
              id="button1"
              name="button1"
              className={props.showSignIn ? 'btn btn-info' : 'btn btn-link'}
              onClick={props.showSignIn ? props.sendFormData : props.togglePage}
            >
              Sign In{' '}
            </button>
            <button
              id="button2"
              name="button2"
              className={props.showSignIn ? 'btn btn-link' : 'btn btn-info'}
              onClick={props.showSignIn ? props.togglePage : props.sendFormData}
            >
              Sign-Up
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>;

export default SignIn;
