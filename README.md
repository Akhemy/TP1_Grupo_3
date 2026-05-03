# Grupo 3 — Trabajo Práctico Grupal 1

**Materia:** Desarrollo de Sistemas Web — Frontend  
**Instituto:** IFTS N.29  
**Año:** 2026  
**Deploy:** [Agregar link de Vercel ak]

## Descripción del proyecto

La consigna del TP1 es realizar un sitio web grupal que integra los portfolios individuales
de los cinco integrantes del Grupo 3. La portada presenta al equipo con links a cada página
individual, y el sitio incluye además una bitácora con el registro del proceso de desarrollo.
El proyecto fue construído unicamente con HTML5, CSS3 y JavaScript, sin frameworks externos.

## Integrantes

| Nombre          | GitHub                                        |
| --------------- | --------------------------------------------- |
| Gisela Croci    | [giselac89](https://github.com/giselac89)     |
| Fernanda Flores | [ferffloress](https://github.com/ferffloress) |
| Pamela Olave    | [Akhemy](https://github.com/Akhemy)           |
| Andrea Maccan   | [acmaccan](https://github.com/acmaccan)       |
| Guillermo       | [guillermohbenitez](https://github.com/guillermohbenitez)|

## Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Media Queries, Variables CSS)
- JavaScript (funciones dinámicas sin frameworks)
- Google Fonts (DM Serif Display + DM Sans)
- GitHub (control de versiones)
- Vercel (publicación en la nube)

## Estructura de archivos

```
TP1_Grupo_3/
├── index.html        <- Portada principal del grupo
├── gisela.html       <- Pagina individual de Gisela Croci 
├── fernanda.html     <- Pagina individual de Fernanda Flores (en desarrollo)
├── pamela.html       <- Pagina individual de Pamela Olave
├── andrea.html       <- Pagina individual de Andrea Maccan
├── guillermo.html    <- Pagina individual de Guillermo Benitez
├── bitacora.html     <- Bitacora del proyecto
├── css/
│   ├── styles.css    <- Estilos principales compartidos
│   ├── pamela.css    <- Estilos de la pagina de Pamela
│   ├── andrea.css    <- Estilos de la pagina de Andrea
│   ├── guillermo.css <- Estilos de la pagina de Guillermo
│   ├── gisela.css    <- Estilos de la pagina de Gisela
│   └── fernanda.css  <- Estilos de la pagina de Fernanda
├── js/
│   ├── main.js       <- JavaScript de la portada
│   ├── guillermo.js  <- JavaScript de la pagina de Guillermo
│   └── andrea.js     <- JavaScript de la pagina de Andrea
├── img/
│   ├── img Pamela/   <- Imagenes de la pagina de Pamela
│   ├── img-gisela/   <- Imagenes de la pagina de Gisela
│   ├── img-guillermo/<- Imagenes de la pagina de Guillermo
│   ├── imgs-andrea/  <- Imagenes de la pagina de Andrea
│   ├── andrea.jpg    <- Imagen de Andrea
│   └── fernanda.jpg  <- Imagen de Fernanda
└── README.md
```

## Guia de Estilos

### Paleta de Colores

| Uso                     | Codigo    |
| ----------------------- | --------- |
| Fondo principal         | `#111111` |
| Fondo medio (secciones) | `#1a1a1a` |
| Fondo tarjetas          | `#222222` |
| Acento dorado           | `#c8a96e` |
| Dorado claro (hover)    | `#e0c99a` |
| Texto principal         | `#f0f0f0` |
| Texto suave             | `#999999` |

### Tipografías (Google Fonts)

- **DM Serif Display** — títulos y encabezados
- **DM Sans** — cuerpo de texto

### Iconografía

No se utilizan librerías de íconos. Respecto a las imágenes:

- **Pamela Olave:** avatar generado a partir de una foto personal real.
- **Andrea Maccan:** caricatura generada a partir de la edición de una imagen, sólo con fines académicos.
- **Resto de integrantes:** imagenes obtenidas de internet, utilizadas con fines academicos.

## JavaScript — Funciones implementadas

### Portada (index.html)

**mostrarSaludo()**  
Al hacer clic en el botón "Conocenos", muestra un mensaje de bienvenida elegido al azar
de una lista de frases. El botón cambia su texto a "Otro saludo" para invitar a repetir la acción.

**marcarLinkActivo()**  
Se ejecuta automaticamente al cargar la página. Detecta la URL actual y resalta el link
correspondiente en la barra de navegación.

### Página de Pamela (pamela.html)

**pMaquinaDeEscribir()**  
Al cargar la página, el texto de la profesión aparece escrito caracter por caracter, simulando
una maquina de escribir. El efecto se ejecuta una sola vez y el texto queda fijo al terminar.
Un cursor parpadeante acompaña el texto durante y después de la animación.

![Efecto en proceso](img/img%20Pamela/Hero_efecto_JS.jpg)
![Efecto finalizado](img/img%20Pamela/Hero_fin_efecto_js.jpg)

**pEstrellasFugaces()**  
Al cargar la página, se genera un efecto continuo de estrellas fugaces sobre el fondo del hero,
dibujadas en un canvas con trayectoria diagonal y desvanecimiento progresivo.

**pEnviarFormulario()**  
Al completar y enviar el formulario de contacto, se muestra un mensaje de confirmación
sin recargar la página. El formulario se limpia automáticamente al enviarse.

![Formulario de contacto](img/img%20Pamela/formulario_de_contactos.jpg)

### Página de Andrea (andrea.html)
**cargarGatito()**  
Función que carga una imagen aleatoria de un gato desde la API externa (cataas.com) cuando se envía el formulario de contacto. Muestra un popup con la imagen del gatito.

**cerrarPopup()**  
Función que cierra el popup del gatito. Se ejecuta al hacer click en el botón "Cerrar" o al hacer click fuera del contenido del popup.

### Páginas individuales

Las paginas de Gisela y Fernanda estan en desarrollo.

## Diseño responsive

El sitio implementa los tres breakpoints obligatorios:

- **400px** — móviles pequeños: todo en una columna, navegación en columna
- **900px** — tablets: grilla de integrantes en 2 columnas, tecnologías en 3 columnas
- **1200px** — escritorio grande: mayor padding y espaciado

## Uso de inteligencia artificial

### Herramienta utilizada

- **Claude Sonnet 4.6 y Haiku 4.5 (Anthropic)** — asistentes principales durante el desarrollo.

### En qué ayudó

- Corrección de la estructura base de los archivos HTML
- Corrección del CSS compartido (grid y animaciones)
- Corrección y ajuste de las funciones JavaScript
- Resolución de dudas técnicas sobre CSS y maquetado

Todo el código fue revisado, corregido y personalizado por los integrantes del grupo.

## Enlace al proyecto

[Agregar link de Vercel una vez publicado]
