import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux' 
import {getByTask} from '../../selectors/getById'

class FormTask extends React.Component{
    constructor(props){
        super(props)
        // console.log('form', props)
        this.state = {
            topic: props.tasks?props.tasks.topic:'',
            tasks: props.tasks?props.tasks.tasks:[],
            title: props.tasks?props.tasks.tasks.title:'',
            completed: props.tasks?props.tasks.tasks.completed:Boolean
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd = (e)=>{
        e.preventDefault()
        const task = {
            title: this.state.title,
            completed: this.state.completed
        }
        this.setState((prevState)=>{
            return{
                tasks: [].concat(prevState.tasks).concat(task),
                title: ''
            }
        })
    }

    handleCheckbox = (title)=>{
        this.setState((prevState)=>{
            return{
                tasks: prevState.tasks.map((task)=>{
                    if(task.title === title){
                        return Object.assign({}, task, {completed: !task.completed})
                    }else{
                        return Object.assign({}, task)
                    }
                })
            }
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            topic: this.state.topic,
            tasks: this.state.tasks
        }
        // console.log(formData)
        this.props.handleSubmit(formData)
    }



    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit} className ="container">
                <div className = "row">
                    <div className="sm-10 col-md-5" style = {{border: "5px solid #00BFFF", borderRadius: "20px", backgroundColor: "rgba(226, 221, 226, 0.856)"}}>
                        <label htmlFor="exampleFormControlInput1" className="form-label text-style">Todo list : </label>
                        <input 
                            type = "text"
                            placeholder = "Enter the title of todo today"
                            name = "topic"
                            value = {this.state.topic}
                            onChange = {this.handleChange} 
                            className ="form-control inner-text-style"
                            id="exampleFormControlInput1"/><br/>

                        <ol>
                            {
                                this.state.tasks.map((task)=>{
                                    return <li key = {task.title} className = "checkmark-input">
                                            {task.title}
                                            <input 
                                                type = "checkbox" 
                                                checked = {task.completed} 
                                                onChange = {()=>{this.handleCheckbox(task.title)}}
                                                className = "checkmark"
                                               />
                                    </li>
                                })
                            }
                        </ol>
                    <div >
                        <div >
                            <label htmlFor = "task"  className ="form-label text-style">tasks : </label>
                            {/* <input 
                                type = "text"
                                placeholder = "Enter the tasks"
                                name = "title"
                                value = {this.state.title}
                                onChange = {this.handleChange}
                                /> */}
                            <div className = "row">
                                <div className = "col-md-8">
                                    <input
                                        className ="form-control inner-text-style" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3"
                                        type = "text"
                                        placeholder = "Enter the tasks"
                                        name = "title"
                                        value = {this.state.title}
                                        onChange = {this.handleChange}/>
                                </div>
                                <div className = "col-md-2">
                                    <button onClick = {this.handleAdd} className = "btn btn-primary">add tasks</button>
                                </div>
                            </div>
                        </div>
                    </div><br/>
                    <input 
                        type = "submit"
                        value = "submit"
                        className ="btn btn-primary"/>
                    <br/>
                    </div>
                </div>
                </form><br/>
                <Link to = "/tasks" className = "back-style">Click here to view tasks!</Link>
            </div>
        )
    }
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return{
        tasks: getByTask(state.tasks, id)
    }
}

export default withRouter(connect(mapStateToProps)(FormTask))

