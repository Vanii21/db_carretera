class UserModel {

    constructor(id_usuario, nombre, email, contrasena) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.email = email;
        this.contrasena = contrasena;
    }
    
}

module.exports = UserModel;