import { combineReducers } from 'redux'
import { counter } from './reducer'
import { auth } from './Auth.redux'



export default combineReducers({ counter, auth })