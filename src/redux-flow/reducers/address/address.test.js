'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address, { initialState } from './index'
import { FETCHING, SUCCESS } from './actions'

it('address should be a function', () => {
  expect(address).to.be.a('function')
})

it('Should action SUCCESS update address', () => {
  const before = deepFreeze(initialState)

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      logradouro: 'Avenida Presidente Kennedy',
      localidade: 'Curitiba',
      cep: '80610-000',
      bairro: 'Água Verde',
      uf: 'PR'
    }
  })

  const after = { ...action.payload, isFetching: false }

  expect(address(before, action)).to.be.deep.equal(after)
})
