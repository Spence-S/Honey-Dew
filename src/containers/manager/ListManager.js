import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from './list_actions';

class ListManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount = () => {
    this.props.getAllLists();
  };

  renderLists = () =>
    this.props.listState.lists.map((list, index) =>
      <button
        className={
          list.name === this.props.listState.activeList.name
            ? 'btn btn-info btn-group'
            : 'btn btn-default btn-group'
        }
        key={index}
        onClick={() => {
          this.props.getList(list);
        }}
      >
        {list.name} <span className="badge">{list.todoIds.length}</span>
      </button>
    );

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-2">
            {/* BUTTONS */}
            <button
              className="btn btn-inverse btn-block"
              onClick={() => {
                this.props.postList(this.state.value);
                return this.setState({ value: '' });
              }}
            >
              Add New List
            </button>
          </div>
          {/* FORM */}
          <div className="col-xs-6">
            <input
              className="form-control"
              type="text"
              onChange={e => this.setState({ value: e.target.value })}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xs-12">
            {this.renderLists()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...listActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListManager);
