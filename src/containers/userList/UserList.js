import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userListActions from './user_actions';

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

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userListActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
