import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActiveListSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      value: '',
      showDelete: false
    };
  }

  renderLists = () =>
    this.props.lists.map((list, index) =>
      <button
        className={
          list._id === this.props.activeList._id
            ? 'btn btn-info btn-group'
            : 'btn btn-default btn-group'
        }
        key={index}
        onClick={() => {
          this.props.readList(this.props.lists[index]);
        }}
        onMouseEnter={() => {
          this.setState({ showDelete: true });
        }}
        onMouseLeave={() => {
          this.setState({ showDelete: false });
        }}
      >
        {list.name} <span className="badge">{list.todoIds.length}</span>
        {this.state.showDelete ? <span className="fa fa-times" /> : null}
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
  activeList: PropTypes.object.isRequired
};

export default ActiveListSelector;
