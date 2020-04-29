const router = require('express').Router()
const todoRoute = require('./todo')
const userRoute = require('./user')


router.use("/todos", todoRoute)
router.use("/user", userRoute)

module.exports = router