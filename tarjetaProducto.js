//1.- Obtener los elementos del HTML para guardarlos en variables

//Almaceno el lugar de destino de mi tarjetita en una constante
const container = document.getElementById("product-container");
const botonAgregarProductos = document.getElementById("agregarProducto");

//Almacenar elementos del formulario en variables de JS
var nombreProducto = document.getElementById("nombreProducto");
var descripcionProducto = document.getElementById("descripcionProducto");
var imagenProducto = document.getElementById("imagenProducto");

function agregarProductos(){

    //Guardo los valores de mis inputs
var valorInputProducto = nombreProducto.value;
var valorInputDescripcion = descripcionProducto.value;
var valorInputImagen = imagenProducto.value;

    //Quiero que cada tarjetita tenga su propio div o contenedor
    const productCard = document.createElement("div");

    // Creo el elemento
    productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> ${valorInputDescripcion} </p>
    <p> Precio: $9.99 </p>
    <button class="btn"> Agregar al carrito </button>
`;

//Agregar esa tarjeta de producto al container especificado
container.appendChild(productCard); 
}

//Creamos el evento
botonAgregarProductos.addEventListener("click", agregarProductos);