import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// import UserInput from './components/UserInput';
// import UserOutput from './components/UserOutput';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'nirfuchs',
      showOutput: true,
      text: '',
    }
  }

  static propTypes = {
    userName: PropTypes.string,
  }

  onUserNameChange = (event) => {
    this.setState({ userName: event.target.value }, () => {
      console.log('username', this.state.userName);
      this.setState({ showOutput: this.state.userName }, () => {
        console.log(this.state.showOutput);
      })
    });
  }

  onTextChange = (event) => {
    this.setState({ text: event.target.value }, () => {
      console.log('text', this.state.text);
    });
  }

  onCharClick = (idx) => {
    console.log('onCharClick', idx);
    const text = this.state.text.split('');
    text.splice(idx, 1);
    this.setState({ text: text.join('') });
  }

  render() {
    const {
      // showOutput
      text,
    } = this.state

    const charList = text.split('').map((char, idx) => {
      return <Char char={char} key={idx} onCharClick={() => this.onCharClick(idx)} />
    });

    const props = {
      // userName: this.state.userName,
      // onUserNameChange: this.onUserNameChange,
      // onTextChange: this.onTextChange,
      textLength: this.state.text.length,
      // onCharClick: this.onCharClick,
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* <UserInput {...props} /> */}
        {/* <UserOutput {...props} /> */}
        {/* {showOutput && <UserOutput {...props} />} */}
        <input type="text"
          value={text}
          onChange={this.onTextChange}
        />
        {/* <p>{text}</p> */}
        <Validation {...props} />
        {charList}
      </div>
    );
  }
}

export default App;
