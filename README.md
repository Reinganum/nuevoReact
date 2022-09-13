# Título del proyecto:

Videodrome, eCommerce de cine. 

## Funcionalidad: 

Permite presentar los productos, categorizarlos según temáticas presentadas en la barra de navegación, realizar búsquedas y seguir un proceso de compra hasta generar la orden de pedido recogiendo los datos del usuario y tipo de envío en una base de datos externa. Está programado con media queries para hacerlo adaptable a dispositivos móbiles. 

## Dependencias:

El proyecto busca ser ligero y usar el mínimo de dependencias. Los estilos están trabajados en CSS puro, el script está programado solo con ReactJS y sus librerías asociadas: 

* React Router DOM para la navegación del sitio a través de ruteado dinámico. 
* Context para facilitar el traspaso de datos entre componentes. 
* La relación con el backend se realiza a través de Firebase, firestore. 
* El loader requiere la instalación de una librería ligera react-spinners. 
* Para cargar las localidades en el formulario se consume la API country-state-city. 

## Instalación: 

tipea $ git clone "url al repositorio de GitHub" para clonar el repositorio.

* Abre el terminal y luego tipea:
```
$ git clone https://github.com/Reinganum/nuevoReact/

```

* Entra a la nueva carpeta y tipea $ npm install. Esto instala las dependencias requeridas para correr el proyecto de React. 

```
$ npm install

```

* Luego puedes levantar el proyecto tipeando:

```
$ npm start

```
# Links a documentación:

* [información sobre react-spinners](https://www.davidhu.io/react-spinners/)
* [sobre como utilizar la API Country - state - city](https://countrystatecity.in/docs/) 

![](https://gifer.com/es/gifs/videodrome)
