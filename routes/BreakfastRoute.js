const express = require('express')
const router = express.Router()
const BreakfastController = require('../Controllers/Breakfast')

router.get('/', BreakfastController.BreakfastGetData)
router.post('/', BreakfastController.BreakfastPost)


module.exports = router
