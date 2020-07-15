//requirements
const express = require('express');  //express itself
const bodyParser = require('body-parser'); //used for parsing incoming req bodies (node.js middlware)
const mongoose = require('mongoose'); //makes connecting to mongoDB easier
require('dotenv/config');

//add mongoose schema for a set
const Set = require('./models/Set')


//create app and set port
const app = express();
const port = process.env.port || 5347;

//parse incoming requests
app.use(bodyParser.json());

//static files available to server root
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  res.sendFile(index.html);
});

app.post('/', (req, res) => {
  res.send('Post Request')
  console.log ('req.body: ', req.body);
  const set = new Set({
    set: req.body.set,
    user: req.body.user
  });
  set.save(); //returns a promise
})


//connect to mongoDb (Atlas)
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to Atlas')
);


//start server
app.listen(port, () => console.log(`Server up and running on port ${port}`));

//TODO How to escape/prevent xss attacks




