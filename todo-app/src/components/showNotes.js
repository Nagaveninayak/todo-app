import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startShowNotes} from '../actions/notesAction'


function NotesShow(props){
    // console.log('show', props.notes[0])
    if(props.notes.length === 0){
        props.dispatch(startShowNotes())
    }
    return(
        <div>
            <h2>Displaying the notes - {props.notes.length}</h2>
            <ol>
                {
                    props.notes.map((note)=>{
                        return <li key = {note._id}><Link to = {`/notes/${note._id}`}>{note.note}</Link></li>
                    })
                }
            </ol>
            <Link to = "/notes/new">Add Notes</Link><br/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NotesShow)