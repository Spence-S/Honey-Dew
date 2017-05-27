import React from 'react';

const Account = (props) => (
  <div className='row'>
    <div className='col-md-6'>
      <h3> {props.authState.facebook.name}</h3>
      <ul className="list-group">
        <div>
          <li className='list-group-item'>
            <span>First Name: {props.authState.facebook.name.split(" ")[0]}</span>
            <button className="btn btn-link">Change</button>
          </li>
        </div>
        <div>
          <li className='list-group-item'>
            Last Name: {props.authState.facebook.name.split(" ")[1]}
            <button className="btn btn-link">Change</button>
          </li>
        </div>
        <div>
          <li className='list-group-item'>
            Primary Email: {props.authState.facebook.email}
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

export default Account;
