// EX 1  -------- console = 1 2 3 4



// EX 2 -------- 
/*
A) 19 21 23 25 27 30
 
B) Nao é suficiente

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let numero = 0

while (numero < lista.length) {
    numero++
    if (numero > 4) {
        console.log(numero);
    } 
} 
*/


// EXERCICIO 3 

// A - B

/*const arrayOriginal = [50, 40, 30, 20, 10] 
const loop = []

for (let index = 0; index < arrayOriginal.length; index++) { 

    let res = arrayOriginal[index]/10

    console.log (res)
*/

// C
/*
const arrayOriginal = [50, 40, 30, 20, 10] 
const loop = []

for (let index = 0; index < arrayOriginal.length; index++) { 

    let res = arrayOriginal[index]/10

    

    if (arrayOriginal[index] % 2 === 0) {
        loop.push(arrayOriginal[index])
       console.log(loop)
    }    
}
*/

//D 
/*
const arrayOriginal = [50, 40, 30, 20, 10] 
const loop = []

for (let index = 0; index < arrayOriginal.length; index++) { 

    let res = arrayOriginal[index]/10

    

    if (arrayOriginal[index] % 2 === 0) {
        loop.push(arrayOriginal[index])
       //console.log(loop)
    }    
console.log("o elemento index é", index)
console.log("o valor do Array é", arrayOriginal[index])
}
*/


// EXERCICIO E

const arrayOriginal = [50, 40, 30, 20, 10] 
const menorNumero = 10
const maiorNumero = 50
//const loop = []

for (let index = 0; index < arrayOriginal.length; index++) { 

    let res = arrayOriginal[index]/10

    if (arrayOriginal[index] === menorNumero ) {
        console.log(menorNumero)
    }    
    else{
        console.log(maiorNumero)
    }
/*    if (arrayOriginal[index] % 2 === 0) {
        loop.push(arrayOriginal[index])
       //console.log(loop)
    }    
console.log("o elemento index é", index)
console.log("o valor do Array é", arrayOriginal[index])
*/


}