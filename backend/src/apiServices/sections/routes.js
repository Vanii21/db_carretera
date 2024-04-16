const express = require('express');
const router = express.Router();
const sections = require('./controllerSection');

// Ruta para el inicio de sesión del usuario
router.get('/', sections.consulta);
//router.get('/delete', sections.eliminar)

module.exports = router;