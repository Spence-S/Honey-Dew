import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
  componentDidMount = () => {
    this.props.getUsers();
  };

  renderUserList = () =>
    this.props.userListState.userList.map((user, index) => {
      return (
        <div className="panel" key={index + 10000}>
          <h2>
            {user.userName}
          </h2>
        </div>
      );
    });

  render() {
    return (
      <div>
        {this.renderUserList()}
      </div>
    );
  }
}

UserList.propTypes = {
  userList: PropTypes.array,
  getUsers: PropTypes.func
};

export default UserList;
