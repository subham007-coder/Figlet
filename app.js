var figlet = require("figlet");
const express = require('express');
const app = express();

app.set("view engine", "ejs");

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
    
    app.get('/', function (req, res) {
        res.render("index",{data: data});
    });
});

app.listen(3000);