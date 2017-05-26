import React from 'react';

const Account = (props) => (
  <div>
    <h3> {props.authState.facebook.name}</h3>
    <ul>
      <li>
        First Name: {props.authState.facebook.name.split(" ")[0]}
      </li>
      <li>
        Last Name: {props.authState.facebook.name.split(" ")[1]}
      </li>
      <li>
        Facebook Linked: true
      </li>
    </ul>
  </div>
)

export default Account;
