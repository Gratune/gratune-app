import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native'
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducer';

var defaultState = {};

export var configureStore = (intialState = defaultState) =>{
  return createStore(reducer, intialState, compose(
    applyMiddleware(thunk),
    autoRehydrate()
  ))
  persistStore(store, {storage: AsyncStorage})
}
