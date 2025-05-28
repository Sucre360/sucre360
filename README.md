# Sucre 360 – Plataforma Cultural Interactiva

Sucre 360 es un proyecto web moderno y artístico que celebra la riqueza cultural y natural del departamento de Sucre, Colombia. Este sitio está diseñado para ser interactivo, editable, y visualmente poético.

---

## 🚀 Características

- Interfaz pública con diseño artístico y animaciones 360°
- Editor protegido con usuario y contraseña
- Sistema de edición en vivo (contenido guardado en archivo JSON)
- Arquitectura modular con Node.js, Express y EJS
- Paleta de colores natural e identidad visual dibujada

---

## 🗂️ Estructura del Proyecto

```
sucre360/
├── server.js
├── package.json
├── /views
│   ├── index.ejs
│   └── editor.ejs
├── /public
│   ├── /css/styles.css
│   └── /img/*.jpg
├── /data/contenido.json
```

---

## ⚙️ Requisitos

- Node.js (v14 o superior)
- npm (Node Package Manager)

---

## 🛠️ Instalación

```bash
# Clona el repositorio o copia los archivos en una carpeta
cd sucre360

# Inicializa y descarga las dependencias
npm install

# Ejecuta el servidor local
node server.js
```

---

## 🌐 Acceso Local

- Página pública: [http://localhost:3000](http://localhost:3000)
- Modo editor: [http://localhost:3000/editor](http://localhost:3000/editor)

### 🔐 Credenciales del editor:
- **Usuario:** Gworker
- **Contraseña:** G0526

---

## 🧑‍🎨 Contenido Editable

- Título y descripción principal
- Texto poético de "¿Quiénes somos?"
- Galería de lugares destacados (nombre, descripción, imagen)

Los cambios se guardan en `data/contenido.json` y se reflejan automáticamente en la página pública.

---

## 🎨 Estética Visual

- Tipografía: Playfair Display, Pacifico, Roboto
- Paleta de colores inspirada en la tierra, mar, vegetación y cultura de Sucre
- Animaciones sutiles en imágenes e íconos con rotación en eje Z (360°)

---

## 📸 Recursos Gráficos (por agregar)

Puedes subir tus propias imágenes en `/public/img/` y referenciarlas desde `contenido.json` o el modo editor.

---

## 📝 Créditos y Reconocimiento

Este proyecto fue diseñado para exaltar el patrimonio cultural de Sucre, Colombia, a través de una experiencia digital auténtica y sensible.

---

## 📬 Contacto

Puedes personalizar esta sección con tus datos de contacto o redes sociales.

---

**Versión:** 1.0 – Plataforma desarrollada con ❤️ y enfoque cultural.
