import React, { Component } from 'react';
import EditableTodoListItem from './EditableListItem';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.props.deleteTodo(this.props.listId, this.props.id, this.props.index);
  };

  handleEditClick = () => {
    // changes state of eidtable and shows expanded view as long as editable is open
    // linking editable and expanded view together ensures expanded view is always open while
    // editable view is open
    this.setState({
      editable: !this.state.editable,
      expandedView: !this.state.editable
    });
  };

  renderEditable = () =>
    <div>
      <EditableTodoListItem
        text={this.props.item}
        id={this.props.id}
        index={this.props.index}
        editListItem={this.props.editTodo}
      />
    </div>;

  renderItem = () =>
    <li className="list-group-item clearfix">
      <p className={this.props.completed ? 'strike' : null}>
        {this.props.item}
      </p>
      <button
        className="btn btn-default btn-xs pull-right"
        style={{ marginLeft: 10 }}
        onClick={() =>
          this.setState({ expandedView: !this.state.expandedView })}
      >
        {this.state.expandedView ? '-' : '+'}
      </button>
      <button
        className="btn btn-success btn-xs pull-right"
        style={{ marginLeft: 10 }}
      >
        <span className="glyphicon glyphicon-ok" />
      </button>
      {/* <button className='btn btn-danger btn-xs pull-right' */}
      <span
        className="fa fa-times pull-right"
        onClick={this.handleClick}
        style={{ marginLeft: 10 }}
      >
        {/* <span className="fa fa-times"></span> */}
      </span>
      <button
        className="btn btn-link btn-xs pull-right"
        onClick={this.handleEditClick}
      >
        Edit
      </button>
      <div style={{ marginTop: '1rem' }}>
        {/* {this.renderExpandedView()} */}
      </div>
    </li>;

  render() {
    if (this.state.editable) {
      return (
        <div>
          {this.renderEditable()}
        </div>
      );
    } else {
      return (
        <div>
          {this.renderItem()}
        </div>
      );
    }
  }
}

// class CalendarIconPicker extends Component {
//   render() {
//     return (
//       <div>
//         due: <span className="fa fa-calendar" onClick={this.props.onClick} />
//         <div>{this.props.value}</div>
//       </div>
//     );
//   }
// }

export default TodoListItem;
