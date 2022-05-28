import { combineReducers } from 'redux'
import todoListReducer from "../components/TodoList/TodosSlice"
import filtersReducer from "../components/Filters/FiltersSlice"
const rootReducer = combineReducers({
    filter:filtersReducer,
    todoList:todoListReducer,
})
export default rootReducer