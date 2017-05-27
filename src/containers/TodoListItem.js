import React,{ Component } from 'react';
import EditableTodoListItem from './EditableTodoListItem';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class TodoListItem extends Component{
  constructor(props){
    super(props);
    this.state={
      editable: false,
      expandedView: false,
      startDate: moment()
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteTodo(this.props.id, this.props.index);
  }

  handleEditClick = () => {
    // changes state of eidtable and shows expanded view as long as editable is open
    // linking editable and expanded view together ensures expanded view is always open while
    // editable view is open
    this.setState({editable:!this.state.editable, expandedView: !this.state.editable });
  }

  renderEditable = () => (
    <div>
      <EditableTodoListItem
        text={this.props.item}
        todoListItemView={this.handleEditClick}
        id={this.props.id}
        index={this.props.index}
        refreshState={this.props.callBack}
        editTodo={this.props.editTodo}
      />
      {this.renderExpandedView()}
    </div>
  )

  renderItem = () => (
    <li className='list-group-item clearfix'>
      {this.props.item}
      <button className='btn btn-default btn-xs pull-right'
              style={{marginLeft: 10}}
              onClick={()=>this.setState({expandedView: !this.state.expandedView})}>
              {this.state.expandedView ? '-' : '+'}
            </button>
      <button className='btn btn-success btn-xs pull-right'
              style={{marginLeft: 10}}>
        <span className="glyphicon glyphicon-ok"></span>
      </button>
      {/* <button className='btn btn-danger btn-xs pull-right' */}
      <span className='fa fa-times pull-right'
              onClick={this.handleClick}
              style={{marginLeft: 10}}>
        {/* <span className="fa fa-times"></span> */}
      </span>
      <button className='btn btn-link btn-xs pull-right'
              onClick={this.handleEditClick}>
        Edit
      </button>
    <div style={{'marginTop': '1rem'}}>
      {this.renderExpandedView()}
    </div>
    </li>
  )

  renderExpandedView = () => (
    <div>
      {this.state.expandedView ?
        // <div> <u>notes:</u>
        //   <div className="well">
        //     {this.props.notes}
        //   </div>
        //   <span className='fa fa-calendar' /> due: {this.props.dueDate}
        // </div>

        <form className="form well">
          <div className='form-group'>
            notes:

              <textarea
                className="form-control"
                placeholder={this.props.notes}
                rows='3'
              />

          </div>
          <div className="form-group">
            {/* <label> due date <span className="fa fa-calendar"/> :</label> */}
            <DatePicker
              className="form-control"
              selected={this.state.startDate}
              onChange={(date)=>(this.setState({startDate: date}))}
              customInput={<CalendarIconPicker />}
            />
          </div>
        </form>
        :
        null
      }
    </div>
  )

  render() {
      if (this.state.editable) {
        return (
          <div>
            {this.renderEditable()}
          </div>
      )
      } else {
        return (
          <div>
            {this.renderItem()}
          </div>
        )
      }
  }
}

class CalendarIconPicker extends Component{
  render(){
    return(
      <div>
        due: <span className='fa fa-calendar'
          onClick={this.props.onClick}>
        </span>
        <div>
          {this.props.value}
        </div>
      </div>
    )
  }
}

export default TodoListItem;
