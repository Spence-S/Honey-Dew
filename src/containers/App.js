import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import Spinner from 'react-spinner'

//import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
//import EditableTodo from './EditableTodo';

// action creators
import * as actions from '../actions';

//css
import './App.css'

//const headers = { 'x-auth': window.localStorage.getItem('x-auth') };

class App extends Component {
  constructor(props){
    super(props);
    this.headers = { 'x-auth': window.localStorage.getItem('x-auth') };
    this.state = {
      //todos: [],
      formVal: ''
    };
  }

  componentDidMount = () => {
    this.props.updateList();
  }

  refreshState = () => {
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
    // axios.post(`https://mighty-falls-76862.herokuapp.com/api`, {text: this.state.formVal}, { headers })
    //   .then(payload => {
    //     this.setState({formVal : ''})
    //     this.refreshState();
    //   })
    //   .catch( e => {
    //     console.log(e);
    //   });
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

  render() {
    return (
      <div>
        {this.renderTodoForm()}
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-4">
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
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { ...state }
  // return {
  //   todos: state.todosState.list
  // }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
