import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Posts from './containers/PostsList'

export default (
  <Route path="/">
    <IndexRoute component={Posts} />
  </Route>
)
