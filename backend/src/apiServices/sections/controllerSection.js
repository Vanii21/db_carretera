const sectionDAO = require('./DAO');

const controller = {};

controller.consulta = async (req, res) => {
    const section = await sectionDAO.getSections();
    return res.json({ section });
}

controller.eliminar = async (req, res) => {
    res.send('Mensaje desde controllerSection');
}

module.exports = controller;