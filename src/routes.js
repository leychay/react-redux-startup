import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Posts from './containers/PostsList'
import PostNew from './containers/PostNew'
import Post from './containers/PostDetail'

export default (
  <Route path="/">
    <IndexRoute component={Posts} />
    <Route path="new" component={PostNew} />s
    <Route path="show/:id" component={Post} />s
  </Route>
)
