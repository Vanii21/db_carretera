const express = require('express');
const router = express.Router();
const roads = require('./controllerRoads');

// Ruta para el inicio de sesión del usuario
router.get('/', roads.consulta);
router.get('/delete/:id_carretera', roads.eliminar);

module.exports = router;