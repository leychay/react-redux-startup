import React from 'react'
import { Route, IndexRoute } from 'react-router'

import PostsIndex from './pages/PostsIndex'

export default (
  <Route path="/">
    <IndexRoute component={PostsIndex} />
  </Route>
)
