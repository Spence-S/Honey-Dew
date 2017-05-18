import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoListItem from './TodoListItem';

// action creators
import * as actions from '../actions';

//css
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.headers = { 'x-auth': window.localStorage.getItem('x-auth') };
    this.state = {
      formVal: ''
    };
  }

  componentDidMount = () => {
    this.props.updateList();
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
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
      <div>
        <button className='btn btn-link pull-right' onClick={this.handleLogout}>logout</button>
        <h1 className="fancy">Honey Dew:</h1>
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
        {this.renderAddFriendsBar()}
      </div>
    </div>
  )

  renderAddFriendsBar = () => (
    <div className="col-xs-12 col-sm-4 text-center" >
      <h2>Invite a friend!</h2>
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
