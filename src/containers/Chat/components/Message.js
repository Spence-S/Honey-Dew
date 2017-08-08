import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  right: {
    marginTop: '1.3rem',
    textAlign: 'right'
  },
  left: {
    marginTop: '1.3rem',
    textAlign: 'left'
  },
  name: {
    display: 'inline-block'
  },
  message: {
    display: 'inline-block',
    marginLeft: '.5rem',
    padding: '.5rem 1rem .5rem 1rem',
    border: '.001rem',
    borderRadius: '1.2rem',
    boxShadow: '.01rem .01rem',
    width: '70%',
    height: 'auto'
  }
};

const Message = ({ userName, message, userId, myId }) =>
  <div style={userId === myId ? styles.right : styles.left}>
    <div style={styles.name}>
      {userId === myId ? null : userName + ': '}
    </div>
    <div
      className={userId === myId ? 'bg-info' : 'bg-success'}
      style={styles.message}
    >
      {message}
    </div>
  </div>;

Message.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default Message;
