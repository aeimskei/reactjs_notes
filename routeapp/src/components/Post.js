import React, { Component } from 'react'
// import axios from 'axios' // use only without Redux
import { connect } from 'react-redux'

class Post extends Component {
  /* =====================================
  Previous example w/out Redux
  ========================================
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
        // console.log(response) // test
      })
  }
  ======================================== */
  
  handleClick = () => {
    this.props.deletePost(this.props.post.id)
  }
  
  render() {
    /* Without Redux store
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    */
    console.log(this.props) // test to see props
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn teal" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Post is loading...</div>
    )
    return(
      <div className="container">
        { post }
      </div>
    )
  }
}

// This is for Redux store
const mapStateToProps = (state, thisProps) => {
  let id = thisProps.match.params.post_id
  return {
    post: state.posts.find((post) => {
      return post.id === id
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

// export default Post // without Redux