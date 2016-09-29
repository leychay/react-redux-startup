import { combineReducers } from 'redux'
import PostsReducer from './posts'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    posts: PostsReducer, //<-- Posts
    form: formReducer // <-- redux-form
})

export default rootReducer
