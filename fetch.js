//JavaScript sincrono
console.log("Inicia sincrono");
function doSync(){
    console.log("Se ejecuta la funcion dos");
}

function unoSync(){
    console.log("Se ejecuta la funcion uno");
    doSync();
    console.log("Se ejecuta el codigo tres");
}

unoSync();
console.log("Fin de SIncrono");

/*

Ejemplos de tareas sincronas

- Ciclos
- Invocaciones a funciones
- EventListener (especificamente cuando necesito el click)
- Condicionales y todo lo que tenga que ver con toma de decisiones
- Prompts y alerts


*/

//JavaScript asincrono
console.log("inicio de Asincrono");

function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000); //tiempo es en milisegundos
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Fin de Asincrono");

/*

Ejemplos de tareas asincronas

- Funcion setTimeout
- Notificaciones de cierre de sesion en apps bancarias
- Spotify  con su cola de reproduccion
- Conexiones a servidor
- Cargas de APIs

*/

/*

Ya que tendeemos que la asincronia nos servira para conectarnos a un servidor, y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisengundos o segundos), es necesario saber que hay varios mecanismos para maneras operaciones asincronas en JS-

    - Callbacks (llamadas de vuelta): La forma mas clasica de gestionar la asincronia
    - Promises (promesas): forma moderna
    - Async/Await: forma moderna con una sintaxis mas ligera

*/

/*

Que es un callback (llamada de vuelta)

Un callback es una funcion que se pasa como argumento a otra funcion. Esta funcion se ejecutara despues de que otra lo haga. Este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro termine.

Para que las necesitamos?
Sabemos que JS trabaj de forma descendete, entonces habra casos que queramos hacer que un codigo se ejecute despues de que ocurra otra cosa, y tambien de forma no secuencial.

*/

function hazClick(){
    console.log("Le hiciste click al boton");
}

const boton = docuemnt.getElementById("boton");
boton.addEventListener("click", hazClick);

//Ejemplo de Callback

function dobleNumero(num,callback){
    const resultado = num * 2;
    callback(resultado);
}

function mostrarResultado(resultado){
    console.log("El resultado es: ", resultado);
}

dobleNumero(5, mostrarResultado);