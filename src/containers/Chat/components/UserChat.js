import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Panel } from 'react-bootstrap';
import Message from './Message';
import PropTypes from 'prop-types';
import PubNubReact from 'pubnub-react';

//pubnub
//import PubNub from 'pubnub';

class UserChat extends Component {
  constructor(props) {
    super(props);

    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-ca690162-9122-40f0-aa86-568b23b753f4',
      subscribeKey: 'sub-c-88da46c6-77d9-11e7-9c85-0619f8945a4f'
    });

    this.state = {
      messages: [
        {
          text: 'My first message',
          user: 'me'
        },
        {
          text: 'My first message',
          user: this.props.user.userName
        },
        {
          text: 'My second message',
          user: 'me'
        }
      ]
    };
  }

  componentDidMount = () => {};

  publishToChannel = e => {
    this.setState({ messages: this.state.messages.push({}) });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.publishToChannel();
        }}
      >
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>
            Chat with {this.props.user.userName}
          </ControlLabel>
          <Panel>
            {this.state.messages.map((message, index) => {
              return (
                <Message
                  message={message.text}
                  userName={message.user}
                  key={index}
                />
              );
            })}
          </Panel>
        </FormGroup>
        <FormControl
          id="formControlsText"
          placeholder={`send ${this.props.user.userName} a message!`}
        />
      </form>
    );
  }

  componentWillUnmount() {
    this.pubnub.unsubscribe({
      channels: ['channel1']
    });
  }
}

UserChat.propTypes = {
  user: PropTypes.object
};

export default UserChat;
