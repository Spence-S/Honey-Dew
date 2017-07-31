import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListCreator extends Component {
  state = {
    value: ''
  };

  render() {
    return (
      <div className="row">
        <button
          type="submit"
          className="btn btn-inverse"
          onClick={() => {
            this.props.createList(this.state.value);
            this.setState({ value: '' });
          }}
        >
          Add New List
        </button>
        <div className="col-xs-6">
          <input
            className="form-control"
            type="text"
            onChange={e => this.props.changeFormValue(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

ListCreator.propTypes = {
  createList: PropTypes.func.isRequired
};
