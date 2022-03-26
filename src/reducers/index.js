import { combineReducers } from 'redux'

import counterReducer from './counterReducer'
import loggedReducer from './loggedReducer'

const reducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default reducers