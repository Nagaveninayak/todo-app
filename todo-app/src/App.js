import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import NotesNew from './components/newNotes'
import NotesShow from './components/showNotes'
import NotesOne from './components/oneNotes'
import NotesEdit from './components/editNotes'

function App(){
  return(
    <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light"   style= {{backgroundColor: '#e3f2fd'}}>
          <a className="navbar-brand" href = "/home">TODO</a>
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
            </ul>
            
          </div>
        </nav>
      </div>
      <h3>Suga - Shadow Interdule</h3>

      {/* Routing */}

      <Switch>
        <Route path = "/notes" component = {NotesShow} exact = {true}/>
        <Route path = "/notes/new" component = {NotesNew} />
        <Route path = "/notes/:id/edit" component = {NotesEdit}/>
        <Route path = "/notes/:id" component = {NotesOne} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

