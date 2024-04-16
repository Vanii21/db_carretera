const db = require('../../config/dbConfig');
const UserModel = require('./model');

class UserDAO{

    //Verificar si el usuario existe
    async getUser(txtEmail){

        try {
            const connection = await db.getConnection();
            const [rows] = await connection.execute('CALL validar_usuario(?)', [txtEmail]);
            if (rows[0].length > 0) {
                const { id_usuario, nombre, email, contrasena } = rows[0][0];
                return new UserModel(id_usuario, nombre, email, contrasena);
            } else {
                return null;
            }

        } catch (error) {
            console.error('Error al ejecutar el procedimiento almacenado:', error);
            throw error; // Lanza el error para que sea manejado en un nivel superior
        }

    }

    async createUser({ nombre, email, contrasena }){
        try {
            const connection = await db.getConnection();
            const [rows] = await connection.execute('CALL registrar_usuario(?, ?, ?)', [nombre, email, contrasena]);
            return rows[0][0].id_usuario;
        } catch (error) {
            console.error('Error al insertar usuario:', error);
        }
    }

}

module.exports = new UserDAO();