import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { deletePost, deletePostSuccess, deletePostFailure, resetDeletedPost } from '../actions/post';
import Header from '../components/Header';



function mapStateToProps(state) {
  return {
    deletedPost: state.posts.deletedPost
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
     onDeleteClick: () => {

        dispatch(deletePost(ownProps.postId))
        .then((response) => {
            !response.error ?
            dispatch(deletePostSuccess(response.payload.data)) :
            dispatch(deletePostFailure(response.payload));
          });
     },
     resetMe: () =>{
        dispatch(resetDeletedPost());
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
