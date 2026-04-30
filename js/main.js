// ============================================================
// GRUPO 3 — IFTS N.29
// Archivo: js/main.js
// Descripcion: funciones JavaScript de la portada principal
// ============================================================

// ------------------------------------------------------------
// FUNCION: mostrarSaludo()
// Que hace: al hacer clic en el boton "Conocenos", muestra un
// mensaje de bienvenida que rota entre distintas frases.
// Donde esta: seccion hero del index.html
// ------------------------------------------------------------
function mostrarSaludo() {
  // Lista de mensajes posibles
  var mensajes = [
    "Bienvenido/a a nuestro espacio colaborativo.",
    "Cinco mentes, un solo proyecto.",
    "Aprendemos juntas, construimos juntas.",
"El codigo es mejor en equipo."
  ];

  // Elige un mensaje al azar
  var indice = Math.floor(Math.random() * mensajes.length);
  var mensaje = mensajes[indice];

  // Lo muestra en el parrafo con id="mensajeSaludo"
  var parrafo = document.getElementById("mensajeSaludo");
  parrafo.textContent = mensaje;

  // Cambia el texto del boton para que no se repita la accion
  var boton = document.getElementById("btnSaludo");
  boton.textContent = "Otro saludo";
}

// ------------------------------------------------------------
// FUNCION: marcarLinkActivo()
// Que hace: resalta en la navegacion el link de la pagina actual
// segun la URL del navegador. Se ejecuta automaticamente.
// ------------------------------------------------------------
function marcarLinkActivo() {
  var links = document.querySelectorAll(".nav-link");
  var paginaActual = window.location.pathname.split("/").pop();

  links.forEach(function(link) {
    var href = link.getAttribute("href");
    if (href === paginaActual) {
      link.classList.add("activo");
    } else {
      link.classList.remove("activo");
    }
  });
}

// Ejecuta la funcion cuando termina de cargar la pagina
window.addEventListener("load", marcarLinkActivo);
