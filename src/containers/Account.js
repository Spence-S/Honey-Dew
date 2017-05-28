import React, { Component } from 'react';

export default class Account extends Component{
  constructor(props){
    super(props);
    this.state = {
      harryBalls: true
    }
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-6'>
          <h3> </h3>
          <ul className="list-group">
            <div>
              <li className='list-group-item'>
                <span>First Name: </span>
                <button className="btn btn-link">Change</button>
              </li>
            </div>
            <div>
              <li className='list-group-item'>
                Last Name:
                <button className="btn btn-link">Change</button>
              </li>
            </div>
            <div>
              <li className='list-group-item'>
                Primary Email:
                <button className="btn btn-link">Change</button>
              </li>
            </div>
            <div>
              <li className='list-group-item'>
                <button className="btn btn-link"> Change Picture</button>
              </li>
            </div>
            <div>
              <li className='list-group-item'>
                Phone:
                <button className="btn btn-link">Change</button>
              </li>
            </div>
            <div>
              <li className='list-group-item'>
                <p>Facebook Linked: true</p>
                <button className="btn btn-link">Change</button>
              </li>
            </div>
            <div>
              <li className='list-group-item'>
                something here: true
                <button className="btn btn-link">Change</button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}
