import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import navReducer from './navReducer';
import alertReducer from './alertsReducer';

var defaultState = {};

module.exports = combineReducers ({
  form: formReducer,
  auth: authReducer,
  nav: navReducer,
  alerts: alertReducer
});
