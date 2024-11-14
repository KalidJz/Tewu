// menu.js

document.addEventListener('DOMContentLoaded', function () {
    const sidebarHTML = `
        <div class="sidebar">
            <h1>TEWU v4</h1>
            <ul class="menu">
                <li><a href="gestion.html">Inicio</a></li>
                <li><a href="alta.html">Agregar</a></li>
                <li><a href="modificar.html">Modificar</a></li>
                <li><a href="consultar.html">Consultar</a></li>
                <li><a href="Eliminar.html">Eliminar</a></li>
                <li><a href="vender.html">Vender</a></li>
                <li><a href="index.html">Cerrar Sesión</a></li>
            </ul>
        </div>
    `;

    const sidebarContainer = document.createElement('div');
    sidebarContainer.innerHTML = sidebarHTML;
    document.body.insertBefore(sidebarContainer, document.body.firstChild);
});
