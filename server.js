const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./database/db')
const morgan = require('morgan')
const authRoutes = require("./routes/auth");
const colors = require('colors')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/auth', authRoutes)

connectDB()






const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Listening on port ${port}`.yellow.bold.underline))