const mongoose = require('mongoose');
const port = process.env.port || 3000;
const app = require('./app');
const connection = require("./connection");
connection();




app.listen(port, () => console.log(`App listening on port ${port}!`));
