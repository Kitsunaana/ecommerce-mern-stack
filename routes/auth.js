const express = require('express')
const router = express.Router()
const { signupValidator, validatorResults } = require('../middleware/validator')
const { signupController } = require('../controllers/auth')

router.post('/signup', signupValidator, validatorResults, signupController)

module.exports = router