import React,{ Component } from 'react';
import EditableTodo from './EditableTodo';

class TodoListItem extends Component{
  constructor(props){
    super(props);
    this.state={ editable: false };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteTodo(this.props.id, this.props.index);
  }

  handleEditClick = () => {
    this.setState({editable:!this.state.editable});
  }

  render(){
      return(
        <div>
        {this.state.editable ?
          <EditableTodo
            text={this.props.item}
            todoListItemView={this.handleEditClick}
            id={this.props.id}
            index={this.props.index}
            refreshState={this.props.callBack}
            editTodo={this.props.editTodo}
          />
          :

            <li className='list-group-item'>
              {this.props.item}
              <button className='btn btn-success btn-xs pull-right'
                      style={{marginLeft: 10}}>
                <span className="glyphicon glyphicon-ok"></span>
              </button>
              <button className='btn btn-danger btn-xs pull-right'
                      onClick={this.handleClick}
                      style={{marginLeft: 10}}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
              <button className='btn btn-link btn-xs pull-right'
                      onClick={this.handleEditClick}>
                Edit
              </button>
            </li>}
          </div>
      );
  }
}

export default TodoListItem;
