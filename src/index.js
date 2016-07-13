import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import {
  Route,
  IndexRoute,
  Router,
  browserHistory
} from 'react-router'

import './reset.css'
import App from './containers/app'

function entry() {
  const root = document.getElementById('root')

  render((
    <AppContainer>
      <App/>
    </AppContainer>
  ), root)
}

entry()

if (module.hot) {
  const path = './containers/app'
  module.hot.accept('./containers/app', () => {
    // NOTE: Circumvent webpack only considering modules accepted after a require
    const NewApp = require('./containers/app')

    entry()
  })
}

