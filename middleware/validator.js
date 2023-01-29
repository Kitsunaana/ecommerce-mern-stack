const { check, validationResult} = require('express-validator')
const {json} = require("express");

exports.signupValidator = [
    check('username').not().isEmpty().withMessage('Все поля обязательны'),
    check('email').isEmail().normalizeEmail().withMessage('Неккоректно введена почта'),
    check('password').isLength({ min: 6 }).withMessage('Пароль должен быть не менее 6 символов')
]

exports.validatorResults = (request, response, next) => {
    const result = validationResult(request)
    const hasErrors = !result.isEmpty()

    if (hasErrors) {
        const firstError = result.array()[0].msg
        return response.status(400).json({ errorMessage: firstError })
    }

    next()
}