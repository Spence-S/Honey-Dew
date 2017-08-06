import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ userName, message, userId, myId }) =>
  <div className="row">
    <div
      className={
        userId !== myId
          ? 'text-right bg-primary col-xs-offset-3 col-xs-9'
          : 'bg-success col-xs-9'
      }
    >
      <div
        className={
          userName !== 'me' ? 'text-right col-xs-6' : 'text-left col-xs-6'
        }
      >
        {userName}:{userId}:{message}
      </div>
    </div>
  </div>;

Message.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Message;
