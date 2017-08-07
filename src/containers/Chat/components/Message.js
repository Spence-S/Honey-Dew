import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  message: {
    marginTop: '2px',
    borderRadius: '1rem'
  }
};

const Message = ({ userName, message, userId, myId }) =>
  <div className="row">
    <div
      style={styles.message}
      className={
        userId !== myId
          ? 'text-right bg-primary col-xs-offset-3 col-xs-9'
          : 'bg-success col-xs-9'
      }
    >
      <div
        style={styles.message}
        className={
          userName !== 'me' ? 'text-right col-xs-6' : 'text-left col-xs-6'
        }
      >
        {userName}:{message}
      </div>
    </div>
  </div>;

Message.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default Message;
