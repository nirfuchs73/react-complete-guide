import React from 'react';

import './Validation.css';

const Validation = (props) => {
  const {
    textLength,
  } = props;

  let message = 'Text to short';
  const classes = ['bold'];

  if (textLength <= 5) {
    classes.push('red');
  } else {
    message = 'Text long enough';
    classes.push('green');
  }

  // let message = (textLength > 5) ? 'Text long enough' : 'Text to short';

  return (
    <div>
      <p>Text Length:{textLength}</p>
      <p className={classes.join(' ')}>{message}</p>
    </div>
  );
}

export default Validation;