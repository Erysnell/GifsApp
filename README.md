# 🎬 GIFs App

Una aplicación web para explorar GIFs, construida con Angular, Tailwind y la API de Giphy.

## ✨ Características

- 🔍 **Búsqueda en tiempo real** de GIFs
- 🧭 **Historial de busqueda**
- 🎯 **Interfaz responsive** y moderna
- 📱 **Compatible con móviles**


## 🛠️ Tecnologías Utilizadas

- **Angular** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Giphy API** - Fuente de GIFs
- **HTML5/Tailwind CSS** - Estructura y estilos

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta en [Giphy Developers](https://developers.giphy.com/)

### Pasos para instalar

1. **Clonar el repositorio**
``` bash
git clone https://github.com/Erysnell/GifsApp.git
cd GifsApp
```
2. **Instalar dependencias**
``` bash
npm install
```
3. **Obtener API Key**
- Regístrate en Giphy Developers
- Crea una nueva App
- Copia tu API Key
4. **Inserta tu API KEY** en el archivo src/environments/environment.ts
``` typescript
 export const environment = {
       production: false,
       giphyApiKey: 'TU_API_KEY_REAL_AQUI'
     };
```

## 🏗️ Estructura del Proyecto
```text
src/
├── app/
│   └── gif/
│       ├── components/    # Componentes reutilizables de GIFs
│       ├── interfaces/    # Interfaces TypeScript
│       ├── mapper/        # Mappers y transformaciones de datos
│       ├── pages/         # Páginas principales
│       └── services/      # Servicios (Giphy API)
└── environments/         # Configuraciones por entorno
```

## 🤝 Contribuir
Las contribuciones son bienvenidas. Para contribuir:
1. Haz fork del proyecto
2. Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
3. Commit tus cambios (git commit -m 'Add some AmazingFeature')
4. Push a la rama (git push origin feature/AmazingFeature)
5. Abre un Pull Request
