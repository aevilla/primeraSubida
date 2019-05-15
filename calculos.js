let estudiante = {
    nombre: 'juan',
    edad: 25,
    notas: {
        math: 3,
        ingles: 4,
        programacion: 5
    }
}

obtenerNota = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;

// console.log(obtenerNota(2,3,4));
// console.log("Estu: "+(estudiante.notas.ingles+estudiante.notas.math+estudiante.notas.programacion)/3);

module.exports = {
    estudiante,
    obtenerNota
};