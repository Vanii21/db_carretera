const UserDAO = require('./DAO');
const UserDTO = require('./DTO');
const UserModel = require('./model');
const PassHash = require('../../services/bcryptServices');

const controller = {};

controller.inicio = async (req, res) => {
    res.send('Hola');
}

controller.login = async (req, res) => {
    const { txtEmail, txtContrasena } = req.body;

    const user = await UserDAO.getUser(txtEmail);
    if (!user) {
        return res.json({ message: 'Usuario no encontrado' });
    }

    const match = await PassHash.comparePasswords(txtContrasena, user.contrasena);

    if (!match) {
        return res.json({ message: 'Contraseña incorrecta' });
    }

    const nombre = user.nombre;
    const id_usuario = user.id_usuario;
    res.json({ nombre, id_usuario });
}

controller.registrar = async (req, res) => {
    const { txtNombre, txtEmail, txtContrasena } = req.body;

    // Validar datos del usuario
    const userDTO = new UserDTO(txtNombre, txtEmail,  txtContrasena);

    const validations = {
        username: userDTO.isValidUsername(),
        password: userDTO.isValidPassword(),
        email: userDTO.isValidEmail()
    };

    if (validations.username !== true) return res.send(validations.username);
    if (validations.password !== true) return res.send(validations.password);
    if (validations.email !== true) return res.json({ message: validations.email });

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await UserDAO.getUser(txtEmail);
    if (existingUser) {
        return res.json({ message: 'Este usuario ya existe' });
    }

    // Hashear la contraseña antes de almacenarla
    const hashedPassword = await PassHash.hashPassword(txtContrasena);

    // Crear un nuevo usuario
    const newUser = new UserModel(txtEmail, hashedPassword, txtNombre);


    // Guardar el usuario en la base de datos
    const savedUser = await UserDAO.createUser(newUser);

    if (savedUser) {
        return res.json({user: savedUser, message: 'Usuario registrado' });
    } else {
        return res.json({ message: 'Usuario no registrado' });
    }
}

module.exports = controller;