const mongoose = require('mongoose')

const setupdb = ()=>{
    return(
        mongoose.connect('mongodb://localhost:27017/todo-app')
            .then(()=>{
                console.log('connected to the db')
            })
            .catch((err)=>{
                console.log(err)
            })
    )
}

module.exports = setupdb