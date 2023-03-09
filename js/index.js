// let nombre = prompt ("Ingrese su nombre")
// let apellido = prompt ("Ingrese su apellido")

// if (nombre != "" && apellido != "") {
//     alert("Hola, " + nombre + " " + apellido + "!")
// } else {
//     alert("Invalido, faltan introducir datos")
// }

// let texto = prompt("Ingrese texto");
// let resultado = texto;
// let textoConcatenar = " ";

// while(textoConcatenar != "ESC") {
//     textoConcatenar = prompt ("Ingrese text para concatenar con el incial");
//     resultado = resultado + " " + textoConcatenar;
//     console.log(resultado);
// }

function calcularPrecioTotal(precios) {
    let suma = 0;
    for (let i = 0; i < precios.length; i++) {
        suma += precios[i];
    }
    let descuento = suma * 0.2;
    let precioFinal = suma - descuento;
    return precioFinal;
}

let precios = [1200, 3000, 2500, 1000];
let precioFinal = calcularPrecioTotal(precios);
console.log(precioFinal); // Output: 6160

