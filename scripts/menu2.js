document.addEventListener('DOMContentLoaded', function () {
    const nombreUsuario = localStorage.getItem('nombreUsuario') || 'Usuario';
    const idUsuario = localStorage.getItem('id_usuario'); // Obtener id_usuario desde localStorage
    const idRol = localStorage.getItem('id_rol'); // Obtener id_rol desde localStorage

    console.log(`Usuario: ${nombreUsuario}, ID Usuario: ${idUsuario}, Rol: ${idRol}`);

    if (!idUsuario || !idRol) {
        // Si no hay id_usuario o id_rol, redirigir al login
        window.location.href = 'index.html';
        return;
    }

    const sidebarHTML = `
        <div class="sidebar">
            <h1>TEWU</h1>
            <ul class="menu">
                <li><a href="../gestion.html">Inicio</a></li>
                ${
                  idRol == 1 // Mostrar opciones restringidas solo si idRol es 1
                    ? `
                        <li><a href="../alta.html">Agregar</a></li>
                        <li><a href="../modificar.html">Modificar</a></li>
                        <li><a href="../Eliminar.html">Eliminar</a></li>
                      `
                    : ''
                }
                <li><a href="../consultar.html">Consultar</a></li>
                <li><a href="../vender.html">Vender</a></li>
                <li><a href="../index.html" onclick="logout()">Cerrar Sesión</a></li>
            </ul>
            <p>Bienvenido, <b>${nombreUsuario}</b></p>
        </div>
    `;

    const sidebarContainer = document.createElement('div');
    sidebarContainer.innerHTML = sidebarHTML;
    document.body.insertBefore(sidebarContainer, document.body.firstChild);

    // Marcar el enlace activo
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre de la página actual
    const links = document.querySelectorAll('.sidebar .menu li a');

    links.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active'); // Agrega la clase 'active' al enlace correspondiente
        }
    });
});

// Función para cerrar sesión y limpiar localStorage
function logout() {
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('id_usuario'); // Limpia también el id_usuario
    localStorage.removeItem('id_rol'); // Limpia el id_rol
}
