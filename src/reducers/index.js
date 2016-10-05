import { combineReducers } from 'redux'
import PostsReducer from './posts'
import PostReducer from './post'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    posts: PostsReducer, //<-- Posts
    post: PostReducer, //<-- Post
    form: formReducer // <-- redux-form
})

export default rootReducer
