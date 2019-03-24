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
    uf: '',
    isFetching: false
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })
    const cep = e.target.cep.value
    const response = await ajax().get(`https://viacep.com.br/ws/${cep}/json/`)
    this.setState({ isFetching: false })
    this.setState(response)
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCepContainer
