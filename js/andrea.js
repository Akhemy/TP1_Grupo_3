/* Manejador del formulario de contacto con gatito */
document.querySelector('.formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    cargarGatito();
});

/* Función para cargar un gatito aleatorio */
function cargarGatito() {
    const imagenGatito = document.getElementById('imagen-gatito');
    const timestamp = new Date().getTime();
    imagenGatito.src = `https://cataas.com/cat?t=${timestamp}`;
    document.getElementById('popup-gatito').style.display = 'flex';
}

/* Función para cerrar el popup */
function cerrarPopup() {
    document.getElementById('popup-gatito').style.display = 'none';
}

/* Cerrar popup al hacer click fuera del contenido */
document.getElementById('popup-gatito').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarPopup();
    }
});
