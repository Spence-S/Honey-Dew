import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as listActions from './actions';

import ListForm from './components/ListForm';
import List from './components/List';

class ListContainer extends Component {
  render() {
    return (
      <div>
        <ListForm
          createListItem={listItemText =>
            this.props.createListItem(listItemText)}
        />
        <List
          list={[{ text: '123', _id: 1234 }]}
          deleteListItem={this.props.deleteListItem}
          updateListItem={this.props.updateListItem}
        />
      </div>
    );
  }
}

ListContainer.propTypes = {
  createListItem: PropTypes.func,
  updateListItem: PropTypes.func,
  deleteListItem: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...listActions }, dispatch);
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
