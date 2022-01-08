const {Router} = require('express');
const photosController = require('../controllers/photosController');
const photosRouter = Router()
/* basePath:'/photos */

photosRouter.get('', photosController.getPhotos)
photosRouter.post('', photosController.createPhoto)
photosRouter.get('/:id', photosController.getPhoto)
photosRouter.delete('/:id', photosController.deletePhoto)


module.exports = photosRouter