import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer'

var defaultState = {};

module.exports = combineReducers({
  form: formReducer,
  auth: authReducer
});
