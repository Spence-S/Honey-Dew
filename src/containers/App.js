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
    this.headers = { 'x-auth': window.localStorage.getItem('x-auth') };
    this.state = {
      formVal: '',
      showModal: false,
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
      <div className="modal-container">
        <button className='btn btn-link pull-right' onClick={this.handleLogout}>logout</button>
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
        {this.renderAddFriendsBar()}
      </div>
    </div>
  )

  renderAddFriendsBar = () => (
    <div className="col-xs-12 col-sm-4 text-center" >
      <button
        className="btn btn-primary"
        onClick={()=>this.setState({ showModal: !this.state.showModal })}
        >
        Invite a friend!
      </button>
    </div>
  )

  modal = () => (
      <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false})} container={document.body}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={()=>this.setState({ showModal: false})}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
      </Modal>
  )

  render() {
    return (
        <div>
          {this.modal()}
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
