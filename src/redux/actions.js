export const addTodo = (data) =>{ 
    return {
        type: 'todoList/addTodo',
        payload: data,
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