export default class App {

esPar (numero) {

if(numero == 0) {
return false;
} else if (numero % 2 == 0) {
return true;    
} else {
return false;
} 
}

esMultiplo(numero1, numero2) {
let resultado; 

}

calcularSalario(tipoTrabajador, horasTrabajadas){
    let resultado;
    switch(tipoTrabajador, horasTrabajadas) {
        case'tipo1':
        resultado = 20 * horasTrabajadas
        break;
        case 'tipo2':
        resultado = 22 * horasTrabajadas
        break;
        case 'tipo3':
        resultado = 25 * horasTrabajadas
        break;
        default:
        resultado = -1
            
    }
    return resultado;
}


obtenerCalificacion(calificacionNumerica) {
    let resultado;
    if(calificacionNumerica >= 0 && calificacionNumerica <= 5) {
        resultado = 'C'
    } else if(calificacionNumerica == 6 | calificacionNumerica == 7) {
        resultado = 'B'
    }else if calificacionNumerica
    
    }

}

obtenerCercano100(numero1, numero2, numero3) {
if(numero1 !== numero2 && numero1 !== numero3) {
    let x = Math.abs(numero1 - 100)
    let y = Math.abs(numero2 = 100)
    let z = Math.abs(numero3 - 100)
    
    if (y < x && y < z) {
        return numero2;
    }

    if (x < y && x < z ) {
        return numero1;
    }

    if (z < x && z < y) {
        return numero3;
    }

    return null;
} else {
    return null;
}
}

calcular(numero1, numero2, operador){
    let resultado;

    switch(numero1, numero2, operador) {

    }
}

costoRenta(peliculas, dia){

}

costoBoletos(boletos, zona){
let costoTotal;

switch(zona){
case 1:
    costoTotal = boletos * 300;
    break;
case 2:
    costoTotal = boletos * 450;
    break;
case 3:
    cosoTotal = boletos * 700;
    break;
default:
    costoTotal = -1;
}

if (costoTotal > 2000){
costoTotal = costoTotal * 0.93;
}
return costoTotal;
}

estaEnRango(limiteInicial, limiteFinal, numero){

}


let app = new App();

console.log(app.esPar());

console.log(app.esMultiplo());

console.log(app.calcularSalario());

console.log(app.obtenerCalificacion());

console.log(app.obtenerCercano100());

console.log(app.calcular());

console.log(app.costoRenta());

console.log(app.costoBoletos());

console.log(app.estaEnRango());