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
  constructor(props) {
    super(props);
    this.state = {
      addListFormValue: ''
    };
  }

  render() {
    return (
      <div>
        <ListCreator
          changeFormValue={value => this.setState({ addListFormValue: value })}
          postListName={() => this.props.postList(this.state.addListFormValue)}
        />
        <ActiveListSelector
          postList={list => this.props.postList(list)}
          getList={list => this.props.getList(list)}
          setActive={list => this.props.setActiveList(list)}
          activeList={this.props.listState.activeList.name}
          token={this.props.authState.token}
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
