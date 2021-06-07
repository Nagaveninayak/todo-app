const Notes = require('../models/note')

//post a note
module.exports.addNote = ((req, res)=>{
    const body = req.body
    // console.log(body)
    const note = new Notes({
        head: body.head,
        note: body.note,
        image: body.image,
        collaborators: body.collaborators,
        lists: body.lists
    })
    note.save()
        .then((notes)=>{
            res.send(notes)
        })
        .catch((err)=>{
            res.send(err)
        })
})

//show all available notes
module.exports.showNote = ((req, res)=>{
    Notes.find()
        .then((notes)=>{
            res.send(notes)
        })
        .catch((err)=>{
            res.send(err)
        })
})

//show only one notes
module.exports.showAnote = ((req, res)=>{
    const id = req.params.id
    Notes.findById(id)
        .then((notes)=>{
            if(!notes){
                res.send({notice: "no notes available"})
            }
            res.send(notes)
        })
        .catch((err)=>{
            res.send({error: err})
        })
})

//edit the notes 
module.exports.editNote = ((req, res)=>{
    const id = req.params.id
    const body = req.body
    Notes.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((notes)=>{
            if(!notes){
                res.send({notice: "no notes available"})
            }
            res.send({notes: notes})
        })
        .catch((err)=>{
            res.send({error: err})
        })
})

//delete a note
module.exports.removeNote = ((req, res)=>{
    const id = req.params.id
    Notes.findByIdAndDelete(id)
        .then((notes)=>{
            if(!notes){
                res.send({notice: "no notes available"})
            }
            res.send({notes: "Successfully removed"})
        })
        .catch((err)=>{
            res.send({error: err})
        })
})