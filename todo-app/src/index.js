import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './state/configureState'
import {startShowNotes} from './actions/notesAction'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const store = configureStore()

if(localStorage.length === 0){
    store.dispatch(startShowNotes())
}


const jsx = (<Provider store = {store}>
                <App />
            </Provider>)

ReactDOM.render(jsx, document.getElementById('root'))
