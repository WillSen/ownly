var express = require('express'),
    app = express(),
    server = require('http').Server(app)

server.listen(process.env.PORT || 3000);

app.use(express.static('.'));