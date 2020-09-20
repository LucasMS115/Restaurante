const express = require('express');
const server = express();
const routes = require('./routes');
require("./sql/database");

server.use(express.static("public"));
server.use(express.json());
server.use(routes)

.listen(5000);