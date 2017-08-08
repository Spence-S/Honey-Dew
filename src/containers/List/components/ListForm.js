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
        <h1 className="fancy">
          {this.props.activeList.name}
          <button
            className="btn btn-danger btn-xs pull-right"
            onClick={() => this.props.deleteList(this.props.activeList._id)}
          >
            delete list
          </button>
        </h1>
        <form
          className="row"
          onSubmit={e => {
            e.preventDefault();
            this.props.createListItem(this.props.activeList, this.state.value);
            this.setState({ value: '' });
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
  createListItem: PropTypes.func,
  activeList: PropTypes.object
};

export default ListForm;
