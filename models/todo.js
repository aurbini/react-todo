const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  description: {
    type: 'string',
    required: true
  },
  complete: {
    type: 'boolean',
    default: false
  }
})

const Todo = mongoose.model('Todo', TodoSchema )

module.exports = Todo