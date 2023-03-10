import { createStore, combineReducers } from 'redux'

import users from './userData'

const reducer = combineReducers({
    users,
})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store