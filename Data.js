

//Usuario:
let UsuarioAdmin = "ADMIN"
let ContraseñaAdmin = "originalidad"

//Lets
let formulario;
let inputId;
let inputNombre;
let inputPrecio;
let inputCantidad;
let contenedorProductos;
let listaCarrito
let pieCarrito
let botonComprarFinal

//Objetos Default
const articulosDefault = [  
    {id: 1, tipo: 'taza', nombre: 'Taza Tortuga', precio: 500, cantidad: 10},
    {id: 2, tipo: 'taza', nombre: 'Taza Salamandra', precio: 400, cantidad: 10},
    {id: 3, tipo: 'taza', nombre: 'Taza Sapo', precio: 1000, cantidad: 10},
    {id: 4, tipo: 'tetera', nombre: 'Tetera verde',  precio: 900, cantidad: 10},
    {id: 5, tipo: 'tetera', nombre: 'Tetera violeta',  precio: 800, cantidad: 10},
    {id: 6, tipo: 'plato', nombre: 'plato amarillo',  precio: 300, cantidad: 10},
    {id: 7, tipo: 'plato', nombre: 'plato marron',  precio: 200, cantidad: 10},
    {id: 8, tipo: 'plato', nombre: 'plato celeste',  precio: 400, cantidad: 10},
    ]

//Class
  class Producto {
    constructor(id, nombre, precio, cantidad) {
      this.id = id;
      this.nombre = nombre.toUpperCase();
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

//arrays iniciales
let articulos = articulosDefault
let carrito = []
