'use strict'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

export default ({ initialState } = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
