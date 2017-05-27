import React from 'react';

const Account = (props) => (
  <div className='row'>
    <div className='col-md-6'>
      <h3> {props.authState.facebook.name}</h3>
      <ul className="list-group">
        <li className='list-group-item clearfix'>
            First Name: {props.authState.facebook.name.split(" ")[0]}
            <button className="btn btn-link pull-right">Change</button>
        </li>
        <li className='list-group-item clearfix'>
          Last Name: {props.authState.facebook.name.split(" ")[1]}
            <button className="btn btn-link pull-right">Change</button>
        </li>
        <li className='list-group-item clearfix'>
          Primary Email: {props.authState.facebook.email}
          <button className="btn btn-link pull-right">Change</button>
        </li>
        <li className='list-group-item clearfix'>
          Phone:
          <button className="btn btn-link pull-right">Change</button>
        </li>
        <li className='list-group-item clearfix'>
          Facebook Linked: true
          <button className="btn btn-link pull-right">Change</button>
        </li>
        <li className='list-group-item clearfix'>
          : true
          <button className="btn btn-link pull-right">Change</button>
        </li>
      </ul>
    </div>
  </div>
)

export default Account;
