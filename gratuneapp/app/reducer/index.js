import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import navReducer from './navReducer';

var defaultState = {};

module.exports = combineReducers ({
  form: formReducer,
  auth: authReducer,
  nav: navReducer,
});
