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
  render() {
    return (
      <div>
        <ListCreator
          postListName={() =>
            this.props.createList(this.state.addListFormValue)}
        />
        <ActiveListSelector
          postList={list => this.props.createList(list)}
          getList={list => this.props.readList(list)}
          setActive={list => this.props.setActiveList(list)}
          activeList={this.props.listState.activeList.name}
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
