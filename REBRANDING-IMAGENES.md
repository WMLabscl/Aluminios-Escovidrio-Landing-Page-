# Guía de Actualización de Imágenes - Punto Glass

## ✅ Cambios Completados

Se ha realizado el rebranding completo de ESCOVIDRIO a **Punto Glass**. A continuación, se detallan las actualizaciones necesarias para las imágenes.

---

## 📸 Imágenes que Debes Reemplazar

### 1. **Logo Principal**
- **Ruta actual:** `/public/Imagenes/logo escovidrio solo ventana.webp`
- **Nueva ruta:** `/public/Imagenes/logo-punto-glass.webp`
- **Componentes afectados:** 
  - `Navbar.jsx`
  - `Footer.jsx`
- **Acción:** Sube el logo de Punto Glass con el nombre `logo-punto-glass.webp`

---

### 2. **Imagen Hero (Fondo Principal)**
- **Ruta actual:** `/public/Imagenes/Proceso.webp`
- **Sugerencia:** Reemplazar con una foto representativa de los trabajos de Punto Glass
- **Componente afectado:** `Hero.jsx`
- **Acción:** 
  - Opción 1: Reemplazar el archivo existente manteniendo el nombre `Proceso.webp`
  - Opción 2: Subir nueva imagen y actualizar la ruta en `Hero.jsx` línea 23

---

### 3. **Imagen About (Sección Nosotros)**
- **Ruta actual:** `/public/Imagenes/Cierre de negocio.webp`
- **Nueva ruta:** `/public/Imagenes/punto-glass-showcase.webp`
- **Componente afectado:** `About.jsx`
- **Acción:** Sube una foto de showcase/portafolio de Punto Glass con el nombre `punto-glass-showcase.webp`

---

## 🎨 Cambios de Diseño Aplicados

### Paleta de Colores Actualizada
```javascript
colors: {
  primary: '#10b981',        // Verde esmeralda moderno
  'light-bg': '#f8fafc',     // Fondo claro suave
  'light-card': '#f1f5f9',   // Tarjetas claras
  'text-dark': '#334155',    // Texto oscuro
  'text-gray': '#64748b',    // Texto secundario
}
```

---

## 📝 Información de Contacto Actualizada

### Datos Actualizados
- **Teléfono:** +56 9 1234 5678 *(placeholder - actualizar con número real)*
- **Email:** contacto@puntoglass.cl *(placeholder - actualizar con email real)*
- **Dirección:** San Bernardo, Región Metropolitana, Chile *(actualizar con dirección específica si es necesario)*
- **WhatsApp:** +56 9 1234 5678 *(actualizar con número real)*

### Archivos donde aparece la info de contacto:
- `Hero.jsx` - Botón "Llamar Ahora"
- `Footer.jsx` - Sección de contacto y botón WhatsApp flotante
- `SEO.jsx` - Datos estructurados para Google
- `LegalModals.jsx` - Términos y Política de Privacidad

---

## 🔄 Próximos Pasos

### 1. **Actualizar Imágenes**
```bash
# Navega a la carpeta de imágenes
cd public/Imagenes

# Sube las nuevas imágenes:
# - logo-punto-glass.webp (logo principal)
# - punto-glass-showcase.webp (imagen About)
# - Proceso.webp (reemplazar con foto hero de Punto Glass)
```

### 2. **Actualizar Datos de Contacto Reales**
Busca y reemplaza los siguientes placeholders:
- **+56 9 1234 5678** → Número real de Punto Glass
- **contacto@puntoglass.cl** → Email real de Punto Glass
- Actualizar dirección específica si es necesaria

### 3. **Actualizar URLs de Redes Sociales**
En `SEO.jsx` (líneas 40-41), actualiza:
```javascript
"sameAs": [
  "https://www.facebook.com/puntoglass",  // Actualizar con URL real
  "https://www.instagram.com/puntoglass"  // Actualizar con URL real
]
```

---

## 🚀 Cómo Verificar los Cambios

```bash
# 1. Instalar dependencias (si no lo has hecho)
npm install

# 2. Ejecutar el servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

---

## ✨ Cambios Principales Realizados

### Archivos Modificados:
1. ✅ `tailwind.config.js` - Nueva paleta de colores
2. ✅ `index.html` - Meta tags y título actualizados
3. ✅ `src/components/Hero.jsx` - Eslogan y contacto
4. ✅ `src/components/Footer.jsx` - Info de contacto y branding
5. ✅ `src/components/Navbar.jsx` - Logo y nombre
6. ✅ `src/components/About.jsx` - Texto y referencias
7. ✅ `src/components/SEO.jsx` - Datos estructurados completos
8. ✅ `src/components/WhatsAppForm.jsx` - Mensaje de WhatsApp
9. ✅ `src/components/LegalModals.jsx` - Términos y Privacidad

### Elementos Mantenidos:
- ✅ Estructura completa de Framer Motion
- ✅ Todas las animaciones
- ✅ Sistema de grid y layout responsive
- ✅ Funcionalidad de formularios
- ✅ Navegación suave
- ✅ Componentes modulares

---

## 📞 Soporte

Si tienes dudas sobre el rebranding o necesitas ajustes adicionales, no dudes en consultar.

**Fecha de Rebranding:** Febrero 2026
**Versión:** 2.0 - Punto Glass
