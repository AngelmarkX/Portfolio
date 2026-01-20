# Documentación del Portafolio - Miguel Angel

## Índice
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Sistema de Diseño](#sistema-de-diseño)
3. [Componentes Principales](#componentes-principales)
4. [Decisiones Técnicas](#decisiones-técnicas)

---

## Estructura del Proyecto

\`\`\`
portfolio/
├── app/
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout global
│   └── globals.css        # Estilos globales y tema
├── components/
│   ├── hero-section.tsx   # Sección de presentación
│   ├── projects-section.tsx  # Galería de proyectos
│   ├── skills-section.tsx    # Habilidades técnicas
│   └── contact-section.tsx   # Información de contacto
└── components/ui/         # Componentes de shadcn/ui
\`\`\`

### Arquitectura
El proyecto está construido con **Next.js 16** usando el **App Router**. Cada sección del portafolio es un componente independiente que se importa en la página principal, siguiendo el principio de **separación de responsabilidades**.

---

## Sistema de Diseño

### Paleta de Colores

El diseño utiliza una paleta oscura y sofisticada con **4 colores principales**:

\`\`\`css
/* Color 1: Azul vibrante para elementos interactivos */
--color-primary: 59 130 246  /* RGB(59, 130, 246) - Azul #3B82F6 */

/* Color 2: Verde esmeralda para acentos */
--color-accent: 16 185 129   /* RGB(16, 185, 129) - Verde #10B981 */

/* Color 3: Gris oscuro azulado para fondos */
--color-background: 10 15 25  /* RGB(10, 15, 25) - Casi negro */
--color-card: 15 20 30        /* RGB(15, 20, 30) - Gris muy oscuro */

/* Color 4: Tonos de blanco/gris para texto */
--color-foreground: 225 230 240  /* RGB(225, 230, 240) - Blanco azulado */
--color-muted-foreground: 148 163 184  /* RGB(148, 163, 184) - Gris claro */
\`\`\`

#### ¿Por qué estos colores?

1. **Azul primario (#3B82F6)**: Transmite profesionalismo, confianza y tecnología. Se usa en:
   - Botones principales
   - Enlaces activos
   - Títulos destacados
   - Bordes hover

2. **Verde acento (#10B981)**: Representa crecimiento, innovación y éxito. Se usa en:
   - Iconos de tecnología
   - Badges de habilidades especiales
   - Indicadores de estado activo

3. **Fondo oscuro**: Reduce fatiga visual, da aspecto moderno y profesional, hace que los colores vibrantes destaquen más.

4. **Texto claro**: Alto contraste con el fondo oscuro para excelente legibilidad.

### Tipografía

**2 familias de fuentes** (siguiendo las mejores prácticas):

\`\`\`css
--font-sans: 'Geist', 'Geist Fallback'  /* Fuente principal para textos */
--font-mono: 'Geist Mono', 'Geist Mono Fallback'  /* Fuente para código */
\`\`\`

- **Geist Sans**: Fuente limpia y moderna para títulos y párrafos
- **Geist Mono**: Fuente monoespaciada para el subtítulo "Full-Stack Developer" (le da un toque técnico/código)

#### Jerarquía Tipográfica

\`\`\`tsx
// Título principal (Hero)
text-5xl md:text-6xl lg:text-7xl  // 48px → 60px → 72px

// Subtítulo profesión
text-lg md:text-xl  // 18px → 20px

// Descripción
text-lg md:text-xl leading-relaxed  // 18px → 20px con espaciado

// Títulos de sección
text-4xl md:text-5xl  // 36px → 48px

// Títulos de tarjetas
text-xl  // 20px
\`\`\`

**leading-relaxed** (line-height: 1.625) se usa para mejorar la legibilidad del texto de párrafo.

### Layout y Espaciado

#### Sistema de Grid Responsivo

\`\`\`tsx
// Flexbox para la mayoría de layouts (prioridad 1)
<div className="flex flex-col items-start justify-center">

// Grid solo para galería de proyectos (prioridad 2)
<div className="grid gap-6 md:grid-cols-2">
\`\`\`

#### Espaciado Consistente

\`\`\`tsx
// Padding de secciones
px-6 py-20 md:px-20 lg:px-32

// Mobile: 24px horizontal, 80px vertical
// Tablet: 80px horizontal, 80px vertical
// Desktop: 128px horizontal, 80px vertical

// Gaps entre elementos
gap-4  // 16px para botones
gap-6  // 24px para tarjetas y elementos sociales
mb-12  // 48px para separar subsecciones
\`\`\`

---

## Componentes Principales

### 1. Hero Section (Presentación)

**Propósito**: Primera impresión, presentar quién eres y qué haces.

```tsx
<section className="flex min-h-screen flex-col items-start justify-center">
  <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[300px_1fr]">
```

**Decisiones clave**:
- `min-h-screen`: Ocupa toda la altura de la pantalla (efecto "above the fold")
- `grid lg:grid-cols-[300px_1fr]`: Layout de 2 columnas - foto (300px) + contenido (resto del espacio)
- Responsive: En móvil la foto va arriba, en desktop a la izquierda

**Espacio para Foto de Perfil**:

```tsx
<div className="relative mx-auto lg:mx-0">
  <div className="relative size-64 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/10 lg:size-72">
    {/* Placeholder for profile photo - Replace src with your image path */}
    <Image
      src="/placeholder.svg?height=300&width=300"  // <-- CAMBIA ESTA RUTA
      alt="Miguel Angel - Profile Photo"
      fill
      className="object-cover"
      priority
    />
  </div>
  {/* Decorative glow effect */}
  <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
</div>
```

**Cómo agregar tu foto**:
1. Coloca tu imagen en la carpeta `/public/images/` (ej: `/public/images/mi-foto.jpg`)
2. Cambia el `src` de: `"/placeholder.svg?height=300&width=300"` a: `"/images/mi-foto.jpg"`
3. Tamaño recomendado: 300x300px o mayor (cuadrada para mejor resultado)

**Diseño del contenedor de foto**:
- `size-64 lg:size-72`: 256px en móvil, 288px en desktop
- `rounded-2xl`: Bordes redondeados grandes
- `border-2 border-primary/20`: Borde azul sutil
- Efecto de brillo degradado detrás con `blur-xl`

**Elementos de contenido**:

```tsx
// 1. Nombre grande y bold
<h1 className="text-5xl font-bold">Miguel Angel</h1>

// 2. Profesión con fuente mono (efecto "código")
<p className="font-mono text-primary">Full-Stack Developer</p>

// 3. Descripción con text-pretty (optimiza saltos de línea)
<p className="text-pretty text-muted-foreground">
  Passionate coder from Colombia...
</p>

// 4. Call-to-action buttons
<Button asChild size="lg">
  <a href="#projects">View Projects</a>
</Button>

// 5. Iconos sociales con hover effect
<a className="transition-colors hover:text-foreground">
  <Github className="size-6" />
</a>
```

### 2. Projects Section (Galería de Proyectos)

**Propósito**: Mostrar tu trabajo de forma visual y organizada.

\`\`\`tsx
<div className="grid gap-6 md:grid-cols-2">
\`\`\`

**Diseño de Card**:
- **Card Component**: Contenedor con borde y fondo
- **Hover Effect**: `hover:border-primary/50` (borde azul semi-transparente al pasar mouse)
- **Header**: Título + iconos de GitHub y demo
- **Description**: Texto descriptivo del proyecto
- **Badges**: Tecnologías usadas en chips coloridos

\`\`\`tsx
<Card className="group transition-all hover:border-primary/50">
  <CardHeader>
    <CardTitle>AppDonaciones</CardTitle>
    <CardDescription>Proyecto de grado...</CardDescription>
  </CardHeader>
  <CardContent>
    <Badge variant="secondary">JavaScript</Badge>
    <Badge variant="secondary">React</Badge>
  </CardContent>
</Card>
\`\`\`

**Array de proyectos**:
\`\`\`tsx
const projects = [
  {
    title: 'AppDonaciones',
    description: '...',
    tech: ['JavaScript', 'Node.js', 'React'],
    github: 'https://github.com/...',
    stars: 1
  },
  // ...más proyectos
]
\`\`\`

Esto hace el código **escalable** - solo agregas un objeto nuevo al array para añadir proyectos.

### 3. Skills Section (Habilidades)

**Propósito**: Demostrar tus competencias técnicas organizadas.

**Estructura**:
\`\`\`tsx
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {/* Frontend, Backend, Databases */}
</div>
\`\`\`

**Categorías**:
- Frontend: React, HTML, CSS, JavaScript
- Backend: Node.js, PHP, Laravel, Java
- Databases: MySQL

**Diseño visual**:
- Iconos de lucide-react para cada categoría
- Cards con fondo `bg-card`
- Badges para cada tecnología
- Grid responsivo: 1 columna móvil → 2 tablet → 3 desktop

### 4. Contact Section (Contacto)

**Propósito**: Facilitar que te contacten.

\`\`\`tsx
<Card className="max-w-2xl border-primary/20">
  <CardHeader>
    <CardTitle>Contáctame</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Email, GitHub, LinkedIn con iconos */}
  </CardContent>
</Card>
\`\`\`

**Links con iconos**:
\`\`\`tsx
<div className="flex items-center gap-3">
  <Mail className="size-5 text-primary" />
  <a href="mailto:...">miguel.zuluaga@ucp.edu.co</a>
</div>
\`\`\`

---

## Decisiones Técnicas

### 1. Tailwind CSS v4 con @theme inline

En lugar de usar `tailwind.config.js`, usamos `@theme inline` en `globals.css`:

\`\`\`css
@theme inline {
  --color-primary: 59 130 246;
  --font-sans: 'Geist', 'Geist Fallback';
}
\`\`\`

**Ventajas**:
- Todo el tema en un solo archivo
- Valores en formato RGB (59 130 246) para poder usar opacidades: `bg-primary/50`
- Tokens semánticos: `bg-background`, `text-foreground`

### 2. Componentes shadcn/ui

Usamos componentes pre-construidos de shadcn/ui:
- **Button**: Botones con variantes (default, outline)
- **Card**: Contenedores con CardHeader, CardTitle, CardDescription, CardContent
- **Badge**: Chips para tecnologías

**Ventaja**: Componentes accesibles, bien diseñados y personalizables.

### 3. Iconos de lucide-react

\`\`\`tsx
import { Github, Linkedin, Mail, Code2, Database, Layout } from 'lucide-react'
\`\`\`

- Librería ligera de iconos
- SVGs optimizados
- Fácil cambiar tamaño: `className="size-6"`

### 4. Responsive Design Mobile-First

Todos los estilos empiezan en mobile y se expanden:

\`\`\`tsx
// Mobile primero (sin prefijo)
text-5xl px-6

// Tablet (md:)
md:text-6xl md:px-20

// Desktop (lg:)
lg:text-7xl lg:px-32
\`\`\`

### 5. Accesibilidad

\`\`\`tsx
// Screen reader text para iconos
<span className="sr-only">GitHub</span>

// Links semánticos
<a href="#projects" target="_blank" rel="noopener noreferrer">

// Alt text implícito en iconos con aria labels
\`\`\`

### 6. Optimización de Fuentes

\`\`\`tsx
import { Geist, Geist_Mono } from 'next/font/google'

const _geistSans = Geist({ subsets: ['latin'] })
\`\`\`

Next.js optimiza automáticamente las fuentes de Google para rendimiento.

---

## Cómo se Logró Este Estilo

### Filosofía de Diseño

1. **Minimalismo sofisticado**: Sin elementos decorativos innecesarios, solo contenido útil
2. **Contraste alto**: Fondo oscuro + texto claro = legibilidad perfecta
3. **Espaciado generoso**: Mucho espacio en blanco (o negro) para respirar
4. **Tipografía clara**: Jerarquía visual obvia con tamaños bien diferenciados
5. **Color con propósito**: Azul para acciones, verde para destacar, gris para contenido secundario

### Técnicas Aplicadas

**1. Efectos Hover Sutiles**
\`\`\`tsx
hover:border-primary/50  // Borde azul semi-transparente
hover:text-foreground    // Texto más brillante
transition-colors        // Animación suave
\`\`\`

**2. Text Balance**
\`\`\`tsx
text-pretty  // Optimiza saltos de línea en títulos
leading-relaxed  // Espaciado de línea cómodo
\`\`\`

**3. Responsive Grid**
\`\`\`tsx
grid md:grid-cols-2 lg:grid-cols-3  // Adapta columnas según pantalla
\`\`\`

**4. Semántica HTML**
\`\`\`tsx
<section>  // Secciones lógicas
<main>     // Contenido principal
<a href="#projects">  // Navegación interna
\`\`\`

---

## Resultado Final

Un portafolio **moderno, profesional y minimalista** que:
- Carga rápido (Next.js optimizado)
- Se ve bien en todos los dispositivos (responsive)
- Es accesible (ARIA labels, contraste, semántica)
- Refleja profesionalismo técnico (fuentes, colores, estructura)
- Es fácil de mantener (componentes modulares)
- Es escalable (solo agregar datos al array de proyectos)

El estilo oscuro con acentos azul y verde proyecta una imagen de **desarrollador moderno y técnicamente competente**.

---

## Despliegue en GitHub Pages

### Configuración

El proyecto está configurado para desplegarse en **GitHub Pages** con las siguientes modificaciones:

#### 1. next.config.mjs

```javascript
const nextConfig = {
  output: 'export',  // Genera archivos estáticos en /out
  images: {
    unoptimized: true,  // Necesario para exportación estática
  },
  // Cambia 'portfolio' por el nombre de tu repositorio
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
}
```

**Opciones de `basePath`**:
- Si tu repo es `github.com/AngelmarkX/portfolio` → `basePath: '/portfolio'`
- Si tu repo es `github.com/AngelmarkX/AngelmarkX.github.io` → `basePath: ''` (vacío)
- Si usas dominio personalizado → `basePath: ''` (vacío)

#### 2. GitHub Actions Workflow

Se creó el archivo `.github/workflows/deploy.yml` que automatiza el despliegue:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']  # Se ejecuta al hacer push a main

jobs:
  build:
    # Instala dependencias, ejecuta build, sube artefactos
    
  deploy:
    # Despliega a GitHub Pages
```

### Pasos para Desplegar

1. **Crea un repositorio en GitHub** (ej: `portfolio`)

2. **Sube tu código**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/AngelmarkX/portfolio.git
   git push -u origin main
   ```

3. **Configura GitHub Pages**:
   - Ve a tu repositorio → Settings → Pages
   - En "Source", selecciona **GitHub Actions**

4. **Espera el despliegue**:
   - Ve a la pestaña "Actions" para ver el progreso
   - Una vez completado, tu sitio estará en: `https://angelmarkx.github.io/portfolio/`

### Importante

- **Cambia el `basePath`** en `next.config.mjs` si tu repositorio tiene otro nombre
- El workflow se ejecuta automáticamente cada vez que hagas push a `main`
- Los archivos estáticos se generan en la carpeta `/out`
