const express = require('express')
const router = express.Router()
const { signupValidator, validatorResults } = require('../middleware/validator')

router.post('/signup', signupValidator, validatorResults)

module.exports = router