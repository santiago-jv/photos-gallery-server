const {Router} = require('express');
const photosRouter = require('./photosRouter');
const indexRouter = Router()

indexRouter.use('/photos',photosRouter)

module.exports = indexRouter