const routes = require('express').Router();
const middleware = require('../middleware');
const tokenGenerator = require('../tokenGenerator');
const userController = require('../controllers/UserController');
const photoController = require('../controllers/PhotoController');
let token = new tokenGenerator();


routes.post('/image-remove', middleware.checkToken, photoController.deleteImage);
routes.post('/image-avatar', middleware.checkToken, photoController.avatarImage);
routes.post('/registration', userController.registration, token.registration);
routes.post('/login', token.login);
routes.post('/upload', middleware.checkToken, photoController.upload);
routes.post('/favorite', middleware.checkToken, userController.setFavorite);
routes.post('/search', middleware.checkToken, userController.searchProfiles);
routes.get('/view-profile', middleware.checkToken, userController.viewProfile);
routes.get('/check-user', middleware.checkToken, userController.viewProfile);
routes.get('/view-images', middleware.checkToken, photoController.viewImages);
routes.get('/random-images', photoController.randomImages);
routes.get('/get-album', middleware.checkToken, photoController.userAlbum);
routes.put('/edit-profile', middleware.checkToken, middleware.checkRoleForEdit, userController.editProfile);
routes.post('/searchAll', middleware.checkToken, middleware.checkRoleModerAdmin, userController.searchAllProfiles);
module.exports = routes;