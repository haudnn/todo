import { combineReducers } from 'redux'
import todoListReducer from "../components/TodoList/TodosSlice"
import filtersReducer from "../components/Filters/FiltersSlice"
// const rootReducer = (state={},action) => {
//     return {
//         filter:filtersReducer(state.filter,action),
//         todoList:todoListReducer(state.todoList,action),
//     }
    
// }
const rootReducer = combineReducers({
    filter:filtersReducer,
    todoList:todoListReducer,
})
export default rootReducer