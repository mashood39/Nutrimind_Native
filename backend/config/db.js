const { log } = require('console')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        log('database connected succesfully')

    }
    catch (error) {
        log('error in database connection')
    }
}

module.exports = connectDB