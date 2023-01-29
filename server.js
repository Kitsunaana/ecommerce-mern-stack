const express = require('express')
const app = express()
const connectDB = require('./database/db')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')

/* Middleware */
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/auth', authRoutes)

connectDB()


const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Listening on port ${port}`))