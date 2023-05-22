pesoPayaso = 112;
pesoMuñeca = 75;

payasoVendido =27;
muñecaVendida =14;

pesoVendidoPayaso = pesoPayaso * payasoVendido;
pesoVendidoMuñeca = pesoMuñeca * muñecaVendida;
totalDelPedido= (pesoVendidoPayaso + pesoVendidoMuñeca) /1000;

console.log("Peso total del Paquete:" + totalDelPedido+ "kg");