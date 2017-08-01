import React, { Component } from 'react';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as listActions from './actions';

// components
import ActiveListSelector from './components/ActiveListSelector';
import ListCreator from './components/ListCreator';

class ListSelector extends Component {
  componentDidMount() {
    this.props.readAllLists();
  }

  render() {
    return (
      <div>
        <ListCreator createList={this.props.createList} />
        <ActiveListSelector
          lists={this.props.listState.lists}
          activeList={this.props.listState.activeList.name}
          readList={this.props.readList}
          setActiveList={this.props.setActiveList}
        />
      </div>
    );
  }
}

const mapState = state => {
  return { ...state };
};

const mapDispatch = dispatch => {
  return bindActionCreators({ ...listActions }, dispatch);
};

export default connect(mapState, mapDispatch)(ListSelector);
