const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { log } = require('console')
const connectDB = require('./config/db')
const blogRoutes = require('./routes/blogRoutes')
dotenv.config()

connectDB();

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000

app.use('/api/blogs' , blogRoutes)

app.listen(PORT ,'0.0.0.0', () => {
    log('server running succesfully ok')
})
