'use strict'

import ajax from '@fdaciuk/ajax'
import { UPDATE_ADDRESS } from './actions'

export const fetchAddress = (cep) => async (dispatch, getState) => {
  const response = await ajax().get(`https://viacep.com.br/ws/${cep}/json/`)
  dispatch(updateAddress(response))
}

export const updateAddress = (data) => ({
  type: UPDATE_ADDRESS,
  payload: data
})
