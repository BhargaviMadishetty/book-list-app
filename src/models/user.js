const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.objectId;

const userSchema = new Schema({
    username : {type: String, required: true, unique: true},
    password : {type: String, required: true}
});

const User = new mongoose.model("user", userSchema);
module.exports = User;