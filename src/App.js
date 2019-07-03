import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'nirfuchs',
    }
  }

  static propTypes = {
    username: PropTypes.string,
  }

  onUsernameChange = (e) => {
    this.setState({ username: e.target.value }, () => {
      console.log('username', this.state.username);
    });
  }

  render() {
    let props = {
      username: this.state.username,
      onUsernameChange: this.onUsernameChange,
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <UserInput {...props} />
        <UserOutput {...props} />
      </div>
    );
  }
}

export default App;
