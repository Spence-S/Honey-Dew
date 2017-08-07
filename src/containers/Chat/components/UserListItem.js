import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import UserChat from './UserChat';

class UserListItem extends Component {
  state = {
    expanded: false
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ expanded: !this.state.expanded })}
        >
          +
        </button>
        <Panel
          header={this.props.user.userName}
          onEntering={this.toggleOpen}
          onExited={this.toggleOpen}
          expanded={this.state.expanded}
          collapsible
        >
          {this.state.expanded
            ? <UserChat
                messages={this.state.messages}
                user={this.props.user}
                me={this.props.me}
              />
            : null}
        </Panel>
      </div>
    );
  }
}

UserListItem.propTypes = {
  user: PropTypes.object.isRequired,
  me: PropTypes.object.isRequired
};

export default UserListItem;
