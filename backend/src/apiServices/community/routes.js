const express = require('express');
const router = express.Router();
const communities = require('./controllerCommunity');

// Ruta para el inicio de sesión del usuario
router.get('/', communities.consulta);

module.exports = router;