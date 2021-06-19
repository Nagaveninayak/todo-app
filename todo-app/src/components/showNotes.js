import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startShowNotes} from '../actions/notesAction'
import {startRemoveNotes} from '../actions/notesAction'


function NotesShow(props){
    // console.log('show', props.notes[0])
    if(props.notes.length === 0){
        props.dispatch(startShowNotes())
    }
    const handleRemove = (note, id)=>{
        const confirmRemove = window.confirm(`Are you sure to delete ${note} ?`)
        if(confirmRemove){
            props.dispatch(startRemoveNotes(id))
        }
    }
    return(
        <div className = "container">
            <Link to = "/notes/new" className = "back-style-new"><p style = {{textAlign: "center"}}>Create a new note here</p></Link>
            <h2 className = "header-style-1">Displaying the notes - {props.notes.length}</h2>
            <ol>
                {
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    {props.notes.map((note)=>{
                        return(
                            
                                <div className="col">
                                    <div className="card border border-success shadow-0 mb-3">
                                    {
                                        note.image?<img src= {note.image} className="card-img-top" alt={note.note}/>:(
                                            ''
                                        )
                                    }
                                    
                                    <div className="card-body">
                                        <h5 className="card-title" className = "header-style-title">{note.head}</h5>
                                        <p className="card-text" className = "text-style">{note.note}</p>
                                    </div>
                                    <ol className = "card-footer"> 
                                    {
                                        note.lists.length != 0?(
                                            <div>
                                            <h4>Todo lists</h4>
                                            {
                                                note.lists.map((list)=>{
                                                    return(
                                                        // <div> 
                                                        //     <li key = {note.title}>{list.title}
                                                        //     <input type = "checkbox" checked = {list.completed}/></li>
                                                        // </div>
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
                                            </div>
                                        ):(
                                            <p className = "message-success">No todos today</p>
                                        )
                                    }
                                        
                                    </ol>
                                    <div className="card-footer">
                                        {
                                            note.collaborators?(
                                                <small className="text-muted">collaborators : {note.collaborators}</small>
                                            ):''
                                        }
                                        
                                        <div className = "row">
                                            <div className = "col-md-6">
                                                <Link to = {`/notes/${note._id}/edit`} className = "card-link back-style-1">edit</Link>
                                            </div>
                                            <div className = "col-md-6">
                                                <button onClick = {()=>{handleRemove(note.note, note._id)}} className ="btn  btn-outline-danger">delete</button> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        ) 
                    })   }
                    </div>               
                }
            </ol>

        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NotesShow)



  
//   <div class="col">
//     <div class="card h-100">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//       </div>
//       <div class="card-footer">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card h-100">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//       </div>
//       <div class="card-footer">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </div>
//     </div>
//   </div>
// </div>


   // <ol>
    //     <li key = {note._id}><Link to = {`/notes/${note._id}`}>{note.note}</Link></li>
    //     <li>{note.title}</li>
    //     <li>{note.collaborators}</li>
    //     <li><img src = {note.image} alt = {note.note} className = "image-style"/></li>
    //     <ul>
    //         {
    //             note.lists.map((list)=>{
    //                 return <li>{list.title}</li>
    //             })
    //         }
    //     </ul>
    // </ol> 