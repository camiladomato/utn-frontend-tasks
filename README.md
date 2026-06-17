# UTN Tasks - Frontend 🚀

Aplicación web minimalista para la gestión y optimización de tareas diarias, desarrollada como proyecto práctico para la **Universidad Tecnológica Nacional (UTN)**. El proyecto se conecta a una API REST externa con arquitectura MVC y persistencia de datos en MongoDB.

## 🎨 Características Visuales & UX
- **Diseño Minimalista Moderno:** Interfaz limpia construida con **CSS Puro** (variables nativas), evitando librerías de terceros para garantizar un control total sobre la estructura y el rendimiento.
- **Identidad Visual:** Paleta basada en tonos violetas profundos, lavandas sutiles y tipografía geométrica de alta legibilidad.
- **Experiencia Fluida:** Operaciones CRUD (Crear, Leer, Actualizar, Borrar) gestionadas de forma dinámica mediante ventanas modales interactivas y transiciones suaves.

## 🛠️ Tecnologías Utilizadas

- **React 19** – Librería principal para la construcción de la interfaz basada en componentes.
- **Vite 5** – Entorno de desarrollo rápido y empaquetador de módulos.
- **React Router DOM 7** – Gestión de enrutamiento del lado del cliente (SPA).
- **Axios** – Cliente HTTP para la comunicación asíncrona con el backend.
- **CSS Nativo** – Estilos modulares organizados de forma centralizada.

## 📂 Estructura del Proyecto

```text
src/
├── components/   # Componentes globales e independientes reutilizables
├── context/      # Gestión del estado global (Autenticación y Seguridad)
├── pages/        # Pantallas completas de la aplicación (Login, Register, Dashboard)
├── services/     # Configuración de Axios y peticiones a la API REST
└── styles/       # Hojas de estilo globales, variables de diseño y reseteos```

⚙️ Instalación y Configuración Local
Para levantar este frontend en tu entorno local, seguí estos pasos:

1. Clonar el repositorio
Bash
git clone [https://github.com/camiladomato/utn-frontend-tasks.git](https://github.com/camiladomato/utn-frontend-tasks.git)
cd utn-frontend-tasks
2. Instalar dependencias
Dado que el proyecto utiliza una configuración de versiones optimizada para Node v20, se recomienda instalar con el siguiente flag para evitar conflictos estrictos de dependencias cruzadas:

Bash
npm install --legacy-peer-deps
3. Configurar variables de entorno (Próximamente)
El servicio de Axios (src/services/api.js) apunta a la API desplegada en producción. Para desarrollo local se puede modificar la URL base.

4. Iniciar el servidor de desarrollo
Bash
npm run dev
La aplicación estará disponible en http://localhost:5173/.

Desarrollado con ❤️ por Camila Domato.