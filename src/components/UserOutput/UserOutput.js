import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
  const {
    userName,
  } = props;

  return (
    <div className="UserOutput">
      <p>Username: {userName}</p>
    </div>
  );
}

export default UserOutput;