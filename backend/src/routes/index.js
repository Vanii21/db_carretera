const express = require('express');
const router = express.Router();
//Rutas de la Aplicacion
const routerUser = require('../apiServices/users/routes');
const routerSection = require('../apiServices/sections/routes');
const routerRoad = require('../apiServices/roads/routes');
const routerCommunity = require('../apiServices/community/routes');

//Ruta para el inicio de la aplicacion
router.use('/', routerUser);
router.use('/sections', routerSection);
router.use('/roads', routerRoad);
router.use('/communities', routerCommunity);

module.exports = router;