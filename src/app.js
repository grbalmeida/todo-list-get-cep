'use strict'

import React from 'react'

const App = () => (
  <div>
    <input type='text' />
    <ul>
      <li style={{ textDecoration: 'line-through' }}>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
    <div>
      <h3>Mostrar</h3>
      <span>Todos</span> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
    </div>
  </div>
)

export default App
