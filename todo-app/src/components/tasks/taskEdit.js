import React from 'react'
import FormTask from './taskForm'
import {connect} from 'react-redux'
import {startEditTasks} from '../../actions/tasksAction'

function TaskEdit(props){
    // console.log('edit tasks', props)
    const handleSubmit = (formData)=>{
        const id = props.match.params.id
        props.dispatch(startEditTasks(formData, id))
    }
    return(
        <div>
            <h4>Edit the task here</h4>
            <FormTask handleSubmit = {handleSubmit}/>
        </div>
    )
}



export default connect()(TaskEdit)