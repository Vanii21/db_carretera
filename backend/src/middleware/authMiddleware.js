const UserDAO = require('../apiServices/users/DAO');

const authenticateUser = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await UserDAO.getUser(username);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const match = await UserDAO.comparePasswords(password, user.password);
    if (!match) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    req.user = user;
    next();
}

module.exports = authenticateUser;