import React, { Component } from 'react';

import './UserOutput.css';

class UserOutput extends Component {
  state = {}
  render() {
    const {
      username,
    } = this.props;

    return (
      <div className="UserOutput">
        <p>Username: {username}</p>
      </div>
    );
  }
}

export default UserOutput;