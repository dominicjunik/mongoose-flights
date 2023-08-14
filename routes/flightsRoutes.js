const express = require('express')

const router = express.Router()

const flightsController = require('../controllers/flightsController')

// "index" route GET
router.get('/', flightsController.index)

// "new" route GET
router.get('/new', flightsController.new)

// "create" route POST
router.post('/', flightsController.create)
 
module.exports = router