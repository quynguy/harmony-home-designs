const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('view engine', 'ejs');

// static folder path
app.use(express.static("public"));

// routes 
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});


// establish port for server
const port = 2121;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});