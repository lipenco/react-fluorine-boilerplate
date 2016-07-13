import React, { Component } from 'react'
import { Provider, combineReducers } from 'fluorine-lib'
import {
  Route,
  Router,
  browserHistory
} from 'react-router'

import dispatcher from '../dispatcher'
import reducers from '../reducers/index'
import Counter from '../components/counter'

export default class App extends Component {
  render() {
    return (
      <Provider
        dispatcher={dispatcher}
        observable={({ reduce }) => combineReducers(reducers)(reduce)}>
        <Router history={browserHistory}>
          <Route path='/' component={Counter}/>
        </Router>
      </Provider>
    )
  }
}

