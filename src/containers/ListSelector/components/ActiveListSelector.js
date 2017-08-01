import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class ActiveListSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      value: ''
    };
  }

  renderLists = () =>
    this.props.lists.map((list, index) =>
      <button
        className={
          list.name === this.props.activeList
            ? 'btn btn-info btn-group'
            : 'btn btn-default btn-group'
        }
        key={index}
        onClick={() => {
          this.props.readList(this.props.lists[index]);
        }}
      >
        {list.name} <span className="badge">{list.todoIds.length}</span>
      </button>
    );

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            {this.renderLists()}
          </div>
        </div>
      </div>
    );
  }
}

ActiveListSelector.propTypes = {
  lists: PropTypes.array.isRequired,
  readList: PropTypes.func.isRequired,
  activeList: PropTypes.string.isRequired
};

export default ActiveListSelector;
