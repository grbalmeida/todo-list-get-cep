'use strict'

import createReducer from '../create-reducer'
import { UPDATE_ADDRESS } from './actions'

export const initialState = {
  logradouro: '',
  localidade: '',
  cep: '',
  bairro: '',
  uf: ''
}

const address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => action.payload
})

export default address
