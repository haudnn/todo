const innitState = {
    filter : { 
        seach : '', 
        status:'All',
        prioriry:[]
    },
    todoList : [
        {id:1 , name:'Learn Rudux' , completed:true , prioriry:"Hight"}
    ]
}
const rootReducer = (state=innitState,action) => {
    console.log(state,action);
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList : [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state
    }
}
export default rootReducer