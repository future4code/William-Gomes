

//Exercício 1
function inverteArray(array) {
  return array.reverse ()
}

//Exercício 2

const arrayVazio = []
function retornaNumerosParesElevadosADois (array) {

   array.forEach((elementos) => {
      if (elementos%2===0) {
         arrayVazio.push(elementos**2)
      }
   })  
return arrayVazio
}

//Exercício 3

function retornaNumerosPares (array) {
  const arrayVazio3 = []
   array.forEach((elementos) => {
      if (elementos%2===0) {
         arrayVazio3.push(elementos)
      }
   })  
return arrayVazio3
} 


//Exercício 4
let arrayVazio4 = []
function retornaMaiorNumero(array) {
   
   arrayVazio4 = Math.max(...array)
 
   return arrayVazio4
}


//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
const respostas = [false, false, true, true, true] 
   return respostas
}

//Exercício 7


function retornaNNumerosPares(n) {
   const arrayVazio7 = []
   
   for (let index = 0;index < n*2; index++) {
   

   if (index%2===0) {
     arrayVazio7.push(index)
  }   
  
   }
  return arrayVazio7  

}

// Exercício 8

function checaTriangulo(a, b, c) {
   if(a !== b && b !== c) {
      return'Escaleno'
     } else if(a === b && b === c) {
       return'Equilátero'
      } else {
        return'Isósceles'
      }
   
}


// Exercício 9

function comparaDoisNumeros(num1, num2) {
let maiorNumero;
let menorNumero ;
let maiorDivisivelporMenor;

if (num1 > num2) {
   maiorNumero = num1;
   menorNumero = num2;
} else {
   maiorNumero = num2;
   menorNumero = num1;
}

maiorDivisivelporMenor = maiorNumero % menorNumero === 0;


const diferenca = maiorNumero - menorNumero;


return {
   maiorNumero: maiorNumero,
   maiorDivisivelporMenor: maiorDivisivelporMenor, 
   diferenca: diferenca
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {

}

//Exercício 11

function ordenaArray(array) {
}
// Exercício 12

function filmeFavorito() {
    
 const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt','Stanley Tucci']
 }
return filme
}

// Exercício 13

function imprimeChamada() {
  /* const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
 let atoresConcat = ""
 for (let i = 0; i < filme.atores.length; i++) {
    if (i === filme.atores.length - 1) {
       atoresConcat += filme.atores[i]
    } else {
       atoresConcat += filme.atores[i] + ","
    }
    
 }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido pelo ${filme.diretor} e estrelado por ${atoresConcat}.`*/

  const filme = {
   nome: 'O Diabo Veste Prada',
   ano: 2006,
   diretor: 'David Frankel',
   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

let atoresConcat = ""
for(let i = 0; i < filme.atores.length; i++) {
if(i === filme.atores.length - 1) {
 atoresConcat += filme.atores[i]
} else {
  atoresConcat += filme.atores[i] + ", "
 }
}

return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido pOr ${filme.diretor} e estrelado por ${atoresConcat}.`


}



// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo = { 
      largura: lado1, 
      altura: lado2,
      perimetro: 2 * (lado1 + lado2), 
      area: lado1 * lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
 
 const pessoa1 = {
      nome: "william", 
      idade: 18,
      email: "williamgofe119@gmail.com.br",
      endereco: "Rua da bananinha, 58"
   }
    
   return {
      ...pessoa, 
      nome: 'ANÔNIMO'
     }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
 const novoArray = arrayDePessoas.filter((pessoas) => {
    return pessoas.idade >= 18
 })
 return novoArray
}

function menoresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((pessoas) => { 
      return pessoas.idade <= 18
   })
  return novoArray
}


// Exercício 17, letra A

const arrayTest = [1,2,3,4,5,6]
console.log(arrayTest)

function multiplicaArrayPor2(array) {
  const novoArray = array.map((num)=>{
     return num*2
  }) 
  return novoArray
}


// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const novoArray = array.map ((num) => {
      return (num*2).toString()
   })
return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   
const novoArray = array.map((num) => {
   if (num % 2 === 0) {
      return `${num} é par`
   }    
   else{
      return `${num} é ímpar`
   }   
})
return novoArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const novoArray = pessoas.filter((infos) => { 
      if (infos.altura >= 1.5 && infos.idade > 14 && infos.idade < 60){
         return true
      }
   })
return novoArray
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
 let variavelaParaCommitNovo =""
 
   let pessoasNaoAutorizadas = []

  for (const infos of pessoas) {
   if (infos.altura < 1.5 || infos.idade < 14 || infos.idade > 60){
     
      pessoasNaoAutorizadas.push(infos)
   }
  }
   return pessoasNaoAutorizadas
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}