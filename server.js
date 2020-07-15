//requirements
const express = require('express');  //express itself
const bodyParser = require('body-parser'); //used for parsing incoming req bodies (node.js middlware)
const mongoose = require('mongoose'); //makes connecting to mongoDB easier

//Mongoose alias
const db = mongoose.connection;

//create app and set port
const app = express();
const port = process.env.port || 5347;
const dataLocation = 'mongodb://localhost/'

//static files available to server root
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  res.sendFile(index.html);
});

//connect to mongoDb (Atlas)

//mongodb+srv://Tammy:<GoHawks>@seahawk1.b4fyp.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(dataLocation, {useNewUrlParser: true});
//test mongoDB connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',() => {
  //log connection
  console.log(`Connected to ${dataLocation}`);
  //refer to schema and create properties
  const homonymSchema = new mongoose.Schema({
    set: Array,
    user: String
  });
  //compile schema into a Model
  //a Model is a class with which we construct documents
  const HomonymSet = mongoose.model('HomonymSet', homonymSchema);
  //TODO replace [heart, hart] hardcoded with set passed in to server from req.body
  const inputSet = ['great', 'grate']; //TODO get this from req.body
  const newSet = new HomonymSet({set: inputSet})
  console.log(newSet.set);
  //save record to DB
  newSet.save((err, newSet) => {
    if (err) return console.error(err);
    newSet;
  });

})


//start server
app.listen(port, () => console.log(`Server up and running on port ${port}`));

//TODO How to escape/prevent xss attacks




