import {createStore} from 'redux'
import reducer from '../reducer'

var defaultState = {
  text: 'Default text'
}

exports.configureStore = (initialState=defaultState) => {
  return createStore(reducer, initialState)
}
