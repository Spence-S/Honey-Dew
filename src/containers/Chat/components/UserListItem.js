import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

class UserListItem extends Component {
  render() {
    return (
      <Panel
        header={this.props.userName}
        eventKey={this.props.eventKey}
        collapsible
      >
        {this.props.children}
      </Panel>
    );
  }
}

UserListItem.propTypes = {
  userName: PropTypes.string.isRequired
};

export default UserListItem;
