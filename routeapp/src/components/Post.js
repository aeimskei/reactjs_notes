import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    // console.log(this.props) // test

    let id = this.props.match.params.post_id
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        this.setState({
          post: response.data
        })
        console.log(response)
      })
  }
  render() {
    return(
      <div className="container">
        
      </div>
    )
  }
}

export default Post