var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/Dist'));

app.listen(3001);
console.log('Listening on port 3001');