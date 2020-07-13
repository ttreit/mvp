//requirements
const express = require('express');  //express itself
const bodyParser = require('body-parser'); //used for parsing incoming req bodies (node.js middlware)


//create app and set port
const app = express();
const port = process.env.port || 1337;

//static files available to server root
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  res.sendFile(index.html);
})

//start server
app.listen(port, () => console.log(`Server up and running on port ${port}`));

//TODO How to escape/prevent xss attacks