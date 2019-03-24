'use strict'

import React from 'react'

const SearchCep = ({
  logradouro,
  localidade,
  cep,
  bairro,
  uf
}) => (
  <div>
    <form>
      <input type='text' name='cep' />
      <button type='submit'>Buscar endereço</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>CEP</th>
          <th>Endereço</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cep}</td>
          <td>{logradouro}</td>
          <td>{bairro}</td>
          <td>{localidade}</td>
          <td>{uf}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default SearchCep