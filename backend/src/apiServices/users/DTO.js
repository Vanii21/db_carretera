class UserDTO {
    constructor(nombre, email, contrasena) {
        this.nombre = nombre;
        this.email = email;
        this.contrasena = contrasena;
    }

    isValidUsername() {
        // Validar que el nombre de usuario tenga entre 3 y 20 caracteres
        if (this.nombre.length < 3 || this.nombre.length > 20) {
            return 'El nombre de usuario debe tener entre 3 y 20 caracteres';
        }
        return true;
    }

    isValidEmail(){
        const regex = /^[A-Za-z\d._%+-]+@gmail\.com$/;
        if (!regex.test(this.email)) {
            return 'El correo electronico debe contener "@gmail.com"';
        }
        return true
    }

    isValidPassword() {
        // Validar que la contraseña tenga al menos 8 caracteres y contenga al menos una letra y un número
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(this.contrasena)) {
            return 'La contraseña debe tener al menos 8 caracteres con al menos una letra y un número.';
        }
        return true;
    }

}

module.exports = UserDTO;