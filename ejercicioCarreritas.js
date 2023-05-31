var posicionesCarreras = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

console.log("Al principio de la carrera estas son las posiciones: " + posicionesCarreras);

posicionesCarreras.shift();
console.log(posicionesCarreras);


posicionesCarreras.splice(0,3,"Ramiro", "Jorge","Sofia","Andrea");
console.log(posicionesCarreras);

posicionesCarreras.pop();
console.log(posicionesCarreras);


posicionesCarreras.push("Jose");

console.log(posicionesCarreras);
