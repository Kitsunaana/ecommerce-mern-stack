const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-mern-stack', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log('Database connection success'.green.bold))
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB