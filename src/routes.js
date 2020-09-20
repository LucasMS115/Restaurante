const {Router} = require('express');
const routes = new Router();

const UserController = require('./sql/controllers/UserController');
const ReservesController = require('./sql/controllers/ReservesController');

/*** PAGES ROUTES **/
routes.get("/", (req, res) => {
    return res.sendFile(__dirname + "/pages/index.html");
});

routes.get("/TEST", (req, res) => {
    return res.sendFile(__dirname + "/pages/TEST.html");
});

routes.get("/menu", (req, res) => {
    return res.sendFile(__dirname + "/pages/menu.html");
});

routes.get("/reserves", (req, res) => {
    return res.sendFile(__dirname + "/pages/reserves.html");
});

routes.get("/adm", (req, res) => {
    return res.sendFile(__dirname + "/pages/adm.html");
});
/*** PAGES ROUTES ***/

/*** DB CONTROLLERS ROUTES ***/ 
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);

routes.post('/users/:user_id/reservesTable', ReservesController.store);
routes.get('/reservesTable', ReservesController.index); //All reserves
routes.delete('/reservesTable', ReservesController.delete);
/*** DB CONTROLLERS ROUTES ***/ 

module.exports = routes;