import {createStore} from 'redux'
import reducer from '../reducer'

var defaultState = {
  headertext: 'Gratune',
  text: 'Sample text'
}

exports.configureStore = (initialState=defaultState) => {
  return createStore(reducer, initialState)
}
