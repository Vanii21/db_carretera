const db = require('../../config/dbConfig');
const CommunitiesModel = require('./model');

class CommunityDAO{

    //Verificar si el usuario existe
    async getCommunities(){

        try {

            const connection = await db.getConnection();
            const [rows] = await connection.execute('CALL consulta_comunidad()');

            if (rows[0].length > 0) {
                return rows[0];
            } else {
                return null;
            }

        } catch (error) {

            console.error('Error mostrar los tramos:', error);
            throw error; // Lanza el error para que sea manejado en un nivel superior
            
        }

    }

}

module.exports = new CommunityDAO();