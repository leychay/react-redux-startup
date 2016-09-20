import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    RESET_POSTS
} from '../constants/posts';
import { ROOT_URL } from '../constants/common';

import axios from 'axios';

export function fetchPosts() {
    const request = axios.get('${API_URL}/getPosts');

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    };
}

export function fetchPostsFailure(posts) {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: posts
    };
}
