/*function velocidad(distancia,tiempo){
    operacion=distancia/tiempo;
    console.log("La velocidad del objeto es de " + operacion + " m/s");
}

velocidad(15,10) */


var ValorA = prompt("Introduce el Valor de A: ");

var ValorB = prompt("Introduce el Valor de B: ");

var ValorC = prompt("Introduce el Valor de C");

function formulaGeneral(){
    interiorRaiz = ((ValorB*ValorB) - (4*ValorA*ValorC));
    raiz = Math.sqrt(interiorRaiz);
    ValorX1 = (-ValorB + raiz)/(2*ValorA);
    ValorX2 = (-ValorB - raiz)/(2*ValorA);
    
    console.log("El valor de X1 es " + ValorX1 + " y el valor de X2 es " + ValorX2);

}

formulaGeneral();


