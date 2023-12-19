const express = require('express')
const router = express.Router()
const LunchController = require('../Controllers/Lunch')

router.get('/', LunchController.LunchGetData)
router.post('/', LunchController.LunchPost)


module.exports = router
