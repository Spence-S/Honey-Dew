import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem/ListItem';
import EditableListItem from './ListItem/EditableListItem';

class List extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <ul className="list-group">
            {this.props.list.map((listItem, index) => {
              return (
                <ListItem
                  key={listItem._id}
                  item={listItem.text}
                  id={listItem._id}
                  index={index}
                  updateListItem={this.props.updateListItem}
                  deleteListItem={this.props.deleteListItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  showEditableListItem: PropTypes.bool,
  deleteListItem: PropTypes.func,
  updateListItem: PropTypes.func
};

export default List;
