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
      messages: [],
      value: ''
    };
  }

  componentDidMount = () => {
    this.pubnub.init(this);

    this.pubnub.subscribe({
      channels: [this.props.user._id],
      //  callback: console.log(msg),
      withPresence: true
    });

    this.pubnub.getMessage(this.props.user._id, msg => {
      console.log('state:', this.state.messages.concat(msg.message));
      this.setState({ messages: this.state.messages.concat(msg.message) });
    });

    this.pubnub.getStatus(st => {
      this.pubnub.publish({
        message: {
          message: 'Ready to go with pubnub',
          userId: this.props.user._id,
          userName: this.props.user.userName
        },
        channel: this.props.user._id
      });
    });
  };
  /*
  in user chat we publish to both the logged in users channel(our channel)
  and for each of the freinds or users or whatever list we have we also publish to their channel
  channel. We only subscribe to our own channel, which contains ALL of the messages
  sent to us by every user. The UI actually seperates the messages out for the users.
  */
  publishMessage = () => {
    this.pubnub.publish({
      message: {
        message: this.state.value,
        userName: this.props.user.userName,
        userId: this.props.user._id
      },
      // this prop is not available yet need to add it to global state
      channels: [this.props.me._id, this.props.user._id]
    });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.publishMessage();
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
                  message={message.message}
                  userName={message.userName}
                  userId={message.userId}
                  key={index}
                />
              );
            })}
          </Panel>
        </FormGroup>
        <FormControl
          id="formControlsText"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          placeholder={`send ${this.props.user.userName} a message!`}
        />
      </form>
    );
  }

  componentWillUnmount() {
    this.pubnub.unsubscribe({
      channels: [this.props.user._id]
    });
  }
}

UserChat.propTypes = {
  user: PropTypes.object
};

export default UserChat;
