/** Reto 1: funciones, parámetros y return

function Suma(a, b) {
 const total = a + b;
 return total;
}
const resultado = Suma(5, 3);

function Resta(a, b)
{
 const total = a - b
 return total;
}
const resultado2 = Resta(8, 3);

function multiplicar(a, b)
{
 const total = a * b
 return total;
}
const resultado3 = multiplicar(5, 2);

function dividir(a, b)
{
 const total = (a / b)
 return total;
}
const resultado4 = dividir(16, 4);

function Promedio(nota1, nota2, nota3)
{
 const total = (nota1 + nota2 + nota3) / 3
 return total;
}
const resultado5 = Promedio(5, 3.5, 4.5);

console.log("Resultado Suma:",resultado);
console.log("Resultado Resta:",resultado2);
console.log("Resultado Multiplicacion:",resultado3);
console.log("Resultado Division:",resultado4);
console.log("Resultado Promedio:",resultado5);

// El "console.log" es para escribir o mostrar un mensaje en pantalla, el "return" sirve para devolver o retornar
// un resultado o un procedimiento en consola


 */

// Funciones Tipo Flecha

/**
 * Funcion Tradicional:
  
  function aplicarIva(precio) {
 return precio * 1.19;
}

 * Funcion Flecha:

const aplicarIva = (precio) => {
 return precio * 1.19;
};

 * Funcion Flecha corta:

const aplicarIva = precio => precio * 1.19;



_ PRUEBAS _
const Numero1 = numero => numero * numero2;
const resultadoM = numero;
const resultado2 = Numero1(2);
const numero2 = 3;
const almacenar = numero2
if(almacenar < numero2)
    resultadoM * numero2
    almacenar ++;
    console.log("El valor es: ", resultadoM);    


*/


/** RETO 6 */


// const aplicarIva = precio => precio * 1.19;
// const resultado1 = aplicarIva(2);
// console.log(resultado1);


/**Convertir A Cuadrado: */

//const Potencia = (base, exponente) => {
//    let resultadoM = 1;
//    let almacenar = 0;
//
//    while (almacenar < exponente) {
//        resultadoM = resultadoM * base;
//        almacenar++;
//    }
//
//    return resultadoM;
//};

//const resultado2 = Potencia(2, 3);
//console.log("El valor es: ", resultado2);

/** Convertir Es Mayor De Edad */


// const Edad = (edad) =>
//    {
//    if (edad >= 18) {
//        return "Usted Es Mayor De Edad";
//    } else {
//        return "Usted Es Menor De Edad";
//    }
// };

// const edad1 = 18;
// const resultado3 = Edad(edad1);
// const Valor1 = resultado3;

// console.log(`Su Edad Digitada Es: ${edad1},  ${Valor1}`);


/** Crear NombreCompleto(nombre, apellido) como arrow function */

// const Nombre = (nombre1, apellido1) => {
//    return `${nombre1} ${apellido1}`;
// };

// const resultado4 = Nombre("omar", "mayorga");
// console.log(`El valor es: ${resultado4}`); 






/** arreglos y objetos

const productos = [
 { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
 { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
 { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
 { id: 4, nombre: 'Monitor UHD 14', precio: 1250000, categoria: 'Pantallas', stock: 3 },
 { id: 5, nombre: 'PC ULTRA MEGA SNAP', precio: 444650000, categoria: 'PCs', stock: 6 },
 { id: 6, nombre: 'Teclado Gamer', precio: 350000, categoria: 'Perifericos', stock: 0 },
 { id: 7, nombre: 'Mouse Gamer', precio: 950000, categoria: 'Perifericos', stock: 0 },
 { id: 3, nombre: 'Camara', precio: 20000, categoria: 'Perifericos', stock: 16 },
 { id: 3, nombre: 'PORTATIL GAMER VULKAN', precio: 15650000, categoria: 'PCs Portatiles', stock: 2 },
 { id: 3, nombre: 'Monitor 6K 1000P', precio: 6500, categoria: 'Pantallas', stock: 3 }
];

 */

/** Reto 4: forEach() */

/** 
const productos = 
[
  { nombre: "Camiseta", precio: 25, stock: 10 },
  { nombre: "Pantalón", precio: 40, stock: 5 },
  { nombre: "Zapatos", precio: 60, stock: 8 }
];

productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`);
});

*/

