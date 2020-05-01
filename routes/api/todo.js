const router = require('express').Router()
const todoController = require('../../controllers/todoController')

router.route('/create')
  .post(todoController.create)

router.route('/:_id')
  .get(todoController.findNotesByAuthor)
  .put(todoController.update)
  .delete(todoController.remove)

// router.route('/findNote/:note_ID')
  // .get(todoController.findNote)  
// router.route('/:_id/:noteID')
//   .get(todoController.findNote)
module.exports = router