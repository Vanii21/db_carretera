const express = require('express');
const router = express.Router();
const loginUser = require('./controllerUser');

// Ruta para el inicio de sesión del usuario
router.get('/', loginUser.inicio);
router.post('/login', loginUser.login);
router.post('/register', loginUser.registrar);

module.exports = router;