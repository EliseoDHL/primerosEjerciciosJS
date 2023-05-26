/*

Operadores

Los operadores nos permiten realizar una operacion en uno o varios operandos (variables o datos)

- Operadores de Asignacion
- Operadores de Cadena
- Operadores Logicos
- Operadores de Comparacion
- Operadores Aritmeticos

Operadores de Asignacion (=)

Los operadores de asignacion (=) se utilizan para asignarle valor a una variable. signa un valor al operando de la izquierda  basado en el valor del operador de la derecha.

*/

//Operadores de Asignacion

let edadFelipe = 31;
var recipiente = "café";

/*

Operadores de Comparacion (>,<, >=, <=, ==, ===, !=, !==)

Los operadores de comparacion nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representan la relacion de sus valores.

*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";

//Operador menor que
console.log("El valor 13 es menor que el valor 25 " + (numero1 < numero2));

//Operador mayor que
console.log("El valor 13 es menor que el valor 25 " + (numero1 > numero2));

//Operador mayor o igual que
console.log("El valor 25 es menor o igual que el valor 25 " + (numero2 >= numero3));

//Operador de igualdad solo evalua valores
console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3));

//Operaodr de igualdad estricta (evalua el valor pero tambien evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3));

//Operador de desigualdad (!=)
console.log("El valor 25 no es igual al valor 25? " + (numero1 != numero2));

//Operador de desigualdad estricta (!==)
console.log("El valor 25 no es igual al valor 25? " + (numero2 !== numero3));

/*

Operadores Logicos (&&, ||, !)

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (Los podemos combinar, y , los podemos poner en un orden especifico).

AND(&&)

Sirve para determinar si dos expresiones son verdaderas.

    - Si ambas expresiones son verdaderas, el resultado es verdadero.
    - Si una de las dos expresiones es falsa, todo el resultado es falso. 

OR (||) 

Sirve para determinar si dos expresiones son falsas. 

    -Si cualquier de esas afirmaciones es verdadera, todo es verdader.
    - Si las dos afirmaciones son falsas, todo es falso.

NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo

*/

//Ejemplo con AND (&&)

/*var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 > num2);
afirmacion2 = (num1 != num2);

console.log(afirmacion1 && afirmacion2);

//Ejemplo con OR (||)

afirmacion3 = (num1 < num2);
afirmacion4 = (num1 != num2);

console.log(afirmacion3 || afirmacion4);

//Ejemplo con NOT (!)

console.log(!afirmacion3);
console.log(!afirmacion4);*/

//Ejercicio de combinacion de operaciones

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op);

//Combinando operaciones2

op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

console.log(op2);

/*

num5 es mayor que num2 = true
num4 es menor que num3 = false
Al ser un operador AND, la operacion es false

num1 si o si es igual a num2 = false
esta operacion tiene una negacion asi que es true
num3 es diferente de num3 = false
Al ser un operador OR y al menos uno es verdadero, la operaciones es true

El ultimo operador es OR, si tenemos un true y un false, el resultado es True

*/

/*

Operadores aritmeticos (+, -, *, /, %, **, ++, --)

+ (Suma): suma dos o mas valores numericos
- (Resta): resta de dos o mas valores numericos
* (Multiplicacion): multiplica dos o mas valores numericos
/ (Division): divide dos o mas valores numericos
% (modulo o residuo): retorna el residuo de una division
** (exponenciacion): retorna el resultado de una potencia. Se escribe la base antes de los astericos y el exponente despues de los asteriscos
++ (Incremento): Incrementa un valor de uno en uno
-- (Decremento): Decrementa un valor de uno en uno

*/

let valor1 = 55;
let valor2 = 17;

console.log("Suma: " , (valor1 + valor2));
console.log("Resta: " , (valor1 - valor2));
console.log("Multiplicacion: " , (valor1 * valor2));
console.log("Division: " , (valor1 / valor2));
console.log("Residuos: " , (valor1 % valor2));
console.log("Exponente: " , (valor1 ** valor2));
console.log("Incremento: " , ++valor1);
console.log("Decremento: ", --valor1);