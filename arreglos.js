/*

Arreglos (arrays, matrices, colecciones de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.


*/

//Formas de declarar un array o arreglo

//1. Usando los corchetes []

var miArray = [1, 2, 3, 4, 5, 6];

//Variable sin inizializar

var colores;

//Arreglo sin asignar a una variable

["azul", "rojo", "naranja", "verde"];

//Variable de colores declarada e inicializada

var colores = ["azul", "rojo", "naranja", "verde", ["Verde pastel", "Amarillo Pastel", "Rosa Pastel"]];

//Podemos tener distintos tipos de datos en un mismo arreglo

var datosDeFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined, null];

//Cada asignatura esta asociada a una variable individual

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3 = "Fisica";

//Array

var asignaturas = ["Matematicas", "Literatura", "Fisica"];

console.log(asignaturas);

//Acceso a elementos de un arreglo

console.log("El elemento en la posicion 2 de mis asignaturas es: ", asignaturas[2]);

//Si accedemos a un elemento que no existe, nos mostrara un undefined porque el espacio existe pero no tiene ningun valor
console.log("El elemento en la posicion 2 de mis asignaturas es: ", asignaturas[10]);

//Mostrar la longitud de mi arrreglo
console.log(asignaturas.length);

//Ejemplo de arrays

//Array carrito de compras

var carrito = ["pantalon", "camisa", "corbata"];

var publicacion = ["usuario", 137, "fecha de publicacion"];

console.log(publicacion);

//Modificar los elementos dentro del arrays

//Reasignamos un valor a un elemento  de nuestro arreglo por medio de su index
publicacion[1] = 138;

console.log(publicacion);

//No teniamos un elemento en la posicion(index) 4 (indefinido = 150)
publicacion[4] = 150;

//Metodo para agregar elementos al final de un arrelgo
asignaturas.push("Biologia");

console.log(asignaturas);

asignaturas.push("Ingles");

console.log(asignaturas);

//Metodo para eliminar el ultimo elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);

//Metodo para agregar elementos al principio de un arreglo
asignaturas.unshift("Quimica", "Educacion Fisica", "Artes");
console.log(asignaturas);

//Metodo para eliminar elementos del principio de un arreglo
asignaturas.shift();
console.log(asignaturas);

//Metodo para saber si mi arreglo incluye un elemento especifico

let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];

regalo = carritoDeWalmart.includes("Coquita");


if (regalo === true){
    console.log("Te regalo un sarten");
}

var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Marina"];

var mejoresAmigos;

var publico;

if(!amigos){
    console.log("Mi meme de bob esponja");
}

//Metodo para concatenar arreglos

var listaDeGolosinas = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];

var listaDeFrutitasYVerduritas = ["manzanas", "mangos", "toronjas", "platanos", "fresas", "toronjas"];

var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutitasYVerduritas);

console.log(listaDeComprasDeLaQuincena);
console.log(listaDeGolosinas , listaDeFrutitasYVerduritas);

//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparicion. Si el elemento no se encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("Chicharrones"));

console.log("Resumen de compra");
//Metodo para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join(" *** "));

/*

Investigacion :)

Reverse: Modifica el arrgelo invirtiendo el orden

    Ejemplo [1, 2, 3, 4, 5] --> [5, 4, 3, 2, 1]

Slice: Copia los elementos que seleccionaste y crea un nuevo array, los items que seleccionas son el inicio y el fin del mismo, el ultimo no se incluye

    Ejemplo: [1, 2, 3, 4, 5] 
    array.slice(2,4) ---> [2,3]

Splice: Mueve los elementos, modificando el array origen y creando uno nuevo

    Ejemplo: [1, 2, 3, 4, 5, 6]
    array.slice(2,4) ---> [2, 3, 4, 5]
    El primer numero (2), es el inicio, el segundo numero (4) es la cantidad de elementos a mover

Sort: Ordena los elementos de forma ascendente o por orden alfabetico, tambien puedes elegir el parametro como ordenarlos por edad

toString: convierte el array en una cadena de textos, separados por una coma

join: te permite separar el arreglo con algun elemnto y tambien lo convierte en string

*/

//Modificacion del arreglo (push, pop, shift, unshift, splice)

//Acceso y busqueda de elementos(indexOf, lastIndexOf, includes)

//Transformacion de elementos (sort, reverse, map, forEach)

//operadores Logicos (every, some)

//Crreacion de nuevos arreglos (slice, concat, join, reverse)


/*Splice (agregar, eliminar o reemplazar elementos en posiciones especificas)

Sintaxis del splice

array.splice(iniciamos, numeroElementoABorrar, elementoAInsertar)

*/

var abecedario = ["A", "B", "C", "D", "E"]; //borrar C y D

abecedario.splice(2,2);

console.log(abecedario);

//Splice para insertar elementos
abecedario.splice(2,0,"C","D");

console.log(abecedario);

//Splice para reemplazar elementos del arreglo
var vocales = ["A", "E", "I", "O", "U"]; //reemplaza e i

vocales.splice(1,2, "Comida", "Comer", "Comiendo");
console.log(vocales);