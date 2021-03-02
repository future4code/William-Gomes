// -- EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO -- 

// EX 1 

// A) 10 , 50 

// B) Daria um erro, a função necessita de algo para mostra-la

//---------------------------------------------


// EX 2 

//A)irá mostrar Darvas e Caio na saída

//B) irá mostrar Amanda e Caio na saída

//-------------------------------------------------



// EX 3 
 // NOME = include 
  // os numeros pares do Array inicial (include) serão levados ao ArrayFinal 



// ---------------------------------------------------


  // EXERCICIO DE ESCRITA DE CÓDIGO 

// EX 4 
/*
let informacao = function detalhes() {

    return ("Eu sou William, tenho 18 anos, moro em Sorocaba e sou técnico");
}

console.log(informacao)*/


//---------------------------------------------------

// EX 4 
 /*   
const n = prompt("digite seu nome") 
const i = Number (prompt("digite sua idade"))
const c = prompt("digite sua cidade")
const s = confirm("você é estudante?")
    
let coisasAqui = (coisa1,coisa2,coisa3,coisa4) =>{
  

let resultado = console.log(`O seu nome eh ${n}, tem uma idade de ${i}, mora na cidade de ${c}, é estudante? ${s}`)

return resultado
}

coisasAqui(n, i, c, s)
*/

// ------------------------------------


// EX 5

/*  -------------- EX A) ----------------
let n1 = Number(prompt("Digite um numero"))
let n2 = Number(prompt("Digite outro numero"))

function somaDeNumeros(num1, num2) {
  
  let resultado = num1 + num2

  return resultado 
}
console.log(somaDeNumeros(n1,n2))*/

// --------------------------------------



/* -------------- B) -------------- 
let n1 = prompt("Digite um numero")
let n2 = prompt("Digite outro numero")

function somaDeNumeros(num1, num2) {

  if (num1 >= num2) {
    console.log("true")
  } else {
    console.log("false")
  }
}
console.log(somaDeNumeros(n1,n2))

 --------------------------------------*/ 

/* ------------- C) -------------------
const palavra = prompt("digite uma palavra")

function ex(string) {
  let resultado = [string,string,string,string,string,string,string,string,string,string]

  return resultado
}
console.log(ex(palavra))

 ---------------------------------------*/



// EX 6

/* -------------A)-------------
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function  arrayzinho(a,b,c,d,e,f,g,h,i,j) {
  

return arrayzinho.length
}
console.log(arrayzinho(array))*/

//-------------------------------------------------

/*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function parImpar(a,b,c,d,e,f,g,h,i,j) {
  
  for (let index = 0; index <= parImpar.length; index++) {
    
    let element = parImpar(index);
  
   
  }

}

console.log(parImpar(array))*/