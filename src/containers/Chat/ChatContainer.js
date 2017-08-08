import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userListActions from './actions';

import UserList from './components/UserList';

class ChatContainer extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-offset-2 col-sm-9 col-md-offset-3 col-md-6 col-lg-4 col-lg-offset-4">
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
