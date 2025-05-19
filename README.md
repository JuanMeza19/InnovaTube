# 📺 Innova Tube

**Innova Tube** es una aplicación web moderna desarrollada con Angular 19. Su propósito es gestionar usuarios y contenido en video, permitiendo registros, autenticación, verificación mediante ReCaptcha y visualización de videos. Todo está estilizado con Tailwind CSS para una experiencia de usuario rápida y responsive.

---

## 🚀 Tecnologías usadas

* **[Angular 19](https://angular.io/)** – Framework principal de frontend
* **[Supabase](https://supabase.com/)** – Backend como servicio para autenticación y base de datos
* **[Tailwind CSS 4](https://tailwindcss.com/)** – Utilidades CSS modernas y configurables
* **[ngx-captcha](https://www.npmjs.com/package/ngx-captcha)** – Captcha de Google para verificación
* **RxJS** – Programación reactiva
* **TypeScript** – Tipado estricto y productivo

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── auth/         # Componentes de login, registro y autenticación
│   ├── core/         # Servicios base como AuthService (manejo de sesión Supabase)
│   ├── shared/       # Componentes reutilizables, utilidades y diseño común
│   ├── videos/       # Funcionalidad para gestión y visualización de videos
├── index.html        # Entrada principal del proyecto
├── styles.css        # Estilos base con Tailwind CSS
└── ...
```

---

## 🔧 Instalación y uso

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/innova-tube.git
cd innova-tube
```

### 2. Instala las dependencias

```bash
npm install
```

> 🛡️ Asegúrate de que la tabla **auth.users** en Supabase tenga habilitado el proveedor de correo/contraseña y los settings de autenticación estén activos.

### 3. Ejecuta el proyecto

```bash
npm start
```

La app estará corriendo en:
👉 `http://localhost:4200`

---

## ✅ Funcionalidades principales

* Registro de usuarios con correo y contraseña
* Inicio de sesión persistente con Supabase
* Cierre de sesión
* Protección de rutas con guardas (CanActivate)
* Validación con Google ReCaptcha
* Visualización de contenido en video
* Componentes y estilos adaptativos con Tailwind CSS

---

## 🧪 Scripts disponibles

| Comando         | Descripción                       |
| --------------- | --------------------------------- |
| `npm start`     | Ejecuta el servidor de desarrollo |
| `npm run build` | Compila la app para producción    |
| `npm run watch` | Compila y observa cambios         |
| `npm test`      | Ejecuta pruebas unitarias         |

---

## 🌐 Despliegue

Puedes desplegar este proyecto fácilmente en:

* **Firebase Hosting**
* **Vercel**
* **Netlify**
* **Render**

Solo asegúrate de compilar la app antes de desplegar:

```bash
npm run build
```

Y subir el contenido de la carpeta `/dist`.

---

## 📸 Capturas (opcional)

*Agrega aquí screenshots de:*

* Pantalla de login
* Registro
* Pantalla principal de videos
* Flujo de validación con ReCaptcha

---

# Regitrar usuario ejemplo
correo: userName@test.com
password: password

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
Consulta el archivo `LICENSE` para más información.

---

## ✨ Autor

**Juan Meza**
GitHub: [@JuanMeza19](https://github.com/JuanMeza19)

---

> Hecho con ❤️ usando Angular, Supabase y Tailwind CSS.
