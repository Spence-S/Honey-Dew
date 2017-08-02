import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListSelectorItem from './ListSelectorItem';

class ActiveListSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  renderLists = () =>
    this.props.lists.map((list, index) =>
      <ListSelectorItem
        activeListId={this.props.activeList._id}
        listSelectorItem={list}
        list={list}
        key={index}
        readList={this.props.readList}
        index={index}
        lists={this.props.lists}
      />
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
