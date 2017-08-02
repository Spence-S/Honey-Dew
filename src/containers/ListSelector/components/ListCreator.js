import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListCreator extends Component {
  state = {
    value: '',
    showInput: false
  };

  showInput = () => {
    this.props.createList(this.state.value);
    this.setState({ value: '', showInput: false });
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.state.showInput
                ? this.showInput()
                : this.setState({ showInput: true });
            }}
          >
            {this.state.showInput
              ? <input
                  className="form-control"
                  type="text"
                  onChange={e => this.setState({ value: e.target.value })}
                  autoFocus={true}
                  onBlur={() => this.setState({ value: '', showInput: false })}
                />
              : null}
            <button
              type="submit"
              className="btn btn-inverse"
              onClick={
                this.state.showInput
                  ? () => this.setState({ showInput: true })
                  : null
              }
            >
              {this.state.showInput ? 'Add List' : '+'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

ListCreator.propTypes = {
  createList: PropTypes.func.isRequired
};
