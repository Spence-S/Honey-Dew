import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

import TodoListItem from './TodoListItem';

// action creators
import * as actions from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      formVal: '',
      showModal: false,
    };
  }

  componentDidMount = () => {
    this.props.updateList();
  }

  handleChange = (e) => {
    this.setState({ formVal: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodoThunk(this.state.formVal);
    this.setState({formVal : ''});
  }

  renderTodoForm = () => {
    return(
      <div className="modal-container">
        <h1 className="fancy">My Todos:</h1>
        <form onSubmit={this.handleSubmit} className='row'>
          <div className='form-group col-xs-12 col-sm-8 col-md-4'>
            <div className='input-group'>
              <input  type='text'
                className='form-control'
                value={this.state.formVal}
                onChange={this.handleChange} />
                <span className='input-group-btn'>
                  <button type='submit' className='btn btn-primary app-button'>Add Me!!</button>
                </span>
              </div>
            </div>
          </form>
      </div>
    )
  }

  renderTodoList = () => (
    <div>
      {this.renderTodoForm()}
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <ul className='list-group'>
            {this.props.todosState.list.map( (todo, index) => {
              return(
                <TodoListItem
                  key={todo._id}
                  item={todo.text}
                  id={todo._id}
                  index={index}
                  notes={todo.notes}
                  dueDate={todo.dueDate}
                  callBack={this.refreshState}
                  editTodo={this.props.editTodo}
                  deleteTodo={this.props.deleteTodoThunk}
                />
              )
            })}
          </ul>
        </div>
        <div className="col-xs-0 col-sm-2 col-md-2 col-lg-2">
        </div>
      </div>
    </div>
  )

  render() {
    return (
        <div>
          {this.renderTodoList()}
        </div>
    )
  }
}

function mapStateToProps (state) {
  return { ...state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
