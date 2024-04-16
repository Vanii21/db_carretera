const db = require('../../config/dbConfig');
const RoadsModel = require('./model');

class RoadDAO{

    //Verificar si el usuario existe
    async getRoads(){

        try {

            const connection = await db.getConnection();
            const [rows] = await connection.execute('CALL consulta_carretera()');

            if (rows[0].length > 0) {
                return rows[0];
            } else {
                return null;
            }

        } catch (error) {

            console.error('Error mostrar las carreteras:', error);
            throw error; // Lanza el error para que sea manejado en un nivel superior
            
        }

    }

    async deleteRoads(id_carretera, id_usuario) {
        try {

            const connection = await db.getConnection();
            await connection.execute('CALL eliminar_carretera(?, ?)', [id_carretera, id_usuario]);

        } catch (error) {

            console.error('Error al eliminar tramos:', error);
            throw error; // Lanza el error para que sea manejado en un nivel superior
            
        }
    }

}

module.exports = new RoadDAO();