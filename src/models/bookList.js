const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.objectId;

const bookSchema = new Schema({
    title : {type: String},
    isbn : {type: Number},
    author : {type: String},
    description : {type: String},
    publishedDate : {type: String},
    publisher : {type: String},
    genre : {type: String}
});

const bookList = new mongoose.model("booklist", bookSchema);

module.exports = bookList;