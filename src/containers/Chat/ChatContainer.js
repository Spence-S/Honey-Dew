import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userListActions from './user_actions';

class ChatContainer extends Component {
  render() {
    return <div>Hello From Chat Container</div>;
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
