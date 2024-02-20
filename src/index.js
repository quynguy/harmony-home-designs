const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('view engine', 'ejs');

// static folder path
app.use(express.static("public"));
app.use(express.static("src"));


// routes 
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});


// establish port for server
const port = 2121;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});