export const addTodo = (data) =>{ 
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}
export const statusCompletedChange = (todoId) =>{ 
    return {
        type: 'todoList/statusCompletedChange',
        payload: todoId,
    }
}
export const searchFilterChange = (data) =>{ 
    return {
        type:'filter/searchFilterChange',
        payload: data,
    }
}
export const statusFilterChange = (data) =>{ 
    return {
        type:'filter/statusFilterChange',
        payload: data,
    }
}
export const statusPrioritiesChange = (data) =>{ 
    return {
        type:'filter/statusPrioritiesChange',
        payload: data,
    }
}