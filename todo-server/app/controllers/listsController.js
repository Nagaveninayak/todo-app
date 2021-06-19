const List = require('../models/list')

//post request -- add lists
module.exports.addList = ((req, res)=>{
    const body = req.body
    const list = new List(body)
    list.save()
        .then((list)=>{
            res.send(list)
        })
        .catch((err)=>{
            res.send(err)
        })
})

//get request -- add tasks
module.exports.showList = ((req, res)=>{
    List.find()
        .then((list)=>{
            res.send(list)
        })
        .catch((err)=>{
            res.send(err)
        })
})

//put request -- edit tasks
module.exports.editList = ((req, res)=>{
    const id = req.params.id
    const body = req.body
    List.findByIdAndUpdate(id, body, {runValidators: true, new:true})
        .then((lists)=>{
            if(!lists){
                res.send({error: 'Task not found'})
            }
            res.send(lists)
        })
        .catch((err)=>{
            res.send(err)
        })
})

//delete request -- delete task
module.exports.deleteList = ((req, res)=>{
    const id = req.params.id
    List.findByIdAndDelete(id)
        .then((lists)=>{
            if(!lists){
                res.send({error: 'Task not found'})
            }
            res.send({
                notice: 'successfully removed',
                lists
            })
        })
        .catch((err)=>{
            res.send(err)
        })
})