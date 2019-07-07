import React from 'react';
import Radium from 'radium';

import './Char.css';

const Char = (props) => {
  const {
    char,
    onCharClick,
  } = props;

  const style = {
    ':hover': {
      backgroundColor: 'green',
    },
    '@media (max-width: 500px)': {
      backgroundColor: 'blue',
      color: 'white',
    }
  }

  return (
    <div className="Char" onClick={onCharClick} style={style}>
      {char}
    </div>
  );
}

export default Radium(Char);