class sistemaContable{
    nombre = "";
    edad = 0;
    rfc = "";
    diasLaborados = 0;
    sueldoBruto = 0;
    sueldoNeto = 0;

    constructor(nombre, edad, rfc, diasLaborados, sueldoBruto, sueldoNeto){
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.diasLaborados = diasLaborados;
        this.sueldoBruto = sueldoBruto;
        this.sueldoNeto = sueldoNeto;
    }

    imprimirInfo(){
        console.log("El nombre del empleado es ", this.nombre);
        console.log("El empleado tiene ", this.edad, " años");
        console.log("Su RFC es: ", this.rfc);
        console.log("Laboro en el mes: ", this.diasLaborados, " dias");
    }
    
    pagoBrutoMensual(){
        if(0 < this.diasLaborados <= 30){
            (this.sueldoBruto = Math.floor((this.diasLaborados * 156.78)));
            console.log("Tu salario mensual Bruto es de ", this.sueldoBruto);
        }
    }

    pagoNetoMensual(){
        if(0 < this.diasLaborados <= 30){
            (this.sueldoNeto = Math.floor(((this.diasLaborados * 156.78)*.69)));
            console.log("Tu salario mensual Neto es de ", this.sueldoNeto);
        }
    }

    pagoBrutoQuincenal(){
        if(0 < this.diasLaborados <= 30){
            (this.sueldoBruto = Math.floor((this.diasLaborados * 156.78)/2));
            console.log("Tu salario quincenal Bruto es de ", this.sueldoBruto);
        }
    }

    pagoNetoQuincenal(){
        if(0 < this.diasLaborados <= 30){
            (this.sueldoNeto = Math.floor(((this.diasLaborados * 156.78)*.69)/2));
            console.log("Tu salario quincenal Neto es de ", this.sueldoNeto);
        }
    }
}

let juanPerez = new sistemaContable("Juan Perez", 32, "PEMJ910708T01", 29);
let marcosFlores = new sistemaContable("Marcos Flores", 27, "FLTM960229L45", 30);
let carlosMolina = new sistemaContable("Carlos Molina", 20, "MOLC031210R21", 25);

juanPerez.imprimirInfo();
juanPerez.pagoBrutoMensual();
juanPerez.pagoNetoMensual();
juanPerez.pagoBrutoQuincenal();
juanPerez.pagoNetoQuincenal();

marcosFlores.imprimirInfo();
marcosFlores.pagoBrutoMensual();
marcosFlores.pagoNetoMensual();
marcosFlores.pagoBrutoQuincenal();
marcosFlores.pagoNetoQuincenal();

carlosMolina.imprimirInfo();
carlosMolina.pagoBrutoMensual();
carlosMolina.pagoNetoMensual();
carlosMolina.pagoBrutoQuincenal();
carlosMolina.pagoNetoQuincenal();