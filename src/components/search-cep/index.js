'use strict'

import React, { PureComponent } from 'react'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  state = {
    logradouro: '',
    localidade: '',
    cep: '',
    bairro: '',
    uf: ''
  }

  async componentDidMount () {
    const response = await ajax().get('https://viacep.com.br/ws/06233030/json/')

    this.setState(response)
  }

  render () {
    return (
      <SearchCep {...this.state} />
    )
  }
}

export default SearchCepContainer
