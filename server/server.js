const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"../views")); //현재폴더 상위폴더에 views

app.get('/', function (req, res) {
    res.render("main");
    //res.send('Hello World');
})

app.listen(3000);