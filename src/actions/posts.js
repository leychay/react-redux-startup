import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../constants/posts'
import {
    API_GET_POSTS,
    HTTP_GET
     } from '../constants/common'

import axios from 'axios'


export function fetchPosts() {

    const request = axios({
        method: HTTP_GET,
        url: API_GET_POSTS,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export function fetchPostsFailure(error) {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}
