import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoListItem from './components/TodoListItem';
import ListManager from '../ListSelector/ListSelector';
import UserList from '../userList/UserList';

// action creators
import * as todosActions from './todos_actions';
import { listActions } from '../manager';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVal: '',
      showModal: false
    };
  }

  componentDidMount = () => {
    //console.log(this.props);
    return;
  };

  handleChange = e => {
    this.setState({ formVal: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.formVal) {
      this.props.postListItem(
        this.props.listState.activeList,
        this.state.formVal
      );
      this.setState({ formVal: '' });
    }
    return;
  };

  renderTodoForm = () => {
    return (
      <div className="modal-container">
        <h1 className="fancy">
          {this.props.listState.activeList.name}
        </h1>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="form-group col-xs-12 col-sm-8 col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={this.state.formVal}
                onChange={this.handleChange}
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
  };

  renderTodoList = () =>
    <div>
      <ListManager />
      {this.renderTodoForm()}
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <ul className="list-group">
            {this.props.todosState.list.map((todo, index) => {
              return (
                <TodoListItem
                  key={todo._id}
                  item={todo.text}
                  id={todo._id}
                  index={index}
                  notes={todo.notes}
                  dueDate={todo.dueDate}
                  callBack={this.refreshState}
                  editTodo={this.props.editTodo}
                  deleteTodo={this.props.deleteListItem}
                  listId={this.props.listState.activeList._id}
                />
              );
            })}
          </ul>
        </div>
        <UserList />
      </div>
    </div>;

  render() {
    return (
      <div>
        {this.renderTodoList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...todosActions, ...listActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
