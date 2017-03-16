var express = require("express");
var app = express();
var routes = require('./routes/index');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/static", express.static("public")); //配置swagger文档


routes(app);

app.listen(3000, function() {
    console.log("server listening at port 3000");
});