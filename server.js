//requirements
const express = require('express');  //express itself
const bodyParser = require('body-parser'); //used for parsing incoming req bodies (node.js middlware)
const mongoose = require('mongoose'); //makes connecting to mongoDB easier
const { body, validationResult } = require('express-validator');
const { santizeBody } = require('express-validator');
const logger = require('./middleware/logger');
const processString = require('./middleware/processString');
require('dotenv/config');


//add mongoose schema for a set
const Set = require('./models/Set')


//create app and set port
const app = express();
const port = process.env.port || 7100;

//parse incoming requests
app.use(bodyParser.urlencoded({extended: true}));

//log incoming requests to console
app.use(logger);

//convert string to BSON
app.use(processString);

//static files available to server root
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  res.sendFile(index.html);
});

//TODO add validation w/ express-validator
app.post('/', (req, res) => {
  res.send('Post Request')
  console.log('req.body: ', req.body);


  //console.log('contenttype', req);
  const set = new Set({
    set: req.body
    //user: req.body.user
  });
  set.save() //returns a promise
});


//connect to mongoDb (Atlas)
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to Atlas')
);


//start server
app.listen(port, () => console.log(`Server up and running on port ${port}`));

//TODO How to escape/prevent xss attacks




