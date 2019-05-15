// const estudiante1 = require("./calculos");
// console.log(estudiante1.estudiante);

//file system
const fs = require('fs');

// Destructuración ejemplo#1
const { estudiante, obtenerNota } = require("./calculos");
console.log(estudiante.nombre + " su nota es: " + obtenerNota(4, 3, 5));

// Desctructuración ejmplo#2
let { nombre: nom, edad, notas: { math, ingles, programacion } } = estudiante;

console.log('Nombre: ' + nom + ' Promedio: ' + obtenerNota(math, ingles, programacion));


// crear archivo
let crearArchivo = estudiante => {
    text = "el nombre es: " + nom + " nota: " + obtenerNota(math, ingles, programacion);
    fs.writeFile("promedio.txt", text, (err) => {
        if (err) throw (err);
        console.log("Se ha creado el archivo");
    });
}

crearArchivo(estudiante);