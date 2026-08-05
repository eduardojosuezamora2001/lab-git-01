## ¿Qué hace este PR?
Agrega el formulario de inicio de sesión (login) con estructura HTML, estilos CSS y validación de campos en JavaScript.

## ¿Por qué?
Se necesitaba implementar el sistema de login para permitir que los usuarios ingresen sus datos (nombre, edad, fecha de nacimiento) de forma controlada, evitando el envío de información incompleta o inválida.

## ¿Cómo se probó?
1. Clonar la rama y abrir `index.html` en el navegador.
2. Verificar que el formulario se muestre correctamente con los estilos aplicados (CSS).
3. Intentar enviar el formulario vacío → debe mostrar alertas de validación.
4. Ingresar un nombre de menos de 2 caracteres → debe mostrar mensaje de error.
5. Ingresar una edad fuera del rango 0-120 → debe mostrar mensaje de error.
6. Seleccionar una fecha de nacimiento futura → debe mostrar mensaje de error.
7. Completar todos los campos correctamente y enviar → debe mostrar los datos ingresados y reiniciar el formulario.

## Checklist
- [ ] El código compila / corre sin errores
- [ ] Los commits siguen el estándar
- [ ] Se actualizó la documentación si aplica