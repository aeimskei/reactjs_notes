import React from 'react'

const RandomColor = (WrappedComponent) => {

  const colors = ['red', 'blue', 'yellow', 'orange', 'green'];
  const randomColor = colors[Math.floor(Math.random() * 3)];
  const className = randomColor + '-text';

}

export default RandomColor