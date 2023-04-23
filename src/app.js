const express = require('express');
const bodyparser = require('body-parser');
// const User = require('./models/user');
// const BookList = require("./models/bookList");
const connection = require("./connection");
//const cors = require('cors');
connection();

const app = express();
//middleware
app.use(bodyparser.json());
app.use(cors());
app.use(require('./routes/books'));




module.exports = app;

