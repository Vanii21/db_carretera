import Swal from 'sweetalert2';

export const showAlertAcept = (message) => {
    Swal.fire({
        title: '¡EXITO!',
        text: message,
        icon: 'success',
        showConfirmButton: true
    }).then((result) => {
        if(result.isConfirmed){
            window.location.reload();
        }
    });
}