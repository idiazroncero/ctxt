# Front-end Ctxt.es 

## Qué es esto

El siguiente repositorio contiene los archivos fuente (source) del front-end de la revista ctxt.es, elaborados según indicaciones del diseñador gráfico y preparados como HTML estático, CSS y JS de cara al desarrollador back-end. 

Este repositorio incluye tanto el resultado final preparado como un sitio estático (carpeta `dist`) como los archivos originales (parciales `.njk` y `.scss`), de modo que cualquier desarrollador pueda operar e intervenir a nivel tanto global como modular.

## Cómo instalar el entorno de desarrollo.

Si se quiere acceder simplemente al HTML, CSS y JS compilado, no hace falta instalar ningún entorno de desarrollo. Basta usar la carpeta `/dist` que incluye el resultado final sin minificar.

Si se quiere instalar el entorno de desarrollo para compilar su propio HTML/CSS o introducir modificaciones, tenga en cuenta que las siguientes tecnologías son necesarias:

- Node.js, versión 10 (especificado en archivo `.nvmrc` para su uso con Node Version Manager). Opcionalmente, `yarn` como sustituto de `npm`.
- `gulp.js` para el automatizado de tareas.

Para instalar el entorno:

- Instale Node.js 10 (recomendamos usar NVM y ejecutar `nvm use`)
- Ejecute `npm install` o `yarn install` para instalar todas las dependencias. `npm` viene incluydo con node.js, yarn (más rápido) ha de ser instalado manualmente.
- Utilice los siguientes scripts de npm para ejecutar las tareas deseadas:


### NPM Scripts

Los siguiente scripts ejecutan las tareas más habituales.

Tenga en cuanta que estos scripts pueden ser ejecutados con `npx` (includo con node.js y npm) o usando `yarn`, que debe de ser instalado manualmente en su equipo.

#### Generales

- `yarn/npx build` - Compila CSS, HTML y JS en la carpeta `/dist`
- `yarn/npx serve` - Lanza un servidor de desarrollo en `localhost:3000` usando BrowserSync. El servidor se recarga automáticamente al cambiar cualquier archivo `.njk`o `.scss` en `src`
- `yarn/npx watch` - Observa cambios en archivos `.njk`o `.scss` y compila automáticamente

#### CSS

- `yarn/npx css:watch` - Observa cambios en `src/scss`
- `yarn/npx css:build` - Compila `src/scss/style.scss` a `dist/style.css`

#### HTML

- `yarn/npx html:watch` - Observa cambios en `src/html`
- `yarn/npx html:build` - Compila `src/html/pages` a `dist`