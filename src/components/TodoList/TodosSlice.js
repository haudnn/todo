const innitState = [
    {id:1 , name:'Learn Redux' , completed:true , prioriry:"Hight"},
    {id:1 , name:'Learn JavaScript' , completed:false , prioriry:"Hight"}
]
const todoListReducer = (state=innitState,action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state,action.payload]
        default:
            return state
    }
}
export default todoListReducer