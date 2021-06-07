import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getById} from '../selectors/getById'
import {startRemoveNotes} from '../actions/notesAction'

function NotesOne(props){
    // console.log('one notes', props)
    const {_id, note, collaborators, image, lists, head} = props.notes||{}
    const handleRemove = (note, id)=>{
        const confirmRemove = window.confirm(`Are you sure to delete ${note} ?`)
        if(confirmRemove){
            props.dispatch(startRemoveNotes(id))
        }
    }
    return(
        <div>
            {
                props.notes?(
                    <div>
                        <h1>Displaying your notes....</h1>
                            <ol>
                                <li>title - {head}</li>
                                <li>notes - {note}</li>
                                <li>collaborators - {collaborators}</li>
                                <li>image - <img src = {image} alt = {note}/></li>
                                <li>lists - 
                                    <ul>
                                        {
                                        lists.map((list)=>{
                                                return <li key = {list._id}>{list.title}</li>
                                            })
                                        }
                                    </ul>
                                </li>
                            </ol>
                    </div>
                ):(
                    <p>loading...</p>
                )
            }

            <Link to = {`/notes/${_id}/edit`}>edit</Link><br/><br/>
            <button onClick = {()=>{handleRemove(note, _id)}}>delete</button>
        </div>
    )
}


const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return{
        notes: getById(state.notes, id)
    }
}

export default connect(mapStateToProps)(NotesOne)