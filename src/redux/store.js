import { createStore } from 'redux'
import rootReducer from './reducer'
const store = createStore(rootReducer) // create store
export default store