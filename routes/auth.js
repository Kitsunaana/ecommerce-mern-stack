const express = require('express')
const { signupValidator, validatorResult } = require("../middleware/validator");

const router = express.Router()

router.post('/signup', signupValidator, validatorResult)

module.exports = router