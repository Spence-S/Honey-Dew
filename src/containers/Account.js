import React, { Component } from 'react';
// import FacebookLogin from 'react-facebook-login';

export default class Account extends Component{
  constructor(props){
    super(props);
    this.state = {
      harryBalls: true
    }
  }

  // responseFacebook = (res) => {
  //   console.log(res);
  //   this.props.linkFacebook(res);
  // }

  render(){
    return(
      <div className='row'>
        <div className='col-xs-12 col-md-6'>
          <h3> {this.props.userState.firstName}'s Settings</h3>
          <ul className="list-group">
            <div>
              <EditableLi
                {...this.props}
                field='First Name'
                value={this.props.userState.firstName}
                edit={this.props.editFirstName}
              />
            </div>
            <div>
              <EditableLi
                {...this.props}
                field='Last Name'
                value={this.props.userState.lastName}
                edit={this.props.editLastName}
              />
            </div>
            <div>
              <EditableLi
                {...this.props}
                field='Email'
                value={this.props.userState.email}
                edit={this.props.editEmail}
                changeDisabled
              />
            </div>
            {/* <div>
              <li className='list-group-item'>
                <p>Facebook Linked: no</p>
                <button className="btn btn-link">Change</button>
                <FacebookLogin
                appId="1503702696325932"
                fields="name,email,picture"
                scope="public_profile"
                callback={this.responseFacebook}
                icon="fa-facebook"
                textButton="Link FB"
                size="small"
                style={{borderRadius: '5px' }}
                />
              </li>
            </div> */}
          </ul>
          <button
            className='btn btn-primary'
            onClick={()=> this.props.updateUser(
              {firstName: this.props.userState.firstName,
              lastName: this.props.userState.lastName}
            )}>
            Save
          </button>
        </div>
      </div>
    )
  }
}


/*
* Editable List Item
*
* takes props field, value, onClick
*
*
*
*
*/
class EditableLi extends Component{
  constructor(props){
    super(props);
    this.state = {
      editable: false,
      value: this.props.value
    }
  }

  renderEditable = () => (
    <li className='list-group-item'>
      <div>{this.props.field}:
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({ editable: false })
            this.props.edit(this.state.value);
          }}>
          <input
            className='form-control'
            type='text'
            name={this.props.field}
            placeholder={this.props.value}
            autoFocus={true}
            value={this.state.value}
            onChange={(e)=>{this.setState({ value: e.target.value })}}
            onBlur={() => {
              this.setState({ editable: false })
              this.props.edit(this.state.value);
            }}
          />
        </form>
      </div>
      <button className="btn btn-link">Change</button>
    </li>
  )

  renderListItem = () => (
    <li className='list-group-item' >
      <div >
        <span className='col-md-3'>
          {this.props.field}:
        </span>
        <span className='col-md-3'>
          {this.props.value }
        </span>
      </div>
      <button className="btn btn-link"
        disabled={this.props.changeDisabled}
        onClick={()=>{this.setState({ editable: true })}}>
        Change
      </button>
    </li>
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
          {this.renderListItem()}
        </div>
      )
    }
  }
}
