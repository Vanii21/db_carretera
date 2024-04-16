const roadDAO = require('./DAO');

const controller = {};

controller.consulta = async (req, res) => {
    const road = await roadDAO.getRoads();
    return res.json({ road });
}

controller.eliminar = (req, res) => {
    const id_carretera = req.params.id_carretera; // Obtener el parámetro id_carretera de la URL
    const id = req.query.id; // Obtener el query parameter id
    roadDAO.deleteRoads(id_carretera, id);
    res.send('Elimine un elemento');
}

module.exports = controller;