import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { listActions } from '../ListSelector';

import ListForm from './components/ListForm';
import List from './components/List';

class ListContainer extends Component {
  render() {
    return (
      <div>
        <ListForm
          createListItem={this.props.createListItem}
          activeList={this.props.listState.activeList}
          deleteList={this.props.deleteList}
        />
        <List
          list={this.props.listState.activeList.list}
          deleteListItem={this.props.deleteListItem}
          updateListItem={this.props.updateListItem}
          activeList={this.props.listState.activeList}
        />
      </div>
    );
  }
}

ListContainer.propTypes = {
  createListItem: PropTypes.func,
  updateListItem: PropTypes.func,
  deleteListItem: PropTypes.func,
  listState: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...listActions }, dispatch);
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
