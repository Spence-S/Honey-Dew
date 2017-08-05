import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userListActions from './actions';

import UserList from './components/UserList';

class ChatContainer extends Component {
  render() {
    return (
      <div>
        <UserList
          userList={this.props.userListState.userList}
          getUsers={this.props.getUsers}
          me={this.props.accountState}
        />
      </div>
    );
  }
}

ChatContainer.propTypes = {
  getUsers: PropTypes.func
};

const mapState = state => {
  return { ...state };
};

const mapDispatch = dispatch => {
  return bindActionCreators({ ...userListActions }, dispatch);
};

export default connect(mapState, mapDispatch)(ChatContainer);
