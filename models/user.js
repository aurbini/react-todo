const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  notes: [{
    title: {type: String},
    note: {type: String}
  }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User