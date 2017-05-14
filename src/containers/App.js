import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
//import EditableTodo from './EditableTodo';

// action creators
import * as actions from '../actions/api';

//css
import './App.css'

const headers = { 'x-auth': window.localStorage.getItem('x-auth') };

class App extends Component {
  constructor(props){
    super(props);
    this.headers = { 'x-auth': window.localStorage.getItem('x-auth') };
    this.state = {
      todos: [],
      formVal: ''
    };
  }

componentDidMount(){
  // const headers = { 'x-auth': window.localStorage.getItem('x-auth') };
  console.log(this.props.todos);
  this.props.todoApiCall();
    // axios.get(`https://mighty-falls-76862.herokuapp.com/api`, { headers })
    //   .then(
    //     todos => {
    //       this.setState({todos: todos.data.todos});
    //     }
    //   ).catch(
    //     err => {
    //       console.log('there was an error', err);
    //     }
    //   );
    }

  refreshState = () => {
    axios.get(`https://mighty-falls-76862.herokuapp.com/api`, { headers })
      .then(
        todos => {
          this.setState({todos: todos.data.todos});
        }
      ).catch(
        err => {
          console.log('there was an error', err);
        }
      );
  }

  handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    this.setState({ isLoggedIn: false })
  }

  handleChange = (e) => {
    this.setState({formVal: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://mighty-falls-76862.herokuapp.com/api`, {text: this.state.formVal}, { headers })
      .then(payload => {
        this.setState({formVal : ''})
        this.refreshState();
      })
      .catch( e => {
        console.log(e);
      });
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
              {this.props.todos.map( todo => {
                return(
                  <TodoListItem
                    key={todo._id}
                    item={todo.text}
                    id={todo._id}
                    callBack={this.refreshState}
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
  return {
    todos: state.todosState.list
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
