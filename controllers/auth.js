const {User} = require("../models/User")
const bcrypt = require('bcryptjs')

exports.signupController = async (request, response) => {
    const { username, password, email } = request.body

    try {
        const user = await User.findOne({ email })

        if (user) return response.status(401).json({ errorMessage: "Аккаунт с такой почтой уже существует" })

        const salt = await bcrypt.genSalt(10)

        const newUser = new User()
        newUser.password = await bcrypt.hash(password, salt)
        newUser.username = username
        newUser.email = email

        await newUser.save()

        response.json({ successMessage: "Пользователь успешно создан" })

    } catch (error) {
        console.log('signupController error ', error)
        response.json({ errorMessage: "На сервере произошла ошибка" })
    }

}