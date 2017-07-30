import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h2 className="fancy">Honey Dew</h2>
          <h2 className="fancy">Remind your honey!</h2>
        </Jumbotron>
        <div>
          <h2>Hi everyone this is an Alpha version of this app.</h2>
          <div>
            Many more feature are currently in development and there are still
            bugs being worked out.
          </div>
          <div>
            The current functionality of the actual todo lists are extremely
            limited, but more is coming very soon.
          </div>
          <ul>
            <h2> Look forward to: </h2>
            <li>Managing multiple todo lists.</li>
            <li>Due dates for todo items</li>
            <li>Invite your friends by email</li>
            <li>Connect to facebook and login with facebook.</li>
            <li>connect with facebook friends using the App</li>
            <li>Send your friends todo items - The core feature of this app</li>
            <li>Log of each action, and the ability to rewind actions.</li>
          </ul>
          Enjoy.
        </div>
      </div>
    );
  }
}

export default LandingPage;
