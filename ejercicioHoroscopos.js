var horoscopo = prompt("Ingresa tu signo zodiacal en minusculas y sin acentos (solo son 12): ");

switch(horoscopo){
    case "aries":
        console.log("Esta semana sera muy buena para ti, te regalaran un tamalito y te encontraras poderosos 50 pejecoins");
    break;

    case "tauro":
        console.log("Ten cuidado porque te estan sonsacando");
    break;

    case "geminis":
        console.log("Ten cuidaod con el uso excesivo de if, puede llegar a ser mala practica, usa un switch, me lo agradeceras");
    break;

    case "cancer":
        console.log("Encontraras la respuesta a la falla en tu codigo mientras de bañas");
    break;

    case "leo":
        console.log("Tu orientacion al detalle no estara al 100 en la semana asi que espera que tu codigo entre en un loop infinito");
    break;

    case "virgo":
        console.log("Alguien por accidente borrara la base de datos e intentaran culparte, toma precauciones");
    break;

    case "libra":
        console.log("En esta ocasion el equilibrio que acostumbras se vera turbado por codido, codigo y mas codigo");
    break;

    case "escorpio":
        console.log("Todo lo que hagas esta semana te saldra bien, aprovechalo");
    break;

    case "sagitario":
        console.log("Pon atencion al proyecto, puede que seas la salvacion de tu equipo");
    break;

    case "capricornio":
        console.log("El codigo es tu pastor y ningun fallo presentara");
    break;

    case "acuario":
        console.log("Se me acabaron las ideas acuario, lo siento por pisciis que el ultimo, a ti al menos te avise");
    break;

    case "piscis":
        console.log("Ni como ayudarte, se feliz :)");
    break;

    default:
        console.log("No existe ofiuco, no lo intentes");
}