const initialState = []

export const tasksReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_TASK': {
            return action.payload
        }
        case 'ADD_TASK': {
            return [...state, action.payload]
        }
        case 'EDIT_TASK': {
            state.map((task)=>{
                if(task._id == action.payload._id){
                    return {...task, ...action.payload}
                }else{
                    return {...task}
                }
            })
        }
        case 'REMOVE_TASK': {
            return state.filter((task)=> task._id !== action.payload._id)
        }
        default: {
            return state
        }
    }
}
