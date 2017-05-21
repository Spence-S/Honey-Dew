import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
         <h2 className='fancy'>Honey Dew</h2>
          <h2 className='fancy'>Remind your honey!</h2>
        </Jumbotron>
      </div>
    );
  }
}

export default LandingPage;
