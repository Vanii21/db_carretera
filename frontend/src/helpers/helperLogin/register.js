import { showAlertAcept } from '../alerts/showAlertAcept';
import { showAlertError } from '../alerts/showAlertError';

export const register = async(data) => {

    const url = `http://localhost:3001/register`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const datos = await resp.json();

    if (typeof(datos.user) === 'number') {
        showAlertAcept(datos.message);
        return datos.message;
    } else {
        showAlertError(datos.message);
        return datos;
    }
    

}