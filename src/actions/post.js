import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    RESET_POST,

    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    RESET_NEW_POST,

    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    RESET_DELETED_POST
} from '../constants/post'
import {
    HTTP_GET,
    HTTP_POST,
    HTTP_DELETE,

    API_GET_POST,
    API_CREATE_POST,
    API_DELETE_POST
     } from '../constants/common'

import axios from 'axios'


/*
 ********************
 * Fetch actions
 ********************
*/
export function fetchPost(id) {

    const request = axios({
        method: HTTP_GET,
        url: API_GET_POST + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function fetchPostSuccess(activePost) {
    return {
        type: FETCH_POST_SUCCESS,
        payload: activePost
    }
}

export function fetchPostFailure(error) {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

export function resetActivePost() {
  return {
    type: RESET_POST
  }
}

/*
 ********************
 * Create actions
 ********************
*/
export function createPost(props) {

    const request = axios({
        method: HTTP_POST,
        data: props,
        url: API_CREATE_POST,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function createPostSuccess(newPost) {
    return {
        type: CREATE_POST_SUCCESS,
        payload: newPost
    }
}

export function createPostFailure(error) {
    return {
        type: CREATE_POST_FAILURE,
        payload: error
    }
}

export function resetNewPost() {
  return {
    type: RESET_NEW_POST
  }
}

/*
 ********************
 * Delete actions
 ********************
*/
export function deletePost(id) {

    const request = axios({
        method: HTTP_DELETE,
        url: API_DELETE_POST + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return {
        type: DELETE_POST,
        payload: request
    }
}

export function deletePostSuccess(deletedPost) {
    return {
        type: DELETE_POST_SUCCESS,
        payload: deletedPost
    }
}

export function deletePostFailure(error) {
    return {
        type: DELETE_POST_FAILURE,
        payload: error
    }
}

export function resetDeletedPost() {
  return {
    type: RESET_DELETED_POST
  }
}
