//
const opciones = {
    math: {
        default: 0,
        alias: 'm'
    },
    ingles: {
        default: 0,
        alias: 'i'
    },
    programacion: {
        //default: 0,
        demand: true,
        alias: 'p'
    }
};

// incluir yargs
const argv = require('yargs')
    .command('promedio', 'Calcular el prom', opciones)
    .argv;

console.log(argv.math);
//console.log("Nom estu "+ argv.nom);
console.log(argv);
console.log("El promedio es: " + (argv.m + argv.i + argv.p) / 3);