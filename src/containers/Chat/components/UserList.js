import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserListItem from './UserListItem';

class UserList extends Component {
  componentDidMount = () => {
    this.props.getUsers();
  };

  renderUserList = () => {
    return this.props.userList.map((user, index) => {
      if (user._id === this.props.me._id) {
        return null;
      } else {
        return (
          <UserListItem
            key={index}
            eventKey={index}
            user={user}
            me={this.props.me}
            onSelect={this.handleSelect}
          />
        );
      }
    });
  };

  render() {
    return (
      <div>
        {this.renderUserList()}
      </div>
    );
  }
}

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
  me: PropTypes.object.isRequired
};

export default UserList;
