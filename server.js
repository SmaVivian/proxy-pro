var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');

var app = express();
// app.use(express.static("./"));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', proxy({ target: 'http://bjmuseum.org.cn/', changeOrigin: true }));
app.listen(8000);