import { showAlertError } from '../alerts/showAlertError'

export const login = async(data) => {

    const url = `http://localhost:3001/login`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const datos = await resp.json();

    if (datos.nombre) {
        return datos;
    } else {
        showAlertError(datos.message);
        return null;
    }
    

}