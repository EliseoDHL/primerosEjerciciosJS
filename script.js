//alert("It's Alive!");

//Comentario de una linea
/*Comentario multilinea*/

/*

Variables

Es un elemento del cual su valor puede cambiar o variar dependiendo la circunstancia. Esta variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable que tenemos.

Variable = recipiente donde pondremos el valor
Valor = Informacion con la que llenamos el recipiente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente

*/

recipiente = "agua";
recipiente = "cafe";
recipiente = "colores y lapices";

// Usamos esta linea de codigo para imprimir o mostrar la informacion de mi recipiente

console.log(recipiente);

//Declarar vs Inicializar

//quieresSerMiNovia;
//edad;
//altura;
//peso;
//genero;


/*

Tipos de datos (primitivos y no primitivos)

Se llaman primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato mas simple o mas basico que existe.

    - String: Sirve para agregar valores en forma de texto. Para que se considere asi, el valor debe estar dentro de comillas simples (''), dobles("") y backtick (``).

    - Number: Sirve para agregar valores en formato numerico (para poder usarlos en operaciones aritmeticas). Estos valores no usan comillas.

    - Boolean: Sirven para representar valores del tipo truo o false(encendido o apagado, 0 y 1, si y no).

    - Undefined: Sirve para representar una variable o un tipo de dato que no tiene valor. Cuando declaramos variables sin inicializar, tendremos datos del tipo undefined.

    - Null: Sirve para definir que un valor es nulo.

    - Nan (Not at Number): Sirve para representar un valor que no es un numero. Lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.

    - Symbol 
    - Object (no es primitivo)

*/

// Ejemplo para la concatenacion

apodoDeFelipe = "El 'amante numero uno' de los chilaquiles verdes"
console.log(apodoDeFelipe);

// Ejemplos de valores numericos

edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(costoDeUnGansito);
console.log(edadDeFelipe);
console.log(cuentaDeFelipe);

//Ejemplos de valores booleanos

esAdministrador = true;
contraseñaCorrecta = false;
cuentaPremium = true;

// Ejemplos de datos indefinidos

// respuestaDeMiCrush;



// Ejemplos de valores nulos

respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);

// Ejemplo con valores NaN

operacionMatematica = 0/0;
console.log(operacionMatematica);

// TypeOf: Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaluando
// typeof(elDatoAEvaluar);
// Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.

console.log(typeof(esAdministrador)); // boolean
console.log(typeof(edadDeFelipe)); // number


/* Tipos de Variables

En JS tenemos 3 tipos principales de variables:

    - var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope (alcance) blobal, esto es, que el valor de esta variable esta disponible en todo el programa.

    - let: Lo usamos para limitar el alcance de nuestras variables (scope) y se limita a un bloque de codigo o expresion (meter a la mama de bambi en una cajita), es una variable local.

    - const: Se usan para declarar una variable con un valor constante o inmutable (que no cambia).

*/

//En este caso, La mama de bambi esta visible desde cualquier lugar del programa
var mamaDeBambiViva = false;

var cazador = "listo para disparar";

let nombre = "Felipe Maqueda"

const pi = 3.1416;

/* 

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no me ejecutan sino que se invocan.

Parametros = variables que necesitamos para alimentar mi funcion (todas las variables se tienen que utilizar)

Ejemplo: Limon, azucar, vasito de agua, cucharita, hielos, agua.

Nombre para la funcion: Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)

Ejemplo: Preparar aguita de limon

Operaciones: Conjunto de instrucciones (en orden especifico)

Ejemplo: 1)Corta el limon 2)Exprimir el limon

Resultado: Las funciones generalmente deben tener un resultado.

Ejemplo: Vasito de agua de limon

*/

// 1. Creamos la funcion con la palabra reservaba function y le ponemos un nombre. Despues, abrimos y cerramos parentwsis y  abriremos y cerraremos llaves{}

// 2. Ponemos nuestros parametros (variables) dentro del parentesis

// 3. Poenr las instrucciones dentro de las llaves





function prepararAguitaDeLimon(limon, agua, hielos, azucar, vaso, cuchara){

    var limon = "Limon";
    var agua = "Agua";
    var hielos = "Hielos";
    var azucar = "Azucar";
    var vaso = "Vaso";
    var cuchara = "Cuchara";

    console.log("Cortar el limon "+limon);
    console.log("Exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso "+agua);
    console.log("Agregar los hielos al vaso "+hielos);
    console.log("Agregamos el agua al vaso "+vaso);
    console.log("Endulzamos al gusto "+azucar);
    console.log("Mexclar y disfrutar "+cuchara);

    var cuchara ="tenedor";

    console.log(cuchara);
}

prepararAguitaDeLimon();

// Ejemplo de las 3 formas de agregar parametros a funciones

function suma(a, b){
    var a = 5;
    var b = 7;

    operacion = a + b;


    console.log(operacion);
}

suma();

// Segunda Forma

function resta (a=8, b=5){
    operation = a-b;
    console.log(operacion);
}

resta();

//Tercera forma
function multiplicacion(a,b){
    operacion = a*b;
    console.log(operacion);
}

multiplicacion(3,9);
multiplicacion(6,4);
multiplicacion(8,32);
multiplicacion(35,26);
multiplicacion(70,4);
multiplicacion(7,6);
multiplicacion(15,22);
multiplicacion(54,72);
multiplicacion(21,53);
multiplicacion(13,27);

// Funciones anonimas

let funcionAnonima = function(a,b){
    operacion = a/b;
    console.log(operacion);
}

//Return

//Funcion para dar un saludo personalizado

//primero defino mi funcion

function saludo(nombreSaludo){
    //declaro e inicializo mi valor del nombre
    nombreSaludo = "Felipe"

    //uso ese nombre para personalizar mi saludo
    console.log("Hola " + nombreSaludo + ", Bienvenido a Frijolito Vegano");

    //Finalizo la ejecucion de mi funcion, y tomo el dato de la variable llamada nombreSaludo para poder verla (recordemos que esta en un contexto local) y tambien para poder usarla despues en otras operaciones
    return nombreSaludo;
}

//Para poder usar esa variable que hasta este momento de la funcion, pero que no sabemos donde esta (porque esta en limbo de funciones). Y en esta nueva variable ponemos la invocacion de la funcion.

let nombreQueSaqueDeMiFuncion=saludo();

console.log(nombreQueSaqueDeMiFuncion);

