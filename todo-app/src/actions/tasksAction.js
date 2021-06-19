import axios from '../config/axios'

//get method- display all tasks
export const getTasks = (task)=>{
    return{
        type: 'GET_TASK',
        payload: task
    }
}

export const startGetTasks = ()=>{
    return(dispatch)=>{
        axios.get('/lists')
            .then((response)=>{
                // console.log('get', response.data)
                dispatch(getTasks(response.data))
            })
    }
}

//post method - add the tasks
export const addTasks = (task)=>{
    return{
        type: 'ADD_TASK',
        payload: task
    }
}

export const startAddTasks = (formData)=>{
    return(dispatch)=>{
        axios.post('/lists', formData)
            .then((response)=>{
                // console.log('post', response.data)
                dispatch(addTasks(response.data))
                window.location.href = "/tasks"
            })
    }
}


//put method - edit the task
export const editTasks = (task)=>{
    return{
        type: 'EDIT_TASK',
        payload: task
    }
}

export const startEditTasks = (formData, id)=>{
    return(dispatch)=>{
        axios.put(`/lists/${id}`, formData)
            .then((response)=>{
                // console.log('put', response.data)
                dispatch(editTasks(response.data))
                window.location.href = "/tasks"
            })
    }
}


//delete method - remove the task
export const removeTasks = (task)=>{
    return{
        type: 'REMOVE_TASK',
        payload: task
    }
}

export const startRemoveTasks = (id)=>{
    return(dispatch)=>{
        axios.delete(`/lists/${id}`)
            .then((response)=>{
                // console.log(response.data)
                dispatch(removeTasks(response.data))
                window.location.href = "/tasks"
            })
    }
}