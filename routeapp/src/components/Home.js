import React, { Component }from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // console.log(response) // test
        this.setState({
          posts: response.data.slice(0, 10)
        })
      })
  }
  render() {
    return(
      <div className="container">
        <h4 className="center">Home</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat dolorum eligendi quae magni, perspiciatis deserunt accusamus dolores at. Enim voluptas quia nulla magnam excepturi totam vitae molestiae deserunt iste?</p>
      </div>
    )
  }
}

export default Home