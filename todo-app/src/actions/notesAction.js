import axios from '../config/axios'

export const addNote = (note)=>{
    return{
        type: 'ADD_NOTE',
        payload: note
    }
}

export const startAddNotes = (formData)=>{
    return(dispatch)=>{
        axios.post('/notes', formData)
            .then((response)=>{
                const note = response.data
                // console.log(response.data)
                if(note.errors){
                    alert(note.message)
                }
                // console.log(note)
                dispatch(addNote(note))
                window.location.href = "/notes"
            })
    }
}

//displaying all the notes
export const showNotes = (notes)=>{
    return{
        type: 'SHOW_NOTE',
        payload: notes
    }
}

export const startShowNotes = ()=>{
    return(dispatch)=>{
        axios.get('/notes')
            .then((response)=>{
                // console.log('get', response.data)
                const notes = response.data
                dispatch(showNotes(notes))
            })
    }
}

//editing the notes
export const editNotes = (notes)=>{
    return{
        type: 'EDIT_NOTE',
        payload: notes
    }
}

export const startEditNotes = (formData, id)=>{
    return(dispatch)=>{
        axios.put(`/notes/${id}`, formData)
            .then((response)=>{
                dispatch(editNotes(response.data))
                window.location.href = `/notes/${id}`
            })
    }
}

//delete the notes
export const removeNotes = (notes)=>{
    return{
        type: 'REMOVE_NOTE',
        payload: notes
    }
}

export const startRemoveNotes = (id)=>{
    return(dispatch)=>{
        axios.delete(`/notes/${id}`)
            .then((response)=>{
                alert(response.data.notes)
                dispatch(removeNotes(response.data))
                window.location.href = "/notes"
            })
    }
}