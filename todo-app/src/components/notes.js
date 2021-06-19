import React from 'react'
import FileBase64 from 'react-file-base64'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {getById} from '../selectors/getById'

class Notes extends React.Component{
    constructor(props){
        // console.log(props)
        super(props)
        // console.log('this', this.props)
        this.state = {
            head: props.notes?props.notes.head:'',
            note: props.notes?props.notes.note:'',
            image: props.notes?props.notes.image:'',
            collaborators: props.notes?props.notes.collaborators:'',
            lists: props.notes?props.notes.lists:[],
            title: props.notes?props.notes.title:'',
            completed: props.notes?props.notes.completed:''
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getFiles(files){
        this.setState({ image: files[0].base64 })
    }

    handleClick = (e)=>{
        e.preventDefault()
        const list = {
            title: this.state.title
        }
        this.setState((prevState)=>{
            return{
                lists: [].concat(list).concat(prevState.lists),
                // lists: [...prevState.lists, list],
                title: ''
            }
        })
    }

    handleCheckbox = (title)=>[
        // console.log('clicked the title', title)
        this.setState((prevState)=>{
            return{
                lists: prevState.lists.map((list)=>{
                    if(list.title == title){
                        return Object.assign({}, list, {completed: !list.completed})
                    }else{
                        return Object.assign({}, list)
                    }
                })
            }
        })
    ]
              

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            head: this.state.head,
            note: this.state.note,
            image: this.state.image,
            collaborators: this.state.collaborators,
            lists: this.state.lists
        }
        // console.log('from form', formData)
        // console.log(formData.lists)
        this.props.handleSubmit(formData)
    }

    

    render(){
        return(
            <div className = "container">
                <h2 className = "header-style">Enter notes here</h2>
                <form onSubmit = {this.handleSubmit} className = "container form-style">
                <div className ="form-outline mb-4">
                    <label htmlFor = "title" className="form-label text-style">title : </label>
                    <input 
                        type = "text"
                        id="form4Example1" 
                        className="form-control inner-text-style" 
                        placeholder = "Enter the  title"
                        name = "head"
                        value = {this.state.head}
                        onChange = {this.handleChange}/>
                </div>
                <div className="form-outline mb-4 ">
                    <label htmlFor = "note" className="form-label text-style">Note </label>
                    <textarea 
                        className ="form-control inner-text-style" 
                        id="form4Example3" 
                        rows="4" 
                        name = "note" 
                        value = {this.state.note}
                        onChange = {this.handleChange}>
                    </textarea>
                    {/* <input 
                            type = "text"
                            placeholder = "Enter the  notes"
                            name = "note"
                            value = {this.state.note}
                            onChange = {this.handleChange}/> */}
                </div>
                   
                <ol>
                    {
                        this.state.lists.map((list)=>{
                            return <li key = {list.title} className = "checkmark-input">{list.title}
                                    <input type = "checkbox"
                                        checked = {list.completed}
                                        onChange = {()=>{this.handleCheckbox(list.title)}}
                                        className = "checkmark"/>  
                                   </li>
                        })
                    }
                    </ol>
                   
                <div className = "form-outline mb-4">
                    <div className = "row">
                        <div className = "col-md-7">
                            <input 
                                type = "text"
                                placeholder = "Add list"
                                name = "title"
                                className = "form-control inner-text-style"
                                value = {this.state.title}
                                onChange = {this.handleChange}/>
                        </div> 
                        <div className = "col-md-5">
                            <button onClick = {this.handleClick} className = "btn btn-info">add</button>
                        </div>
                    </div>
                    
                    <br/>
                </div>
                
                <div className = "row">
                    <div className = "col-md-8">
                        <label htmlFor = "image" className="form-label text-style">image : </label><br/>
                        {
                            this.state.image.length > 0 ?   (<div><img src={this.state.image} alt = "todo" className = "image-style"/></div>): ''
                        }
                        <FileBase64
                            multiple={ true }
                            onDone={ this.getFiles.bind(this)} 
                            className = "form-control inner-text-style"/>
                    </div>
                    <div className = "col-md-4">
                        <div className="form-outline mb-4">
                            <label htmlFor = "collaborators" className="form-label text-style">collaborators : </label>
                            <div className = "input-icons">
                            <i className="fa fa-user icon"></i>
                            <input 
                                type = "text"
                                id = "form4Example2"
                                className = "form-control input-field inner-text-style"
                                placeholder = "add collaborators"
                                name = "collaborators"
                                value = {this.state.collaborators}
                                onChange = {this.handleChange}
                            />
                </div>
                </div>
                        </div>
                    </div>
                    {/* collaborators */}
                    
                    
                    <button type="submit" className="btn btn-primary mb-8">Submit</button>
                    {/* <input 
                        type = "submit"
                        value = "submit"/> */}
                </form>
                <br/>
                <Link to = "/notes" className = "back-style">Click here to view all notes!</Link>
            </div>
        )
    }
}

const mapStateToProps = (state, props)=>{
    const id = props.match.params.id
    return{
        notes: getById(state.notes, id)
    }
}

export default withRouter(connect(mapStateToProps)(Notes))


