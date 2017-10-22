var PORT = process.env.PORT || 8080; // default port 8080

var express = require("express");
// const methodOverride = require('method-override');
// const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

var app = express();
app.set ('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(methodOverride('_method'));
app.use(cookieParser());

//Sample endpoint
app.get("/", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n");
});

//Listening to the appropriate PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});