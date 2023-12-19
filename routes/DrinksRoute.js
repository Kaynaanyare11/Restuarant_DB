const express = require('express')
const router = express.Router()
const DrinksController = require('../Controllers/Drinks')

router.get('/', DrinksController.DrinksGetData)
router.post('/', DrinksController.DrinksPost)


module.exports = router
