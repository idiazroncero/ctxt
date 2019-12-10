## Cambios realizados para la versión 2

Si se necesitan cambios en la estructura HTML, se indica en negrita,

- Se añaden varios subtipos de `.box` en forma de modificadores BEM (`.box--menta`, etc...).
- Se modifica el espacio blanco (whitespace) dentro de cada `.box`.
- Se modifican los filetes de `.section`. Añadir o quitar los filetes es posible ahora con modificadores BEM. **Requiere cambios HTML (nuevo envoltorio `.section__title__wrapper`)**
- Se añade la clase `.fecha` para las nuevas fechas. Esto require que **el `.autor` pase a ser un `<span>`.
- Dada la reducción del tamaño de tipografía del autor, se abandona el uso de la clase `.autor--small`. No es necesario retirarla del HTML, pero no tiene ningún efecto.
- Se añaden las clases helper `.mw-` + max-width (20 = 20%, 33 = 33%, etc) para ayudar a establecer anchos máximos de imagen.
- Se añade la clase `.subtitle` para poder añadir libremente subtítulos (del mismo modo que se añaden `.body` o `.autor` sin estar ligados a ningún teaser concreto).
- Se añade la clase `.ts--reducido`, que reduce el espaciado interno entre elementos (para formatos pequeños)
- Se invierte `.ts-flex--inverse`: normal es imagen a la izquierda, invertido es imagen a la derecha. **Requiere cambios en HTML** y se hace así porque el "estándar" se ha convertido la imagen a la izquierda.
