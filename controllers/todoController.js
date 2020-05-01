const db = require('../models')

module.exports = {
  findAll: function({ params: { _id }}, res){
    db.User
      .findById(_id, 'notes')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function({ body: { authorID, title, note }}, res){
    db.Todo                     
      .create({ authorID, note, title })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  update: function(req, res){
    db.Todo
      .updateOne({_id: req.params.id}, {complete: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
  remove: function(req, res){
    const _id = req.params
    const noteId = req.headers.data
    db.User
      .findByIdAndUpdate(
        _id, 
        { $pull: { 'notes': {  _id: noteId } } })
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)}) 
      .catch(err => res.status(422).json(err));
  },
  findNotesByAuthor: function({ params: { _id}}, res){
    console.log(_id)
    db.Todo
      .find({ authorID: _id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findNote: function({ params: { note_ID } }, res){
    db.Todo 
      .find({_id: note_ID})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
