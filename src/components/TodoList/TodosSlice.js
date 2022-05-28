const innitState = [{
        id: 1,
        name: 'Learn Redux',
        completed: true,
        prioriry: "Hight"
    },
    {
        id: 2,
        name: 'Learn JavaScript',
        completed: false,
        prioriry: "Hight"
    }
]
const todoListReducer = (state = innitState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/statusCompletedChange':
            return state.map(todo => todo.id === action.payload ? {
                ...todo,
                completed: !todo.completed
            } : todo)
        default:
            return state
    }
}
export default todoListReducer