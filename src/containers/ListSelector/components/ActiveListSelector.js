import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const url = process.env.REACT_APP_API_URL;

class ActiveListSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      value: ''
    };
  }

  componentDidMount = async () => {
    const lists = await axios.get(`${url}/lists`, {
      headers: { 'x-auth': this.props.token }
    });
    this.setState({ lists: lists.data });
  };

  renderLists = () =>
    //this.props.listState.lists.map((list, index) =>
    this.state.lists.map((list, index) =>
      <button
        className={
          list.name === this.props.activeList
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
          <div className="col-xs-12">
            {this.renderLists()}
          </div>
        </div>
      </div>
    );
  }
}

// ActiveListSelector.propTypes = {
//   token: PropTypes.string.isRequired,
//   getList: PropTypes.func.isRequired,
//   activeList: PropTypes.string.isRequired,
//   postList: PropTypes.func.isRequired
// };

export default ActiveListSelector;
