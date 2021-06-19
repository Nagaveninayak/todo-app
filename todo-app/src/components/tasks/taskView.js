import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetTasks, startRemoveTasks} from '../../actions/tasksAction'

function ViewTask(props){
    // console.log('props from taskview', props.tasks)
    if(props.tasks.length === 0){
        props.dispatch(startGetTasks())
    }

    const handleRemove = (id)=>{
        const confirmWindow = window.confirm(`Are you sure to delete ?`)
        if(confirmWindow){
            props.dispatch(startRemoveTasks(id))
        }
    }

    function message(lists){
        const complete = lists.find(function(list){
            return list.completed == true
        })
        const incomplete = lists.find(function(list){
            return list.completed == false
        })
        // if(complete){
        //     yes = yes+1
        //     continue
        // }else{
        //     no = no+1
        // }
        if(!complete){
            return <p className = "message-red">You can complete them all</p>
        }
        if(!incomplete){
            return <p  className = "message-success">congrats you completed all</p>
        }
        if(complete && incomplete){
            return <p className = "message-balance">You can do this few remaining</p>
        }  
    }

    
    return(
        <div>
            <Link to = "/tasks/new" className = "back-style-new"><p style = {{textAlign: "center"}}>Click here to create a new task!</p></Link><br/><br/>
            <h4 className = "header-style-1">Displaying the total tasks - {props.tasks.length} </h4>
            <ol>
                {
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                    {props.tasks.map((task)=>{
                        const l = task.tasks
                        return(
                            <div className="col">
                                
                                <div className = "card-deck">
                                    <div className = "card border border-success shadow-0 mb-3" style = {{width: "18rem"}}>
                                    <div className = "card-body">
                                    <h4 className = "card-title bg-transparent border-success header-style-title">{task.topic}</h4>
                                    <p className = "card-text text-style">Date : {task.Date.slice(0, 10)}</p>
                                    <ol className = "list-group list-group-flush">
                                        {
                                            task.tasks.map((list)=>{
                                                return(
                                                    list.completed?(
                                                        <div className = "row" style = {{color: "green"}}>
                                                            <div className = "col-md-8" >
                                                            <li key = {list._id}  className = "list-group-item text-capitalize font-weight-bold"  style = {{color: "green"}}>{list.title}</li></div>
                                                            <div className = "col-md-4">
                                                                <input 
                                                                    type = "checkbox"
                                                                    defaultChecked={list.completed} 
                                                                    style = {{marginTop: "10px"}}/>
                                                            </div>
                                                        </div>
                                                    ):(
                                                        <div className = "row" >
                                                            <div className = "col-md-8">
                                                            <li key = {list._id}  className = "list-group-item text-capitalize font-weight-normal" style = {{color: "red"}}>{list.title}</li></div>
                                                            <div className = "col-md-4">
                                                                <input 
                                                                    type = "checkbox"
                                                                    defaultChecked={list.completed} 
                                                                    style = {{marginTop: "10px"}}/>
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            })
                                        }
                                    </ol>
                                    {/* Checking and providing a suitable message */}
                                    
                                        
                                                   
                                    <div className = "card-footer bg-transparent border-success">
                                        <div className = "row">
                                        <div className = "col-md-5">
                                        <Link to = {`/tasks/edit/${task._id}`} className = "card-link back-style-1">edit</Link></div>
                                        <div className = "col-md-7">
                                        <button onClick = {()=>{handleRemove(task._id)}} class="btn  btn-outline-danger">delete</button>
                                        </div>
                                        </div>
                                        <p style = {{marginTop: "10px"}}>{message(l)}</p>
                                    </div>
                                    
                                    </div>
                                    </div>
                                    </div>
                                    
                                </div>
                        )
                    })}
                    </div>
                }
            </ol>
            
  
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(ViewTask)

