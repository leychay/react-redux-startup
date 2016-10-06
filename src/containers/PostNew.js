import React, { Component } from 'react'
import Header from '../containers/Header'
import PostFormContainer from '../containers/PostForm'

class PostNew extends Component {
  render() {
    return (
      <div>
        <Header type="posts_new"/>
        <PostFormContainer />
      </div>
    )
  }
}


export default PostNew
