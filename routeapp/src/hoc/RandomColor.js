import React from 'react'

const RandomColor = (WrappedComponent) => {

  const colors = ['red', 'blue', 'yellow', 'orange', 'green'];
  const randomColor = colors[Math.floor(Math.random() * 3)];
  const materializeClass = randomColor + '-text';

  return (props) => {
    return (
      <div className={materializeClass}>
        <WrappedComponent {...props}/>
      </div>
    )
  }

}

export default RandomColor