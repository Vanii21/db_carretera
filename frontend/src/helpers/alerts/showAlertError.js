import Swal from 'sweetalert2';

export const showAlertError = (message) => {
    Swal.fire({
        title: 'ERROR',
        text: message,
        icon: 'error',
        timer: 3200,
        timerProgressBar: true,
        showConfirmButton: false
    });
};
