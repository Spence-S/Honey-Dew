import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class EditableListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.text };
  }

  updateListItem = e => {
    e.preventDefault();
    this.props.updateListItem(
      this.state.value
      // this.props.id,
      // this.props.index
    );
    this.props.showListItemView();
  };

  componentDidMount = () => {
    //provides event listener for outside component click
    document.addEventListener('click', this.handleOutsideClick, false);
    //triggers input to autofocus on mount
    this.textInput.focus();
  };

  componentWillUnmount = () => {
    //removes the event listener on unmount
    document.removeEventListener('click', this.handleOutsideClick, false);
  };

  handleOutsideClick = e => {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.showListItemView();
    }
  };

  render() {
    return (
      <li className="list-group-item">
        <form onSubmit={this.updateListItem}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              style={{ borderRadius: 5, marginRight: 5 }}
              onChange={e => this.setState({ value: e.target.value })}
              value={this.state.value}
              ref={input => {
                this.textInput = input;
              }}
            />
            <span className="input-group-btn">
              <input
                className="btn btn-link pull-right btn-xs form-inline"
                style={{ borderRadius: 5, marginLeft: 5 }}
                onClick={() => this.props.showListItemView()}
                type="button"
                value="Cancel"
              />
            </span>
            <span className="input-group-btn">
              <button
                className="btn btn-primary pull-right btn-xs form-inline"
                style={{ borderRadius: 5, marginLeft: 5 }}
                type="submit"
              >
                Save
              </button>
            </span>
          </div>
        </form>
      </li>
    );
  }
}

EditableListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  showListItemView: PropTypes.func,
  updateListItem: PropTypes.func
};

export default EditableListItem;
