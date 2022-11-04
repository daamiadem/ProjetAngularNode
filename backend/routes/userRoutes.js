const express = require ('express')
const router = express.Router()
const {getUser, SetUser ,UpdateUser ,DeleteUser  } = require('../controllers/userController')

router.get('/' , getUser)


router.post('/newUser' , SetUser)


router.put ('/ubdateUser/:id' , UpdateUser)


router.delete('/deleteUser/:id' , DeleteUser)




module.exports = router