import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchPostSuccess, fetchPostFailure, resetActivePost, resetDeletedPost } from '../actions/post'

import Header from './Header'
import PostDetail from '../components/PostDetail'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (id) => {

            dispatch(fetchPost(id)).then((response) => {
                !response.error
                ? dispatch(fetchPostSuccess(response.payload.data))
                : dispatch(fetchPostFailure(response.payload))
            })
        },
        resetMe: () => {
            dispatch(resetActivePost())
            dispatch(resetDeletedPost())
        }
    }
}

const mapStateToProps = (globalState, ownProps) => {
  console.log('michael', globalState.post.activePost)
    return {
        activePost: globalState.post.activePost,
        postId: ownProps.id
    }
}

const PostDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PostDetail)

class Post extends Component {

    static contextTypes = {
        router: PropTypes.object
      };


      onDeleteClick() {
        this.props.deletePost(this.props.params.id)
          .then(() => { this.context.router.push('/'); });
      }

      render() {
        return (
          <div>
            <Header type="posts_show" postId={this.props.params.id}/>
            <PostDetailContainer id={this.props.params.id}/>
          </div>
        );
      }

}

export default Post
