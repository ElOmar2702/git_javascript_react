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

/** Reto 5: map() 

const productos = [
  { nombre: "Mouse", precio: 50000, stock: 10 },
  { nombre: "Teclado", precio: 80000, stock: 5 },
  { nombre: "Monitor", precio: 600000, stock: 3 }
];
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log(preciosConIva);

const nombresMayuscula = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayuscula);

const resumenProductos = productos.map(producto => `${producto.nombre} cuesta: ${producto.precio}`);
console.log(resumenProductos);

*/

/**Reto 6: filter() y find() 

const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, stock: 10, categoria: "Tecnología" },
  { id: 2, nombre: "Teclado", precio: 80000, stock: 5, categoria: "Tecnología" },
  { id: 3, nombre: "Silla Gamer", precio: 450000, stock: 2, categoria: "Muebles" },
  { id: 4, nombre: "Escritorio", precio: 150000, stock: 0, categoria: "Muebles" },
  { id: 5, nombre: "Monitor", precio: 600000, stock: 3, categoria: "Tecnología" }
];

const disponibles = productos.filter(producto => producto.stock > 0);
const producto3 = productos.find(producto => producto.id === 3);

console.log("Productos disponibles:", disponibles);
console.log("Producto con ID 3:", producto3);

const mayor100k = productos.filter(producto => producto.precio > 100000);
console.log("Productos > $100.000:", mayor100k);

const entre50ky200k = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
console.log("Productos entre $50.000 y $200.000:", entre50ky200k);

const soloTecnologia = productos.filter(producto => producto.categoria === "Tecnología");
console.log("Categoría Tecnología:", soloTecnologia);

const producto5 = productos.find(producto => producto.id === 5);
console.log("Producto con ID 5:", producto5);

const buscarProducto = (id) => {
  return productos.find(producto => producto.id === id);
};

console.log("Búsqueda con función (ID 2):", buscarProducto(2));

*/

/** Reto 7: some(), every() y reduce() 

const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, stock: 10, categoria: "Tecnología" },
  { id: 2, nombre: "Teclado", precio: 80000, stock: 5, categoria: "Tecnología" },
  { id: 3, nombre: "Silla Gamer", precio: 450000, stock: 2, categoria: "Muebles" },
  { id: 4, nombre: "Escritorio", precio: 150000, stock: 0, categoria: "Muebles" },
  { id: 5, nombre: "Monitor", precio: 600000, stock: 3, categoria: "Tecnología" }
];

const hayAgotados = productos.some(producto => producto.stock === 0);
const preciosValidos = productos.every(producto => producto.precio > 0);
const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);

console.log("¿Existe algún producto agotado?:", hayAgotados);

const hayCaros = productos.some(producto => producto.precio > 1000000);
console.log("¿Hay algún producto > $1.000.000?:", hayCaros);

console.log("¿Todos tienen precio mayor a 0?:", preciosValidos);

const stockValido = productos.every(producto => producto.stock >= 0);
console.log("¿Todos tienen stock >= 0?:", stockValido);

console.log("Valor total del inventario: $", valorInventario);

*/

/** Reto 8: JavaScript moderno */

// Template literals
//console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

// Desestructuración
//const { nombre, precio, stock } = productos[0];
// console.log(nombre, precio, stock);

// Spread
//const productoActualizado = {
 //..productos[0],
 //stock: 8
//};

// Operador ternario
//const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
//console.log(estado);



const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, stock: 10 },
  { id: 2, nombre: "Teclado", precio: 80000, stock: 5 }
];

const productoActualizado = {
  ...productos[0], 
  precio: 45000,   
  stock: 8        
};

const { nombre: nombreProd, precio: precioProd, stock: stockProd } = productoActualizado;

const mensaje = `El producto ${nombreProd} ahora cuesta $${precioProd} y su estado es: ${stockProd > 0 ? 'Disponible' : 'Agotado'}.`;

console.log(mensaje);