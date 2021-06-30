import React from 'react'

import { Route } from 'react-router-dom'

import Squares from './Squares'
import Header from './Header'
import Home from './Home'

function App () {
  return (
    <>
      <div>
        <Route path='/' component={Header}/>
        <Route exact path='/' component={Home}/>
        <div className='body'>
          <Route path='/squares' component={Squares}/>
        </div>
      </div>
    </>
  )
}

export default App
