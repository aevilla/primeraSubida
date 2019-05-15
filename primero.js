function promedio(nota_uno, nota_dos, nota_tres) {
    let resultado = (nota_uno + nota_dos + nota_tres) / 3;
    console.log(resultado);
}

// función flecha
let promedio2 = (nota_uno, nota_dos, nota_tres) => {
    let resultado = (nota_uno + nota_dos + nota_tres) / 3;
    console.log(resultado);
}

let promedio3 = (nota_uno, nota_dos, nota_tres) => console.log((nota_uno + nota_dos + nota_tres) / 3);

//nonblocking
let promedio4 = (nota_uno, nota_dos, nota_tres) => {
    setTimeout(function () {
        let resultado = (nota_uno + nota_dos + nota_tres) / 3;
        console.log(resultado);
    }, 2000) 
}
// promedio(5, 2, 3);
// promedio4(3,5,3);
// promedio2(2, 3, 4);
// promedio3(5,5,5);

//callbacks
let promedio5 = (nota_uno, nota_dos, nota_tres, callbacks) => {
    setTimeout(function () {
        let resultado = (nota_uno + nota_dos + nota_tres) / 3;
        callbacks(resultado);
    }, 0);
}

promedio5(1,1,5,function(resultado){
    console.log(resultado);
})