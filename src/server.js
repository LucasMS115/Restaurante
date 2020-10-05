const express = require('express');
const server = express();
const routes = require('./routes');
const cors = require('cors');
require("./sql/database");

server.use(express.static("public"));
server.use(express.json());
server.use((req, res, next) => {
    console.log("\nMiddlewere\n");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", ['Content-Type', 'Authorization']);
    res.header("Access-Control-Allow-Methods", ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE']);
    next();
});
server.use(routes)

.listen(5000);