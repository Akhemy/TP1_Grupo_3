# Grupo 3 — Trabajo Practico Grupal 1

**Materia:** Desarrollo de Sistemas Web — Frontend  
**Instituto:** IFTS N.29  
**Año:** 2026  
**Deploy:** [Ak link vercel]

---

## Descripcion del Proyecto

La consigna del TP! es realizar un sitio web grupal que integra (EN TEORIA) los portfolios individuales
de las cuatro integrantes del Grupo 3. La portada presenta al equipo con links a cada pagina
individual, y el sitio incluye ademas una bitacora con el registro del proceso de desarrollo.
El proyecto fue construido unicamente con HTML5, CSS3 y JavaScript, sin frameworks externos.

---

## Integrantes (sus link de los portafolios)

| Nombre | GitHub |
|--------|--------|
| Gisela Croci | [giselac89](https://github.com/giselac89) |
| Fernanda Flores | [ferffloress](https://github.com/ferffloress) |
| Pamela Olave | [Agregar usuario de GitHub] |
| Andrea Maccan | [acmaccan](https://github.com/acmaccan) |

---

## Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Media Queries, Variables CSS)
- JavaScript (funciones dinamicas sin frameworks)
- Google Fonts (Cinzel + Raleway)
- GitHub (control de versiones)
- Vercel (publicacion en la nube)

---

## Estructura de Archivos

```
tp1-grupo3/
├── index.html        <- Portada principal del grupo
├── gisela.html       <- Pagina individual de Gisela Croci
├── fernanda.html     <- Pagina individual de Fernanda Flores
├── pamela.html       <- Pagina individual de Pamela Olave
├── andrea.html       <- Pagina individual de Andrea Maccan
├── bitacora.html     <- Seccion de bitacora del proyecto
├── css/
│   ├── styles.css    <- Estilos principales compartidos
│   └── pamela.css    <- Estilos adicionales de Pamela
├── js/
│   ├── main.js       <- JavaScript de la portada
│   └── pamela.js     <- JavaScript de la pagina de Pamela
├── img/
│   └── foto.jpg      <- imagenes del proyecto)
└── README.md
```

---

## Guia de Estilos

### Paleta de Colores

| Uso | Codigo |
|-----|--------|
| Fondo principal | `#0d0a1a` |
| Fondo medio (secciones) | `#130d24` |
| Fondo tarjetas | `#1a1030` |
| Acento violeta | `#9b72e8` |
| Violeta claro (hover) | `#c4a8f5` |
| Dorado (detalles) | `#c8a96e` |
| Texto principal | `#e8e0f5` |
| Texto suave | `#a090c0` |

### Tipografias (Google Fonts)

- **Cinzel** — titulos y encabezados  
  [fonts.google.com/specimen/Cinzel](https://fonts.google.com/specimen/Cinzel)
- **Raleway** — cuerpo de texto  
  [fonts.google.com/specimen/Raleway](https://fonts.google.com/specimen/Raleway)

---

## JavaScript — Funciones Implementadas

### Portada (index.html)

**mostrarSaludo()**  
Al hacer clic en el boton "Conocenos", muestra un mensaje de bienvenida elegido al azar
de una lista de frases. El boton cambia su texto a "Otro saludo" para invitar a repetir la accion.

**marcarLinkActivo()**  
Se ejecuta automaticamente al cargar la pagina. Detecta la URL actual y resalta el link
correspondiente en la barra de navegacion.

### Pagina de Pamela (pamela.html)

**mostrarHabilidadExtra()**  
Al hacer clic en el boton "Ver habilidad destacada", muestra una habilidad tecnica elegida
al azar de una lista. Permite al visitante explorar las competencias de Pamela de forma interactiva.

### Pagina de Gisela (gisela.html)

**toggleInfo()**  
Muestra u oculta un bloque de informacion adicional. El boton cambia su texto entre
"Mostrar mas informacion" y "Ocultar informacion" segun el estado actual.

### Pagina de Fernanda (fernanda.html)

**cambiarTema(tema)**  
Permite al usuario cambiar el color de fondo de la pagina entre tres opciones:
oscuro (#0d0a1a), morado (#1a0d2e) y azul (#0a0d1a).

### Pagina de Andrea (andrea.html)

**mostrarHora()**  
Muestra la hora y fecha exacta del sistema en el momento en que el usuario hace clic en el boton,
usando el objeto Date de JavaScript.

---

## Diseño Responsive

El sitio implementa los tres breakpoints obligatorios:

- **400px** — moviles pequeños: todo en una columna, navegacion en columna
- **900px** — tablets: grilla de integrantes en 2 columnas, tecnologias en 3 columnas
- **1200px** — escritorio grande: mayor padding y espaciado

---

## Uso de Inteligencia Artificial

### Herramientas utilizadas

- **Claude (Anthropic) — modelo Claude Sonnet 4** fue la herramienta principal de asistencia.

### Uso en contenido y codigo

Claude ayudo en las siguientes areas:

- Generacion de la estructura base de todos los archivos HTML del proyecto
- Escritura del CSS compartido (variables, grid, responsive, animaciones)
- Implementacion de las funciones JavaScript de cada pagina
- Redaccion de los textos de la bitacora y del README
- Resolucion de dudas sobre media queries y CSS Grid

Todo el codigo fue revisado, personalizado y completado por las integrantes del grupo.

---

## Enlace al Proyecto

[Agregar link de Vercel aqui una vez publicado]
