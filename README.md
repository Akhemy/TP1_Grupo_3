# Grupo 3 — Trabajo Practico Grupal 1

**Materia:** Desarrollo de Sistemas Web — Frontend  
**Instituto:** IFTS N.29  
**Año:** 2026  
**Deploy:** [Agregar link de Vercel ak]

## Descripcion del Proyecto

La consigna del TP1 es realizar un sitio web grupal que integra los portfolios individuales
de las cuatro integrantes del Grupo 3. La portada presenta al equipo con links a cada pagina
individual, y el sitio incluye ademas una bitacora con el registro del proceso de desarrollo.
El proyecto fue construido unicamente con HTML5, CSS3 y JavaScript, sin frameworks externos.

## Integrantes

| Nombre | GitHub |
|--------|--------|
| Gisela Croci | [giselac89](https://github.com/giselac89) |
| Fernanda Flores | [ferffloress](https://github.com/ferffloress) |
| Pamela Olave | [Akhemy](https://github.com/Akhemy) |
| Andrea Maccan | [acmaccan](https://github.com/acmaccan) |

## Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Media Queries, Variables CSS)
- JavaScript (funciones dinamicas sin frameworks)
- Google Fonts (DM Serif Display + DM Sans)
- GitHub (control de versiones)
- Vercel (publicacion en la nube)

## Estructura de Archivos

```
TP1_Grupo_3/
├── index.html        <- Portada principal del grupo
├── gisela.html       <- Pagina individual de Gisela Croci (en desarrollo)
├── fernanda.html     <- Pagina individual de Fernanda Flores (en desarrollo)
├── pamela.html       <- Pagina individual de Pamela Olave
├── andrea.html       <- Pagina individual de Andrea Maccan (en desarrollo)
├── bitacora.html     <- Bitacora del proyecto
├── css/
│   ├── styles.css    <- Estilos principales compartidos
│   └── pamela.css    <- Estilos de la pagina de Pamela
├── js/
│   └── main.js       <- JavaScript de a portada
├── img/
│   └── img Pamela/   <- Imagenes de la pagina de Pamela
└── README.md
```

## Guia de Estilos

### Paleta de Colores

| Uso | Codigo |
|-----|--------|
| Fondo principal | `#111111` |
| Fondo medio (secciones) | `#1a1a1a` |
| Fondo tarjetas | `#222222` |
| Acento dorado | `#c8a96e` |
| Dorado claro (hover) | `#e0c99a` |
| Texto principal | `#f0f0f0` |
| Texto suave | `#999999` |

### Tipografias (Google Fonts)

- **DM Serif Display** — titulos y encabezados
- **DM Sans** — cuerpo de texto

## JavaScript — Funciones Implementadas

### Portada (index.html)

**mostrarSaludo()**  
Al hacer clic en el boton "Conocenos", muestra un mensaje de bienvenida elegido al azar
de una lista de frases. El boton cambia su texto a "Otro saludo" para invitar a repetir la accion.

**marcarLinkActivo()**  
Se ejecuta automaticamente al cargar la pagina. Detecta la URL actual y resalta el link
correspondiente en la barra de navegacion.

### Paginas individuales

Las paginas de Gisela, Fernanda y Andrea estan basias

## Diseño Responsive

El sitio implementa los tres breakpoints obligatorios:

- **400px** — moviles pequeños: todo en una columna, navegacion en columna
- **900px** — tablets: grilla de integrantes en 2 columnas, tecnologias en 3 columnas
- **1200px** — escritorio grande: mayor padding y espaciado

## Uso de Inteligencia Artificial

### Herramienta utilizada

- **Claude Sonnet 4.6 (Anthropic)** — asistente principal durante el desarrollo.

### En que ayudo

- Correccion de la estructura base de los archivos HTML
- Correccion del CSS compartido (grid y animaciones)
- Correccion y ajuste de las funciones JavaScript
- Resolucion de dudas tecnicas sobre CSS y maquetado

Todo el codigo fue revisado, corregido y personalizado por las integrantes del grupo.

## Enlace al Proyecto

[Agregar link de Vercel una vez publicado]
