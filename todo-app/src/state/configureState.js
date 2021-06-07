import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../reducers/notesReducer'

const configureStore = ()=>{
    const state = createStore(combineReducers({
        notes: notesReducer
    }), applyMiddleware(thunk))
    return state
}

export default configureStore