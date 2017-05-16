import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EditableTodo extends Component{
  constructor(props){
    super(props);
    this.state = { value: this.props.text }
  }

  handleSaveClick = (event) => {
    event.preventDefault();
    this.props.editTodo(this.state.value, this.props.id, this.props.index);
    this.props.todoListItemView();
  }

  handleCancelClick = (e) => {
    e.preventDefault();
    this.props.todoListItemView();
  }

  handleFormChange = (e) => {
    this.setState({ value: e.target.value });
  }

  componentDidMount = () => {
    //provides event listener for outside component click
    document.addEventListener('click', this.handleOutsideClick, false);
    //triggers input to autofocus on mount
    this.textInput.focus();
  }

  componentWillUnmount = () => {
    //removes the event listener on unmount
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)){
      this.props.todoListItemView();
    }
  }

  render(){
    return(
      <li className='list-group-item'>
       <form onSubmit={this.handleSaveClick}>
        <div className='input-group'>
          <input className='form-control'
                 type="text"
                 style={{borderRadius: 5, marginRight: 5}}
                 onChange={this.handleFormChange}
                 value={this.state.value}
                 ref={(input) => {this.textInput=input;}}
                 />
            <span className='input-group-btn'>
              <input  className='btn btn-link pull-right btn-xs form-inline'
                      style={{borderRadius: 5, marginLeft: 5}}
                      onClick={this.handleCancelClick}
                      type="button"
                      value="Cancel"
              />
            </span>
            <span className='input-group-btn'>
              <button className='btn btn-primary pull-right btn-xs form-inline'
                      style={{borderRadius: 5, marginLeft: 5}}
                      type="submit"
              >Save</button>
            </span>
          </div>
        </form>
      </li>
      );
    }
  }

export default EditableTodo;
