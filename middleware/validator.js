const { check, validationResult } = require('express-validator')

const signupValidator = [
    check('username').not().isEmpty().trim().withMessage('Все поля обязательны'),
    check('email').isEmail().normalizeEmail().withMessage("Некорректная почта"),
    check('password').isLength({ min: 6 }).withMessage("Минимальная длина пароля не менее 6 символов")
]

const validatorResult = (request, response, next) => {
    const result = validationResult(request)
    const hasErrors = !result.isEmpty()

    if (hasErrors) {
        const firstError = result.array()[0].msg
        return response.status(400).json({ errorMessage: firstError })
     }

    next()
}

module.exports.signupValidator = signupValidator
module.exports.validatorResult = validatorResult