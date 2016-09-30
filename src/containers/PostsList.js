import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions/posts'

import Header from './Header'
import PostsList from '../components/PostsList'


const mapStateToProps = (state) => {
    return {
        postsList: state.posts.postsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {

            dispatch(fetchPosts()).then((response) => {
                !response.error
                ? dispatch(fetchPostsSuccess(response.payload.data))
                : dispatch(fetchPostsFailure(response.payload))
            })
        }
    }
}


const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList)

class Posts extends Component {

    render() {
        return (
            <div>
            <Header type="posts_index"/>
            <PostsListContainer />
            </div>
        )
    }
}

export default Posts
