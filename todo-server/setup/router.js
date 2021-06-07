const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesController')

router.post('/notes', notesController.addNote)
router.get('/notes', notesController.showNote)
router.get('/notes/:id', notesController.showAnote)
router.put('/notes/:id', notesController.editNote)
router.delete('/notes/:id', notesController.removeNote)

module.exports = router