'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  async componentDidMount () {
    const response = await ajax().get('https://viacep.com.br/ws/06233030/json/')
    console.log(response)
  }

  render() {
    return (
      <SearchCep />
    )
  }
}

export default SearchCepContainer
