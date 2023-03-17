# Entrega Final - ReactJS - Pruyas Elio
Proyecto Final del curso de ReactJS de CoderHouse

## Scripts Disponibles
En este proyecto, puede ejecutar:

### `npm start`
Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se volverá a cargar cuando realice cambios.\
También puede ver errores en la consola.

## Objetivos de la entrega
Desarrollarás una app de un e-commerce para poder vender productos de un rubro a elección

### Componentes:
* Navbar
* Catálogo
* Detalle de producto
* CartContext
* CartWidget

La transaccion se almacena en una base creada en [Firebase](https://firebase.google.com/?hl=es)

### Informacion de componentes

| Componente                   | Tarea                                                                                                              |
|------------------------------|--------------------------------------------------------------------------------------------------------------------|
| NavBar                       | Componente encargado de mostrar la barra de navegacion de la pagina                                                |
|CartWidget                    | Componente encargado de mostrar el icono que da acceso al carrito y la cantidad de elementos del mismo             |
|ItemListContainer             | Contenedor del listado de productos del e-commerce                                                                 |
|Item                          | Elemento del listado de productos                                                                                  |
|ItemDetailContainer           | Contenedor de los detalles de un producto                                                                          |
|ItemCount                     | Componente encargado de sumar o restar la cantidad de productos a agregar al carrito                               |
|Cart                          | Componente encargado de mostrar la transaccion actual ademas de solicitar y enviar datos para que sean almacenados |