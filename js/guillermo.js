/* =============================================
   guillermo.js — Interactividad de la tarjeta
   Tecnicatura Superior en Desarrollo de Software
   =============================================

   Funciones implementadas:
   1. Toggle bio       — muestra/oculta la descripción personal
   2. Skill cards      — revela descripción de cada habilidad al hacer clic
   3. Movie cards      — el efecto hover está manejado enteramente por CSS
                         (escala la tarjeta y despliega la descripción)
*/

/* ============================================
   1. Toggle "Sobre mí"
   ============================================ */
const btnBio = document.querySelector('.js-toggle-bio');
const bio    = document.querySelector('.js-bio');

if (btnBio && bio) {
  // Quitamos el atributo hidden del HTML para que CSS maneje la visibilidad
  bio.removeAttribute('hidden');

  btnBio.addEventListener('click', () => {
    const isOpen = btnBio.getAttribute('aria-expanded') === 'true';
    btnBio.setAttribute('aria-expanded', String(!isOpen));
    // Alternamos la clase que activa la transición CSS
    bio.classList.toggle('is-open', !isOpen);
  });
}

/* ============================================
   2. Skill cards — mostrar / ocultar descripción
   Solo una skill activa a la vez.
   ============================================ */
const skillCards = document.querySelectorAll('.js-skill');

skillCards.forEach(card => {
  const toggleSkill = () => {
    const isActive = card.classList.contains('is-active');
    skillCards.forEach(c => c.classList.remove('is-active'));
    if (!isActive) card.classList.add('is-active');
  };

  card.addEventListener('click', toggleSkill);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSkill();
    }
  });
});

/* ============================================
   3. Movie cards — hover manejado por CSS
   No se necesita JS adicional.
   ============================================ */

/* ============================================
   4. enviarFormulario()
   Previene el envío real del form, valida que
   los campos requeridos estén completos, muestra
   el mensaje de éxito y limpia el formulario.
   ============================================ */
function enviarFormulario(event) {
  event.preventDefault();

  const form    = event.target;
  const success = document.getElementById('contact-success');

  // Mostrar mensaje de éxito
  success.hidden = false;

  // Limpiar formulario
  form.reset();

  // Ocultar el mensaje después de 5 segundos
  setTimeout(() => {
    success.hidden = true;
  }, 5000);
}

/* ============================================
   5. Barra de progreso de scroll
   Actualiza el ancho del elemento
   #scrollProgress según el porcentaje
   de la página que el usuario ya recorrió.
   ============================================ */
const scrollBar = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const scrollTop    = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight
                     - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollBar.style.width = progress + '%';
});