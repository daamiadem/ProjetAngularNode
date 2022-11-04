const asyncHandler = require('express-async-handler')
const User= require('../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// get investors 
const getUser = asyncHandler(async (req , res) => {
    const users = await User.find()
    res.status(200).json(users)
})


//create investor
const SetUser = asyncHandler( async (req , res) => {
  

    const user = await User.create(req.body)
    res.status(200).json(user)
    
   
})





//update user
const UpdateUser = asyncHandler(async (req , res) => {

    const user = await User.findById(req.params.id)

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

    res.status(200).json(updatedUser)
})

//delete user 
const DeleteUser = asyncHandler(async (req , res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
      res.status(400)
      throw new Error('user not found')
    }

    await user.remove()
    res.status(200).json({id : req.params.id})
})



  module.exports = {
    getUser, SetUser ,UpdateUser ,DeleteUser  
}