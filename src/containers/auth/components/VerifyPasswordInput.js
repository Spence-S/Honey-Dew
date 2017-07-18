import React from 'react';

const VerifyPasswordInput = props =>
  <div className="form-group">
    <label className="col-sm-3 col-md-4 control-label">Re-type Password:</label>
    <div className="col-sm-6 col-md-4">
      <input
        id="Password"
        name="Password"
        type="password"
        className="form-control input-md"
        required=""
        value={props.retypePasswordText}
        onChange={e => {
          props.retypePasswordTextChange(e);
        }}
      />
    </div>
  </div>;

export default VerifyPasswordInput;
