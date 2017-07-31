import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div>
        <h1 className="fancy">Whatever Name</h1>
        <form
          className="row"
          onSubmit={e => {
            e.preventDefault();
            this.props.createListItem(this.state.value);
          }}
        >
          <div className="form-group col-xs-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  className="btn btn-primary TodoList-button"
                >
                  Add Me!!
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ListForm.propTypes = {
  createListItem: PropTypes.func
};

export default ListForm;
