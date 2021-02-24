/*
    - - -   -   --  -   -    EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO - -- - - -- - - 

    ***** EX 1 *******

    FALSE 
    FALSE
    TRUE
    STRING


******************

//////// EX 2 /////////

    UNDEFINED 
    NULL 
    11
    20
    26
//////////////////////
*/




// EXERCICIOS DE ESCRITA DE CÓDIGO 
 
/*                                  1

let idade = prompt("Qual a sua idade?") 
let idade2 = prompt("qual a idade do(a) seu melhor amigo(a)")

idade11 = parseInt(idade)
idade22 = parseInt(idade2)

let resultado = idade11 > idade22

let diferença = idade11 - idade22

console.log("Sua idade é maior do que a do seu melhor amigo?" , resultado );

console.log("A diferença de idade é", diferença);

-----------------------------------------------------------
*/



// EXERCICIO 3
/*
let numb = prompt("digite um numero PAR")
const numb1 = parseInt(numb)

let divisao = numb1 % 2

console.log(divisao)

//quando insiro qualquer numero par o resultado é igual a 0
//se coloco um numero impar o resultado é 1
*/




//EXERCICIO 4
/*
let listaDeTarefas = []

let tarefa1 = prompt("digite a primeira tarefa que você pratica diariamente")
let tarefa2 = prompt("digite a primeira tarefa que você pratica diariamente")
let tarefa3 = prompt("digite a primeira tarefa que você pratica diariamente")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indice = Number(prompt("digite o numero da tarefa que ja foi realizada (0,1,2)"))

listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas)
*/




//EXERCICIO 4 

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu e-mail")

console.log("O email ", email, "foi cadastrado com sucesso. Seja bem-vinda(o), ", nome, "!");

