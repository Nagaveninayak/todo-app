import React from 'react'
import Notes from './notes'
import {connect} from 'react-redux'
import {startEditNotes} from '../actions/notesAction'

function NotesEdit(props){
    // console.log('edit', props)
    const handleSubmit = (formData)=>{
        const id = props.match.params.id
        props.dispatch(startEditNotes(formData, id))
    }
    return(
        <div>
            <h3>Edit your notes here</h3>
            <Notes handleSubmit = {handleSubmit}/>
        </div>
    )
}



export default connect()(NotesEdit)