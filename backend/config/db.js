const mongoose = require('mongoose');

const config = require('config');

const db = config.get('mongoURL')


const connectDB = async () => {

    try {

        await mongoose.connect(db, {

            useNewUrlParser: true, useUnifiedTopology: true
        });


        console.log('Connected to DB')

    } catch (err) {

        console.log(err.message)

        process.exit(1);

    }


}

module.exports = connectDB;