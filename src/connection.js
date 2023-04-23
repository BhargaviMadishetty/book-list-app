const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect("mongodb+srv://madishetty1999:Bindu@429@cluster0.qwg3jm3.mongodb.net/?retryWrites=true&w=majority");
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;