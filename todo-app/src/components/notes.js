import React from 'react'
import FileBase64 from 'react-file-base64'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {getById} from '../selectors/getById'
import {MdAccountCircle} from 'react-icons/md'

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
            title: props.notes?props.notes.title:''
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
                <h2>Enter notes here</h2>
                <form onSubmit = {this.handleSubmit} className = "container form-style">
                <div className ="form-outline mb-4">
                    <label htmlFor = "title" className="form-label">title : </label>
                    <input 
                        type = "text"
                        id="form4Example1" 
                        className="form-control" 
                        placeholder = "Enter the  title"
                        name = "head"
                        value = {this.state.head}
                        onChange = {this.handleChange}/>
                </div>
                <div className="form-outline mb-4 ">
                    <label htmlFor = "note" className="form-label">Note </label>
                    <textarea 
                        className ="form-control" 
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
                            return <li key = {list.title}>{list.title}</li>
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
                                className = "form-control"
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
                        <label htmlFor = "image">image : </label><br/>
                        {
                            this.state.image.length > 0 ?   (<div><img src={this.state.image} alt = "todo" className = "image-style"/></div>): ''
                        }
                        <FileBase64
                            multiple={ true }
                            onDone={ this.getFiles.bind(this)} />
                    </div>
                    <div className = "col-md-4">
                        <div className="form-outline mb-4">
                            <label htmlFor = "collaborators" className="form-label">collaborators : </label>
                            <div className = "input-icons">
                            <i className="fa fa-user icon"></i>
                            <input 
                            type = "text"
                            id = "form4Example2"
                            className = "form-control input-field"
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
                    
                    
                    <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                    {/* <input 
                        type = "submit"
                        value = "submit"/> */}
                </form>
                <br/>
                <Link to = "/notes">back</Link>
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


