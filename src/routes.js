const {Router} = require('express');
const routes = new Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
/* const upload = multer({
  dest: 'src/uploads/' 
}); */

const UserController = require('./sql/controllers/UserController');
const ReservesController = require('./sql/controllers/ReservesController');
const DishesController = require('./sql/controllers/DishesController');
const ImagesController = require('./sql/controllers/ImagesController');


/*** DB CONTROLLERS ROUTES ***/ 

//Users table
routes.post('/users', UserController.store); // Create user
routes.get('/users', UserController.index); // Show ALL users
routes.get('/users/byId', UserController.searchById); // Search user by Id
routes.get('/users/byEmail', UserController.searchByEmail); // Search user by email
routes.get('/users/byName', UserController.searchByName); // Search users by name
routes.put('/users/update/:id', UserController.update); // Update user
routes.delete('/users', UserController.delete); // Delete user

//Reserves table
routes.post('/users/reservesTable/:user_id', ReservesController.store);
routes.get('/reservesTable', ReservesController.index); 
routes.get('/reservesTable/byId', ReservesController.searchById); 
routes.get('/reservesTable/byDay', ReservesController.searchByDay);
routes.get('/reservesTable/byRoom', ReservesController.searchByRoom); 
routes.get('/reservesTable/byUser', ReservesController.searchByUser); 
routes.put('/reservesTable/update/:id', ReservesController.update); 
routes.delete('/reservesTable', ReservesController.delete);

//Dishes Table 
routes.post('/dishesTable', DishesController.store);
routes.get('/dishesTable', DishesController.index); 
routes.get('/dishesTable/byId', DishesController.searchById); 
routes.get('/dishesTable/byName', DishesController.searchByName); 
routes.put('/dishesTable/update/:id', DishesController.update); 
routes.delete('/dishesTable', DishesController.delete);

// Images Table
routes.post('/imagesTable', multer(multerConfig).single("image"), ImagesController.store);
routes.get('/imagesTable', ImagesController.index); 
routes.get('/imagesTable/byId', ImagesController.searchById);
routes.get('/imagesTable/byKey', ImagesController.searchByKey);
routes.get('/imagesTable/byName', ImagesController.searchByName);
routes.delete('/imagesTable', ImagesController.delete);

routes.post('/imgTest', multer(multerConfig).single("image"), (req, res)=>{
  console.log(req.file);
  return res.json({teste: "oi"});
});


//Por fazer: 1 - ajustar a Dishes pra um relacionamento 1-1 com ela
// 2 - Fazer a validacao nas migrations de todas as tabelas e dropálas de novo


/*** DB CONTROLLERS ROUTES ***/ 

module.exports = routes;