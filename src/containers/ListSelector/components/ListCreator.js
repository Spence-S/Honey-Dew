import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListCreator extends Component {
  state = {
    value: ''
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.createList(this.state.value);
              this.setState({ value: '' });
            }}
          >
            <button type="submit" className="btn btn-inverse">
              Add New List
            </button>
            <input
              className="form-control"
              type="text"
              onChange={e => this.setState({ value: e.target.value })}
            />
          </form>
        </div>
      </div>
    );
  }
}

ListCreator.propTypes = {
  createList: PropTypes.func.isRequired
};
