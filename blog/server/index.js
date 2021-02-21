const express = require('express');
const morgan = require('morgan');
const path = require('path');

// ----------------
const routes = require('./resources/routes');
const db = require('./resources/config/db/index');

// Connect to db
db.connect();

// -----------------
const app = express();
const port = 4000;

// Middleware
// Console.log request to server
// app.use(morgan('combined'));

// Static file on your app
app.use(express.static(path.join(__dirname, 'public')));

// body-parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // if file send is json


// view engine setup 
app.set('views', path.join(__dirname, 'resources','views')); 
app.set('view engine', 'ejs'); 

// init routes
routes(app);

// Run server
app.listen(port, () => {
  console.log(`App listening at PORT: http://localhost:${port}`)
});