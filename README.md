# ESCOVIDRIO - Landing Page

Landing page profesional para ESCOVIDRIO, empresa especializada en soluciones de vidrio y aluminio en San Bernardo, Chile.

## 🚀 Stack Tecnológico

- **React 19** - Framework UI
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconografía moderna

## 📋 Características

- ✨ Diseño Dark Luxury con efectos glassmorphism
- 🎨 Animaciones suaves al scroll
- 📱 Totalmente responsive
- 🔍 SEO optimizado con Schema.org
- 💬 Integración directa con WhatsApp (sin backend)
- ⚡ Performance optimizada

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
proyecto-escovidrio/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── WhatsAppForm.jsx
│   │   ├── Footer.jsx
│   │   └── SEO.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── ...config files
```

## 🎨 Paleta de Colores

- **Primary**: `#0084ff` (Azul Eléctrico)
- **Dark Background**: `#0f172a` (Slate 900)
- **Dark Card**: `#1e293b` (Slate 800)
- **Text Gray**: `#94a3b8`

## 📞 Información de Contacto

- **Empresa**: ESCOVIDRIO
- **Ubicación**: América 01135, San Bernardo, Chile
- **WhatsApp**: +56 9 5321 5308
- **Email**: contacto@escovidrio.cl

## 🌟 Servicios

1. Ventanas de Aluminio
2. Mamparas de Baño
3. Cierre de Terrazas
4. Vitrinas Comerciales
5. Termopaneles
6. Espejos a Medida

## 📱 Funcionalidad WhatsApp

El formulario de cotización procesa los datos localmente y redirige al usuario a WhatsApp Web/App con un mensaje pre-formateado que incluye:
- Nombre del cliente
- Servicios seleccionados (mediante chips interactivos)
- Detalles adicionales del proyecto

No requiere backend ni servicios de email externos.

## 🚀 Deployment

Este proyecto está listo para ser desplegado en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting de archivos estáticos

Simplemente ejecuta `npm run build` y sube la carpeta `dist/`.

## 📄 Licencia

© 2026 ESCOVIDRIO. Todos los derechos reservados.
