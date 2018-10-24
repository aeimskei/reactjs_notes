import React from 'react'

const Contact = (props) => {
  // console.log(props) // to see what the props object come with

  setTimeout(() => {
    props.history.push('/about')
  }, 2000);

  return(
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat dolorum eligendi quae magni, perspiciatis deserunt accusamus dolores at. Enim voluptas quia nulla magnam excepturi totam vitae molestiae deserunt iste?</p>
    </div>
  )
}

export default Contact