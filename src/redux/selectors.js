import {
    createSelector
} from 'reselect'
export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filter.search
export const filterStatusSelector = (state) => state.filter.status


// reselect 
// CreateSelector nhận vào 2 đối số là các selector cần dữ liệu của nhau để thưc hiện
// cụ thể ở đây là todoListSelector và searchTextSelector
// tham số thứ 3 là callback : callback nhận các tham số là các value mà 2 thằng ở trên trả về tương ứng
export const todoRemainingSelector = createSelector(todoListSelector, searchTextSelector,filterStatusSelector, (todoList, searchText,status) => {
    return todoList.filter(todo => {
        if(status === 'All'){
            return todo.name.includes(searchText)
        }
        return(
            todo.name.includes(searchText) && 
            (status === 'Completed' ? todo.completed : !todo.completed)
        )
    })
})