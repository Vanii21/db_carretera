import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../helpers/helperLogin/login';
import { register } from '../../helpers/helperLogin/register';

import imgRoad from '../../assets/road.svg';
import './login.css';

const Login = () => {

  const navigate = useNavigate();

  const loginTab = (i) => {
    setLoginStatus(i);
  }

  const [loginStatus, setLoginStatus] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    const result = register(formData); // Enviar los datos al helper
    result ?  navigate('/') : navigate('/');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await login(formData);
    localStorage.setItem('nombre', result.nombre);
    localStorage.setItem('id', result.id_usuario)
    result ? navigate('/Home/inicio') : navigate('/');
  }

  return (
      <section>

        <div className="login__header">
          <img src={imgRoad} alt="iconCarretera" />
          <h3 className="section__title">CARRETERAS GT</h3>
        </div>

        <div className={loginStatus === 1 ? "wrapper active" : "wrapper"}>

          <div onClick={() => loginTab(0)} className="form signup">
            <h3 className="section__title">Registrarse</h3>
            <form onSubmit={handleSubmitRegister}>
              <input type="text" name="txtNombre" onChange={handleChange} placeholder="Nombre Apellido" required />
              <input type="text" name="txtEmail" onChange={handleChange} placeholder="Correo Electronico" required />
              <input type="password" name="txtContrasena" onChange={handleChange} placeholder="Contraseña" required />
              <input type="submit" className="button" value="Registrar" />
            </form>
          </div>

          <div onClick={() => loginTab(1)} className="form login">
            <h3 className="section__title">Iniciar Sesión</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="txtEmail" onChange={handleChange} placeholder="Correo Electronico" required />
              <input type="password" name="txtContrasena" onChange={handleChange} placeholder="Contraseña" required />
              <input type="submit" className="button" value="Ingresar" />
            </form>
          </div>
          
        </div>
      </section>
  );
}

export default Login;
