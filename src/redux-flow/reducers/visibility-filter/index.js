'use strict'

import createReducer from '../create-reducer'
import { SHOW_ALL, SET_VISIBILITY_FILTER } from './actions'

export const initialState = SHOW_ALL

export default createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter
})
