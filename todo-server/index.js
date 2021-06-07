const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const setupdb = require('./setup/dbsetup')
const router = require('./setup/router')

const app = express()
const port = 7070

app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({
limit: '150mb',
extended: true
})); 


app.use(cors())
app.use(express.json())
app.use('/', router)
setupdb()

app.listen(port, ()=>{
    console.log('listening at port', port)
})