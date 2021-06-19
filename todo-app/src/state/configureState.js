import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../reducers/notesReducer'
import {tasksReducer} from '../reducers/tasksReducer'

const configureStore = ()=>{
    const state = createStore(combineReducers({
        notes: notesReducer,
        tasks: tasksReducer
    }), applyMiddleware(thunk))
    return state
}

export default configureStore