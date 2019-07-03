import React from 'react';

import './UserInput.css';

const UserInput = (props) => {
  const {
    userName,
    onUserNameChange,
  } = props;

  return (
    <input type="text"
      className="UserInput"
      value={userName}
      onChange={onUserNameChange}
    />
  );
}

export default UserInput;