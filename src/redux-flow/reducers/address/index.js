'use strict'

import createReducer from '../create-reducer'
import { FETCHING, SUCCESS } from './actions'

export const initialState = {
  logradouro: '',
  localidade: '',
  cep: '',
  bairro: '',
  uf: '',
  isFetching: false
}

const address = createReducer(initialState, {
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: true
  }),

  [SUCCESS]: (state, action) => ({
    ...action.payload,
    isFetching: false
  })
})

export default address
