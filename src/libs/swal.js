const { default: Swal } = require("sweetalert2");

export const textPopUp = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'Close'
    });
}