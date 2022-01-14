const innitState = {
    search : '', 
    status:'All',
    prioriry:[]
}
const filtersReducer = (state=innitState,action) => {
    switch (action.type) {
        case 'filter/searchFilterChange':
            return {
                ...state,
                search:action.payload,
            }
        case 'filter/statusFilterChange':
            return {
                ...state,
                status:action.payload,
            }
        default:
            return state
    }
}
export default filtersReducer