const router = require('express').Router()
const todoRoute = require('./todo')

router.use("/todos", todoRoute)

module.exports = router