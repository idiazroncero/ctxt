## CHANGELOG: Historial de cambios realizados para la versión 2

Si se necesitan cambios en la estructura HTML, se indica en negrita,

# Ronda 1: portada y login

- Se añaden varios subtipos de `.box` en forma de modificadores BEM (`.box--menta`, etc...).
- Se añade un modificador `box--2xpadding` para duplicar el padding interno.
- Se modifica el espacio blanco (whitespace) dentro de cada `.box`.
- Se modifican los filetes de `.section`. Añadir o quitar los filetes es posible ahora con modificadores BEM (`.section--border-none` y otros). **Requiere cambios HTML (nuevo envoltorio `.section__title__wrapper`)**
- Se añade la clase `.fecha` para las nuevas fechas que aparecen al lado del autor.
- Dada la reducción del tamaño de tipografía del autor, se abandona el uso de la clase `.autor--small`. No es necesario retirarla del HTML, pero no tiene ningún efecto.
- Se añaden las clases helper `.mw-` + max-width (20 = 20%, 33 = 33%, etc) para ayudar a establecer anchos máximos de imagen.
- Se añade la clase `.subtitle` para poder añadir libremente subtítulos (del mismo modo que se añaden `.body` o `.autor` sin estar ligados a ningún teaser concreto).
- Se añade la clase `.ts--reducido`, que reduce el espaciado interno entre elementos (para formatos pequeños) de todos los `.ts`, es decir, es capaz de actuar contextualmente al tipo de teaser.
- Se invierte `.ts-flex--inverse`: normal es imagen a la izquierda, invertido es imagen a la derecha. **Requiere cambios en HTML** y se hace así porque el "estándar" se ha convertido la imagen a la izquierda.
- `.ts-vertical` se alinea ahora por defecto a la izquierda, no al centro. Las clases `.tc` y `.tr` pueden modificar esto. **Puede requerir cambios en HTML**
- Añade la clase modificadora `.col--expanded` que permite expandir (espaciar) los contenidos dentro de una columna.
- Elimina el gutter (margen interno) por defecto entre los dos `.col` dentro de una `.col2`. Añade la clase modificadora `.col2--gutter`, que recupera este espaciado y la clase `.col2--gutter-left` que añade el espaciado pero en la columna derecha. **Puede requerir cambios en HTML**
- Añade las clases `.col--gutter-l` y `.col--gutter-r` que permiten añadir manualmente espaciado vertical a las columnas.
- Añade la clase genérica `.h100` que ayuda a que un elemento tome el 100% de la altura de su contenedor.
- Añade la clase `.img-circle` para forzar el redondeado de imagenes cuadradas.
- Añade la clase `.body--minimal` para tamaños de body enanos (util en teasers muy pequeños)
- Creado un tipo especial de componente, `.mensaje`, para mensajes como el del top

# Ronda 2: artículo y sección

- Se añade el bloque `.img-quote` para el nuevo caso de cita con imagen.
- Se añade la clase modificadora `.box--seccion` que, aplicado a un `.box`, produce los cambios de estilo necesarios en secciones en elementos como las `.section__category`, entre otros.
- Se añade el `.section__decorator` para añadir una cenefa triangular a `.section__category`. **Requiere cambios en HTML**
- Añade elemento `.nav-lateral` para un menú que se despliega desde la derecha en seccion.
- Añade elemento `.scroll-list` para lista scrollable de items en secciones
- Añade elemento `.vineta-header` para el encabezado de artículos de tipo viñeta.
- Añade modificador `.articulo--vineta` para los pequeños cambios necesarios en elementos de artículo.
- Añade clase `.page-autor`para los pequeños cambios necesarios en la página de artículo.
