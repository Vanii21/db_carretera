const communityDAO = require('./DAO');
const controller = {};

controller.consulta = async (req, res) => {
    const community = await communityDAO.getCommunities();
    return res.json({community});
}

module.exports = controller;