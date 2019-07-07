import React from 'react';
// import Radium from 'radium';

import styles from './Char.module.css';

const Char = (props) => {
  const {
    char,
    onCharClick,
  } = props;

  // const style = {
  //   ':hover': {
  //     backgroundColor: 'green',
  //   },
  //   '@media (max-width: 500px)': {
  //     backgroundColor: 'blue',
  //     color: 'white',
  //   }
  // }

  return (
    // <div className="Char" onClick={onCharClick} style={style}>
    <div className={styles.Char} onClick={onCharClick}>
      {char}
    </div>
  );
}

// export default Radium(Char);
export default Char;