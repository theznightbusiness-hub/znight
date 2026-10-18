# Po — Minecraft Developer

Portafolio de Minecraft con servidores, plugins, mods, bots, proyectos propios y experiencia de staff.

## Ejecutar en tu ordenador

Necesitas Node.js 22.13 o posterior y pnpm 10.

```bash
npm install -g pnpm@10
pnpm install --frozen-lockfile
pnpm dev
```

Abre http://localhost:5173 (o la dirección que aparezca en la terminal).

## Subir a GitHub

1. Descomprime este ZIP y abre la carpeta `po-portfolio` en tu terminal.
2. Crea un repositorio vacío en GitHub. No añadas README ni `.gitignore`, porque ya están incluidos.
3. Ejecuta estos comandos, sustituyendo `TU_USUARIO` y `TU_REPOSITORIO`:

```bash
git init
git add .
git commit -m "Añadir portafolio Minecraft"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

## Qué editar

- `app/page.tsx`: textos, secciones, servidores, roles y tarjetas de proyectos.
- `app/globals.css`: colores, diseño y adaptación a móvil.
- `app/layout.tsx`: título y descripción del sitio.
- `public/images/`: logos originales.
- `app/api/server-status/route.ts`: consulta del estado de SolarCraft.

La marca provisional es **Po**. Los plugins y bots quedan pendientes de contenido. zNight todavía no tiene un enlace de publicación. Las capturas y pruebas también quedan pendientes.

## Jugadores de SolarCraft

La página consulta `/api/server-status` cada minuto mientras está abierta. Esta ruta consulta `https://api.mcsrvstat.us/3/solarcraft.net`, cuyo proveedor puede almacenar la respuesta hasta 5 minutos. No necesita clave de API. Cuando el servidor figura offline o la consulta falla, muestra «Cerrado»; en caso de error, el indicador incorpora una aclaración al pasar el ratón. Los otros tres servidores están marcados como cerrados manualmente.

## Compilar y publicar

```bash
pnpm build
```

El proyecto utiliza React, TypeScript, Vinext/Vite y un servidor compatible con Cloudflare Workers. Incluye los archivos de integración del proyecto original para mantener la compilación.

**GitHub almacena el código; subirlo no publica automáticamente la web.** GitHub Pages solo aloja archivos estáticos y no ejecuta la ruta `/api/server-status`. Para conservar la consulta de jugadores, utiliza un alojamiento compatible con esta aplicación y sus rutas de servidor. Este ZIP no configura un despliegue automático desde GitHub.

El ZIP no contiene `node_modules`, resultados de compilación, historial Git, credenciales ni la identidad del sitio alojado original. Se conserva `.openai/hosting.json` con bindings vacíos porque lo usa la configuración de compilación.

## Verificación realizada

La versión de origen pasó la comprobación de TypeScript, la compilación de producción y las pruebas de respuestas online, offline, inválidas y de error del servicio de estado. La copia exportada conserva el código de la aplicación; solo se han adaptado la documentación y los metadatos de distribución. No se ha realizado revisión visual en navegador.
