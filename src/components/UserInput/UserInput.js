import React, { Component } from 'react';

import './UserInput.css';

class UserInput extends Component {
  state = {}

  render() {
    const {
      username,
      onUsernameChange,
    } = this.props;

    return (
      <input type="text"
        className="UserInput"
        value={username}
        onChange={onUsernameChange}
      />
    );
  }
}

export default UserInput;