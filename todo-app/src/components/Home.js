import React from 'react'
import {Link} from 'react-router-dom'

function Home(props){
    return(
        <div className = "row">
            <div className = "spectrum-background">
                <h4 className = "margin-home">AgustD - Home</h4>
                <p className = "text-align-home-1">Create your notes - <Link to = "/notes/new">here</Link></p>
                <p className = "text-align-home-2">Create your todo lists - <Link to = "/tasks/new">here</Link></p>
            </div>
        </div>
        
    )
}

export default Home