import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'nirfuchs',
    }
  }

  static propTypes = {
    userName: PropTypes.string,
  }

  onUserNameChange = (event) => {
    this.setState({ userName: event.target.value }, () => {
      console.log('username', this.state.userName);
    });
  }

  render() {
    let props = {
      userName: this.state.userName,
      onUserNameChange: this.onUserNameChange,
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
