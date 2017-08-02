import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  FieldGroup
} from 'react-bootstrap';
import PropTypes from 'prop-types';

class UserChat extends Component {
  render() {
    return (
      <form>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>
            Chat with {this.props.user.userName}
          </ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>
        <FormControl
          id="formControlsText"
          placeholder={`send ${this.props.user.userName} a message!`}
        />
      </form>
    );
  }
}

UserChat.propTypes = {
  user: PropTypes.object
};

export default UserChat;
