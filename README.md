# Amigo Secreto

Este proyecto es una aplicación web sencilla que permite gestionar una lista de amigos, añadiéndolos desde un campo de texto y sorteando un nombre aleatorio entre ellos. El propósito principal es fortalecer las habilidades de lógica de programación mediante el uso de arrays, manipulación del DOM y eventos en JavaScript.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de cumplir con los siguientes requisitos:

Tener un navegador web moderno instalado (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).

Tener acceso a un editor de texto o IDE para visualizar y modificar el código si es necesario (por ejemplo, Visual Studio Code).

## Instalación

No se necesita una instalación especial para este proyecto, ya que es una aplicación web que se ejecuta directamente en el navegador.

Descarga o clona este repositorio en tu máquina local usando:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Luego, abre el archivo index.html en tu navegador preferido para ejecutar la aplicación.

## Cómo ejecutar el proyecto

Sigue estos pasos para usar la aplicación:

- Abre el archivo index.html en tu navegador web.
 
- Escribe un nombre en el campo de texto provisto.

- Haz clic en el botón "Agregar" para añadir el nombre a la lista de amigos.

- Observa cómo los nombres ingresados aparecen en la lista.

- Haz clic en el botón "Sortear" para seleccionar un nombre aleatorio de la lista.

## Funcionamiento del proyecto

Este proyecto utiliza las siguientes tecnologías principales:

- HTML: Para la estructura de la página.

- CSS: Para la presentación visual.

- JavaScript: Para la lógica y la interacción dinámica con la página.

## Principales funcionalidades

- Agregar nombres a la lista: Los nombres ingresados se almacenan en un array llamado amigos y se muestran en la lista.

- Evitar duplicados visuales: La lista en el DOM se limpia antes de cada actualización para evitar duplicados.

- Sorteo aleatorio: Un botón permite elegir un nombre al azar de la lista actual.

## Dependencias

No existen dependencias externas para este proyecto, ya que utiliza tecnologías web básicas.

## Posibles problemas y soluciones

- Botón "Sortear" desactivado: Si la lista está vacía, el botón de sorteo estará deshabilitado. Agrega al menos un amigo para habilitarlo.

- Ingreso de campo vacío: Si intentas agregar un nombre sin texto, aparecerá una alerta indicando que debes ingresar un nombre válido.

- Nombres duplicados: Aunque no se restringe el ingreso de nombres repetidos, puedes implementar una validación adicional para evitar duplicados en el array amigos.

## Contribuciones

Si deseas contribuir a este proyecto, puedes enviar un pull request o sugerir cambios mediante issues en el repositorio.
