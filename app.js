var figlet = require("figlet");
const express = require('express');
const app = express();

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(3000);