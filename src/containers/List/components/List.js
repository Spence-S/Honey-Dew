import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem/ListItem';

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
                  currentText={listItem.text}
                  id={listItem._id}
                  index={index}
                  updateListItem={this.props.updateListItem}
                  deleteListItem={this.props.deleteListItem}
                  listId={this.props.activeList._id}
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
  activeList: PropTypes.object.isRequired,
  showEditableListItem: PropTypes.bool,
  deleteListItem: PropTypes.func,
  updateListItem: PropTypes.func
};

export default List;
