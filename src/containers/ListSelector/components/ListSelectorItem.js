import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ListSelectorItem extends Component {
  render() {
    return (
      <div
        className={
          this.props.list._id === this.props.activeListId
            ? 'btn btn-info'
            : 'btn btn-default'
        }
        onMouseEnter={() => this.setState({ showDelete: true })}
        onMouseLeave={() => this.setState({ showDelete: false })}
        onClick={() => {
          this.props.readList(this.props.lists[this.props.index]);
        }}
      >
        {this.props.listSelectorItem.name + ' '}
        <span className="badge">
          {this.props.listSelectorItem.todoIds.length}
        </span>
      </div>
    );
  }
}

ListSelectorItem.propTypes = {
  listSelectorItem: PropTypes.object,
  activeListId: PropTypes.string,
  readList: PropTypes.func,
  lists: PropTypes.array
};

export default ListSelectorItem;
