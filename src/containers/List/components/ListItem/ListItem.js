import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditableListItem from './EditableListItem';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
  }

  render() {
    if (this.state.editable) {
      return (
        <div>
          <EditableListItem
            text={this.props.currentText}
            showListItemView={() =>
              this.setState({ editable: !this.state.editable })}
            id={this.props.id}
            index={this.props.index}
            updateListItem={this.props.updateListItem}
          />
        </div>
      );
    } else {
      return (
        <li className="list-group-item clearfix">
          <p>
            {this.props.currentText}
          </p>
          <span
            className="fa fa-times pull-right"
            onClick={() =>
              this.props.deleteListItem(
                this.props.listId,
                this.props.id,
                this.props.index
              )}
            style={{ marginLeft: 10 }}
          />
          <button
            className="btn btn-link btn-xs pull-right"
            onClick={() => this.setState({ editable: !this.state.editable })}
          >
            Edit
          </button>
        </li>
      );
    }
  }
}

ListItem.propTypes = {
  deleteListItem: PropTypes.func.isRequired,
  updateListItem: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentText: PropTypes.string
};

export default ListItem;
