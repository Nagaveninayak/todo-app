import React from 'react'
import Notes from './notes'
import {connect} from 'react-redux'
import {startAddNotes} from '../actions/notesAction'

function NotesNew(props){
    // console.log('new notes', props)
    const handleSubmit = (formData)=>{
        // console.log('formdata from new notes', formData
        props.dispatch(startAddNotes(formData))
    }
    return(
        <div>
            <h1>New notes</h1>
            <Notes handleSubmit = {handleSubmit}/>
        </div>
    )
}

export default connect()(NotesNew)