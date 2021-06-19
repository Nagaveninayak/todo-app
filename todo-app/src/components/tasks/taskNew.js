import React from 'react'
import FormTask from './taskForm'
import {startAddTasks} from '../../actions/tasksAction'
import {connect} from 'react-redux'

function TaskNew(props){
    const handleSubmit = (formData)=>{
        props.dispatch(startAddTasks(formData))
    }
    return(
        <div>
            <h2 className = "header-style">Add new tasks</h2><br/>
            <FormTask handleSubmit = {handleSubmit}/>

            {/* <img src = "" alt = "something"></img> */}
        </div>
    )
}

export default connect()(TaskNew)