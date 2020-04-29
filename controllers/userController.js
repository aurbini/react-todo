const db = require('../models')
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const config = require('config'); 

module.exports = {
  findAll: function(req, res){
    db.User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  remove: function({ params: { id}}, res){
    db.User
      .deleteOne( { _id: id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByOne: function(req, res){
    try{
      db.User 
        .findById({ _id: req.user.id})
        .select('-password')
        .then(user => {
          console.log('found id of user')
          res.json({...user, isAuthenticated: true})
        })
      }
      catch(e){
        console.log('error finding id')
        res.status(400).json({msg: e.message})
      }
  },
  register: function(req, res){
    const { name, email, password } = req.body; 
    console.log(name, email, password)
    if(!name || !email || !password ) res.status(400).json({msg: 'Enter all fields!'})
    db.User
      .findOne({email})
      .then(user => {
        if(user) return res.status(400).json({msg: 'user already exists'})
        const newUser = {
          name, 
          email, 
          password
        }
        console.log(user)
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err; 
            newUser.password = hash; 
            db.User
              .create(newUser)
              .then(user => 
                jwt.sign(
                  { id: user.id }, 
                  config.get('SECRET'), 
                  { expiresIn: 3600 },
                  (err, token) => {
                    if(err) throw err;
                    res.json({
                      token, 
                      user:{
                        id: user.id, 
                        name: user.name
                      }
                    })
                  }
                )
              )
          })
        })
      })
  },login: function(req, res){
    const { email, password } = req.body; 
    console.log(email)
    db.User
    .findOne({email})
    .then(user => {    
      if(!user) return res.status(400).json({msg:"User does not exist"})
      console.log('user passed 401'); 
      bcrypt.compare(password, user.password)
      .then(isMatch =>{
        if(!isMatch) return res.status(400).json({msg:"invalid credentials"})
        jwt.sign(
          { id: user.id }, 
          config.get('SECRET'), 
          { expiresIn: 3600 },
          (err, token) => {
            if(err) throw err;
            res.json({
              token, 
              user:{
                id: user.id, 
                name: user.name
              }
            })
          }
        )
      })
    })

  } 
}

