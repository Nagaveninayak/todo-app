const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesController')
const listsController = require('../app/controllers/listsController')

router.post('/notes', notesController.addNote)
router.get('/notes', notesController.showNote)
router.get('/notes/:id', notesController.showAnote)
router.put('/notes/:id', notesController.editNote)
router.delete('/notes/:id', notesController.removeNote)

router.post('/lists', listsController.addList)
router.get('/lists', listsController.showList)
router.put('/lists/:id', listsController.editList)
router.delete('/lists/:id', listsController.deleteList)

module.exports = router