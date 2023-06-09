/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

*/

//Arreglos (objeto)
var casaArreglo = [3, 2, 1, 4, 2, "Verde", 6, "Rojo"];

//Creacion de un objeto casa (atributos)
const casa = {
    numHabitaciones: 3,
    numPisos: 2,
    numBaños: 1,
    color: "Rojo",
};

//Para imprimir la informacion de un objeto, utiliizo la referencia al objeto, despuues de un punto, y por ultimo el nombre de la propiedad o metodo que quiero mostrar
console.log("El color de mi casa es: ", casa.color);

//Intruccion: Crear 50 casas, con la misma estructura pero colores diferentes

//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esq informacion se va a ir personalizando.

class casaPlantilla{
    //1. Definir mis propiedades como variables, para posteriormiente agregarle valores (este valor se lo vamos a dar cuando instanciemos e objeto)

    numHabitaciones = 0;
    numBaños = 0;
    numPisos = 0;
    color = "";

    //3. Definir una funcion constructora. Esta funcion es una funcion especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlos como parametros de construccion y asi poder instanciar nuestro objeto.

    //Los parametros se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable correspondiente
    constructor(numHabitaciones, numBaños, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBaños = numBaños;
        this.numPisos = numPisos;
        this.color = color;
    }


    //2. Definimos los metodos com funciones, por que estas funciones nos dicen que podemos hacer mi objeto 
    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentanas(){
        console.log("Swiiift, venranas abiertas");
    }
    
    guardarmeDelFresnito(){
        console.log("Que agusticida, eda?");
    }
}

//En la clase definimos todo de forma "normal" (declaeamos las variables como normalmente los usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.)

/*Instanciar casas

Para instanciar objetos, usamos la siguiente sintaxis:

variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de constuccion);

let objeto = new ClaseObjeto (parametros);

*/

//Tengo una variable llamada "casa de Felipe", que es un nuevo objeto de la clase "casa Plantilla" y que tiene los siguientes parametros
let casaDeFelipe = new casaPlantilla (6, 3, 3, "Azul");

console.log(casaDeFelipe);
casaDeFelipe.encenderLuces();
casaDeFelipe.guardarmeDelFresnito();
console.log(casaDeFelipe.numHabitaciones);

//Ejemplo de POO con Gatitos

class gatitos{
    //1. Propiedades
    nombre = "";
    edad = 0;
    tamaño = "";
    caracter = "";
    numVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    //3. Constructor
    constructor(nombre, edad, tamaño, caracter, numVidas, color, raza, vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.caracter = caracter;
        this.numVidas = numVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
    }

    //2. Metodos
    imprimirInfo(){
        console.log("EL nombre de mi gato es: ", this.nombre);
        console.log("EL nombre de mi gato es: ", this.edad);
        console.log("EL nombre de mi gato es: ", this.tamaño);
        console.log("EL nombre de mi gato es: ", this.caracter);
        console.log("El gato tiene: ", this.numVidas, " vidas");
        console.log("EL nombre de mi gato es: ", this.color);
        console.log("EL nombre de mi gato es: ", this.raza);
        console.log("EL nombre de mi gato es: ", this.vacunas);
    }

    maullar(){
        console.log("Miauuuu");
    }

    rasguñar(){
        console.log("El gato ha rasguñado el sillon");
    }

    ronronear(){
        console.log("Brrrr");
    }

    cuidarGato(){
        if(this.numVidas < 3){
            console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }
}

//Instanciar

let juanchoDelCampo = new gatitos("Juancho Del Campo", 5, "Grande", "Tranquilo", 7, "naranja", "Angora", true);

let Mercury = new gatitos("Mercury", 2, "grande", "tranquila", 9, "Gris", "Desconocido", true);

juanchoDelCampo.imprimirInfo();
Mercury.imprimirInfo();

/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({,:})

JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia es que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

//Objeto norma de JAVASCRIPT

objeto = {
    nombre:"Felipe",
    edad: 15,
}
console.log(objeto);

/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sisntaxis para pasar de objeto normal de JS a JSON es:

JSON.stringify(objeto que quiero serializar)

*/


let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado,  y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ", objetoSerializado);

//Si tratamos de acceder a lagun de las propiedades de nuestro objeto serializado, no podremos ya que no nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para deserealizar un objeto JSON, vamos a utilizar un metodo llamado JSON.parse (objeto que queremos deserealizar)

let objetoDeserializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado);