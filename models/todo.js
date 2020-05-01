const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  title: {
    type: 'string',
    required: true
  },
  note: {
    type: 'string',
    default: true
  },
  authorID: {
    type: 'string',
    required: true
  }
})

const Todo = mongoose.model('Todo', TodoSchema )

module.exports = Todo