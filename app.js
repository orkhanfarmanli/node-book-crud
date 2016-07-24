'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let port = 8000;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// db connection
let db = 'mongodb://localhost/mongoose-project';
mongoose.connect(db);


// routes
let bookRouter = require('./Routes/BookRouter');
app.use('/books', bookRouter);

// server listen
app.listen(port, function(err){
  if(err) throw err;
  console.log("Listening on port " + port);
})
