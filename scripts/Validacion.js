// Función para permitir solo letras, números, espacios y el guion (-)
function validarCaracteresPermitidos(event) {
    const campo = event.target;
    campo.value = campo.value.replace(/[^a-zA-Z0-9\s-]/g, '');
}


