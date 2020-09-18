const express = require('express');
const server = express();

server.use(express.static("public"))
//Routes
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/pages/index.html");
})
.get("/menu", (req, res) => {
    return res.sendFile(__dirname + "/pages/menu.html");
})
.get("/reserves", (req, res) => {
    return res.sendFile(__dirname + "/pages/reserves.html");
})
.get("/adm", (req, res) => {
    return res.sendFile(__dirname + "/pages/adm.html");
})

.listen(5000);