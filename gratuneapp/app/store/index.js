import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducer';

var defaultState = {
  headertext: 'Gratune',
  text: 'Sample text',
  page: 'Home'
}

exports.configureStore = (initialState=defaultState) => {
  return createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    autoRehydrate()
  ))
  persistStore(store, {storage: AsyncStorage})
}
