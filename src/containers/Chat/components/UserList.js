import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';

import UserListItem from './UserListItem';
import UserChat from './UserChat';

class UserList extends Component {
  componentDidMount = () => {
    this.props.getUsers();
  };

  renderUserList = () =>
    this.props.userList.map((user, index) => {
      return (
        <UserListItem key={index} eventKey={index} userName={user.userName}>
          <UserChat user={user} me={this.props.me} />
        </UserListItem>
      );
    });

  render() {
    return (
      <Accordion>
        {this.renderUserList()}
      </Accordion>
    );
  }
}

UserList.propTypes = {
  userList: PropTypes.array,
  getUsers: PropTypes.func
};

export default UserList;
