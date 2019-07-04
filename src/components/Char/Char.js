import React from 'react';

import './Char.css';

const Char = (props) => {
  const {
    char,
    onCharClick,
  } = props;


  return (
    <div className="Char" onClick={onCharClick}>
      {char}
    </div>
  );
}

export default Char;