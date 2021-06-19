import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from './components/Home' 

import NotesNew from './components/newNotes'
import NotesShow from './components/showNotes'
import NotesOne from './components/oneNotes'
import NotesEdit from './components/editNotes'

import ViewTask from './components/tasks/taskView'
import TaskNew from './components/tasks/taskNew'
import TaskEdit from './components/tasks/taskEdit'

function App(){
  return(
    <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark"   style= {{backgroundColor: "rgb(61, 56, 56)"}}>
          <a className="navbar-brand" href = "/">TODO</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" >
              <li className="nav-item px-3">
                <Link to = "/">Home</Link>
              </li>
              <li className="nav-item px-3">
                <Link to = "/notes">notes</Link>
              </li>
              <li className = "nav-item px-3">
                <Link to = "/tasks">Tasks</Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>
    

      {/* Routing */}

      <Switch>
        <Route path = "/" component = {Home} exact = {true}/>

        <Route path = "/notes" component = {NotesShow} exact = {true}/>
        <Route path = "/notes/new" component = {NotesNew} />
        <Route path = "/notes/:id/edit" component = {NotesEdit}/>
        <Route path = "/notes/:id" component = {NotesOne} />

        <Route path = "/tasks" component = {ViewTask} exact = {true}/>
        <Route path = "/tasks/new" component = {TaskNew} />
        <Route path = "/tasks/edit/:id" component = {TaskEdit}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

