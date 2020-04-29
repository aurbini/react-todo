const db = require('../models'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const config = require('config'); 

function auth(req, res, next){
  const token = req.header('x-auth-token')
  try{
    //Check for token
    if(!token) res.status(401).json({msg: 'No token, authorization denied'})
    //Verify Token 
    const decoded = jwt.verify(token, config.get('SECRET'))
    //Add user from payload
    req.user = decoded
    next()
  }
  catch(e){
    res.status(400).json({msg:'Token is not valid'})
  }
}

module.exports = auth













  // authorize: function(req, res){
  //   const { email, password } = req.body; 
  //   console.log(email, password)
  //   if( !email || !password ) res.status(400).json({msg: 'Enter all fields'})
  //   //check for existing User
  //   db.User
  //     .findOne({email})
  //     .then(user => {
  //       if(!user) return res.status(400).json({msg: 'User does not exist'})
  //       //validate password
  //       console.log(user)
  //       bcrypt.compare(password, user.password)
  //         .then(isMatch =>{
  //           if(!isMatch) return res.status(400).json({msg:"invalid credentials"})
  //           jwt.sign(
  //             { id: user.id }, 
  //             config.get('SECRET'), 
  //             { expiresIn: 3600 },
  //             (err, token) => {
  //               if(err) throw err;
  //               res.json({
  //                 token, 
  //                 user:{
  //                   id: user.id, 
  //                   name: user.name
  //                 }
  //               })
  //             }
  //           )
  //         })
  //   }) 