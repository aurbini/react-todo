const db = require('../models')

module.exports = {
  findAll: function(req, res){
    db.Todo
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res){
    db.Todo
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res){
    db.Todo
      .updateOne({_id: req.params.id}, {complete: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
  remove: function({ params: { id}}, res){
    db.Todo
      .deleteOne( { _id: id})
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)}) 
      .catch(err => res.status(422).json(err));
  }
}
