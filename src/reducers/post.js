import {
    FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE
    CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE
    DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, RESET_DELETED_POST
} from '../constants/post'


const INITIAL_STATE = {
    activePost: {post: [], error: null, loading: false},
    newPost: {post: [], error: null, loading: false},
    deletedPost: {post: [], error: null, loading: false},
}

export default function (state = INITIAL_STATE, action) {
    let err
    switch(action.type) {
        case FETCH_POST:
            return {
                ...state,
                activePost: {
                    ...state.activePost,
                    loading: true
                }
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                activePost: {
                    //@todo: this can be done with less effort when using lodash
                    post: Object.keys(action.payload).map(key => action.payload[key]),
                    error: null,
                    loading: false
                }
            }
        case FETCH_POST_FAILURE:
            err = action.payload || {message: action.payload}
            return {
                ...state,
                activePost: {
                    post: null,
                    error: err,
                    loading: false
                }
            }

        case CREATE_POST:
            return {
                ...state,
                newPost: {
                    ...state.newPost,
                    loading: true
                }
            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                newPost: {
                    //@todo: this can be done with less effort when using lodash
                    post: Object.keys(action.payload).map(key => action.payload[key]),
                    error: null,
                    loading: false
                }
            }
        case CREATE_POST_FAILURE:
            err = action.payload || {message: action.payload}
            return {
                ...state,
                newPost: {
                    post: null,
                    error: err,
                    loading: false
                }
            }

        case DELETE_POST:
            return {
                ...state,
                deletedPost: {
                    ...state.deletedPost,
                    loading: true
                }
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                deletedPost: {
                    //@todo: this can be done with less effort when using lodash
                    post: Object.keys(action.payload).map(key => action.payload[key]),
                    error: null,
                    loading: false
                }
            }
        case DELETE_POST_FAILURE:
            err = action.payload || {message: action.payload}
            return {
                ...state,
                deletedPost: {
                    post: null,
                    error: err,
                    loading: false
                }
            }
        case RESET_DELETED_POST:
            return {
                ...state,
                deletedPost:{
                    post:null, error:null, loading: false
                }
            }

        default:
            return state
    }
}
