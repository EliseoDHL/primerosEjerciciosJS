/*

Bucles e iteracion

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a automatizar tareas repetitivas.

    - While (mientras)
    - Do While (hacer mientras)
    - For (para)

While (mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condiicon sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.

*/

/*Estructura basica de una while

while (tenerSueño && tenerUnaCamita){
    //hacer la dormicion
}



Ejemplo de un cilo o bucle infinito

while (true){
    //bloque de codigo a ejecutar
}


Casos de uso del ciclo While

    - Para verificar si un usuario esta registrado o no
    - Verificamos la disponibilidad de un producto (stock)
    - Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, aplicar impuestos, actualizar informacion, etc.)
    - Recorrer publicaciones de un usuario
    - Contador de likes 

*/

//Codigo de mi sopita de verduritas con pollito

//Declaro e inizializo un array con mis ingredientes

var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"]; // 6 Elementos

//Declaramos una variable llamada ingredientesAgregadosALaOlla que sea menos que los ingredientes que me quedan disponibles
var ingredientesAgregadosALaOlla = 0;

while(ingredientesAgregadosALaOlla < ingredientes.length){

    //... ire agregando ingredientes a la olla...
    console.log("Agregando" + ingredientes[ingredientesAgregadosALaOlla] + "a la  olla");

    //... y voy aumentando el contador para saber cuando parar
    ingredientesAgregadosALaOlla ++;

}

console.log("La sopita ya esta lista, yumi");

function imprimirAsteriscos(){
    console.log("*******************");
}

imprimirAsteriscos();

/*

Do - While (hacer mientras)

Es similar al while, con las diferencias de que la condicion se evalua despues de cads iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa

do{
    //bloque de codigo que vamnos a ejecutar
} while (condicion);

*/

console.log("Ejemplo de Galletitas con Do-While");

//Variable tiempo de coccion que servira como contador
var tiempoTranscurridoDeCoccion = 0;

//usamos el ciclo do-while

do{

    console.log("Horneando las galletas...");
    tiempoTranscurridoDeCoccion +=5;

    //Todo el bloque de codigo se va evalar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se pueden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo en maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen.

    //Esto es como si revisaramos el horno cada 5 minutos



} while(tiempoTranscurridoDeCoccion < 30);

console.log("Las galletas estan listas");

/*

For (para)

Se utiliza cuando se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El boque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.

for (inicializacion; condiicon; expresion de iteracion){
    //Bloque de codigo a ejecutar
}

    - Inicializacion: Se ejecuta antes de que el bulce comience, se utiliza para establecer una variable de control (contador)

    - Condicion: Se verifica antes de cada iteracion, y si se evalua como verdadera, el bucle se ejecuta.
    
    - Expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.

*/

imprimirAsteriscos();
console.log("Ejemplo de la pizaa con For");

//Definir mi lista de pasos
var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"];

//Definir mi lista de tiempo por paso
var tiempoPorPaso = [15, 10, 20];

//En el ciclo for, para cada paso, se tiene un tiempo estimado

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso voy incrementando mi variable paso para saber cuantos pasos me quedan pendiente. Cuando ya no haya pasos, termino el proceso.
for (var paso = 0; paso < pasosDeReceta.length; paso ++){

    console.log("Realiznaod paso" + pasosDeReceta[paso]);
    console.log("Esperando " + tiempoPorPaso[paso] + " minutos");
}

//Ejemplo contador con FOR

for (let i=10; i>0; i--){
    console.log("Faltan" + i + " segundo para el despegue");
}

console.log("Hasta el infinito y mas alla");

//ejemplo de for cupones de descuento

for(let cupones = 10; cupones > 0; cupones--){
    console.log("Quedan " + (cupones-1) + " cupones disponibles");
}

console.log("Se acabaron los cupones, suerte para la proxima");