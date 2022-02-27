var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic(__dirname));

var port = process.env. ПОРТ || 5000;

app.listen(port);