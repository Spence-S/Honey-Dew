import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListCreator extends Component {
  render() {
    return (
      <div className="row">
        <button
          type="submit"
          className="btn btn-inverse"
          onClick={() => {
            this.props.postListName();
            return this.props.changeFormValue('');
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
  changeFormValue: PropTypes.func.isRequired,
  postListName: PropTypes.func.isRequired
};
