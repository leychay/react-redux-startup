import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../constants/posts'


const INITIAL_STATE = {
    postsList: {posts: [], error: null, loading: false}
}

export default function (state = INITIAL_STATE, action) {
    let err
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                postsList: {
                    posts: [],
                    error: null,
                    loading: true
                }
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                postsList: {
                    //@todo: this can be done with less effort when using lodash
                    posts: Object.keys(action.payload).map(key => action.payload[key]),
                    error: null,
                    loading: false
                }
            }
        case FETCH_POSTS_FAILURE:
            err = action.payload || {message: action.payload}
            return {
                ...state,
                postsList: {
                    posts: [],
                    error: err,
                    loading: false
                }
            }
        default:
            return state
    }
}
