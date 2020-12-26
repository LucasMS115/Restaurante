const {Router} = require('express');
const routes = new Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

/*** DB CONTROLLERS  ***/ 
const UserController = require('./sql/controllers/UserController');
const ReservesController = require('./sql/controllers/ReservesController');
const DishesController = require('./sql/controllers/DishesController');
const ImagesController = require('./sql/controllers/ImagesController');
/*** DB CONTROLLERS ***/ 


/*** DB ROUTES ***/ 

//Users table
routes.post('/users', UserController.store); // Create user
routes.get('/users', UserController.index); // Show ALL users
routes.get('/users/byId/:id', UserController.searchById); // Search user by Id
routes.get('/users/byEmail', UserController.searchByEmail); // Search user by email
routes.get('/users/testUser/:email/:password', UserController.testUser); 
routes.get('/users/byName', UserController.searchByName); // Search users by name
routes.put('/users/update/:id', UserController.update); // Update user
routes.delete('/users/:id', UserController.delete); // Delete user

//Reserves table
routes.post('/reservesTable/:user_id', ReservesController.store);
routes.get('/reservesTable', ReservesController.index); 
routes.get('/reservesTable/byId', ReservesController.searchById); 
routes.get('/reservesTable/byDay', ReservesController.searchByDay);
routes.get('/reservesTable/freeHours', ReservesController.freeHours);
routes.get('/reservesTable/byRoom', ReservesController.searchByRoom); 
routes.get('/reservesTable/byUser/:user_id', ReservesController.searchByUser); 
routes.put('/reservesTable/update/:id', ReservesController.update); 
routes.delete('/reservesTable/', ReservesController.delete);

//Dishes Table 
routes.post('/dishesTable', DishesController.store);
routes.get('/dishesTable', DishesController.index); 
routes.get('/dishesTable/byId', DishesController.searchById); 
routes.get('/dishesTable/byName', DishesController.searchByName);
routes.get('/dishesTable/byType', DishesController.searchByType); 
routes.put('/dishesTable/update/:id', DishesController.update); 
routes.delete('/dishesTable/:id', DishesController.delete);

// Images Table
routes.post('/imagesTable/:id', multer(multerConfig).single("image"), ImagesController.store);
routes.get('/imagesTable', ImagesController.index); 
routes.get('/imagesTable/byId', ImagesController.searchById);
routes.get('/imagesTable/byDishId', ImagesController.searchByDishId);
routes.get('/imagesTable/byKey', ImagesController.searchByKey);
routes.get('/imagesTable/byName', ImagesController.searchByName);
routes.delete('/imagesTable', ImagesController.delete);

// 2 - Fazer a validacao nas migrations de todas as tabelas e rodar as migs de novo

/*** DB ROUTES ***/

module.exports = routes;