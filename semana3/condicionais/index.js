//                             EXERCICIOS DE INTERPRETAÇÃO DE CODIGOS

// #EX 1 

// O programa mostra a sobra da divisão inteira entre 2 numeros, numeros pares, numeros impáres 


// ------------------------------------------------------------------



// #EX 2

// A) para mostrar para o cliente o valor da fruta dependendo da qual ele quer comprar 

// B) R$ 2,25

// C) O preço da Pêra é  5.5 5 


//---------------------------------------------------------------------





// #EX 3

// A) pedindo para que o usuário digite um numero 

/*          NUMERO = 10         
                    
                 ↓

    B - C)  console.log("Esse número passou no teste") 
    let mensagem = "Essa mensagem é secreta!!!"
    
    
            NUMERO = -10
                 ↓

    Daria erro pois a mensagem só esta no * if = true * , como o console.log esta fora deste if , ele dara erro e nao mostrara nada.  

*/

// ---------------------------------------------------------------





//                  #EXERCICIOS DE ESCRITA DE CÓDIGO



    //# Exercicio 4



/*
let idade = Number(prompt("Digite a sua idade"))

    if (idade === String) {
        console.log("Digite um sua idade em forma numérica")

    } else {
      
        if (idade < 0 ) {
           
            console.log("Idade inválida")
        
        } else if (idade < 18) {
          
            console.log("Você não pode dirigir.")
         
            
        } else if (idade >= 18) {
                
            console.log("Você pode dirigir");
        
        } else {
            console.log("Digite um numero");    
        }        
                
    }
        
*/

// -------------------------------------------------------------------




// EXERCICIO 5
/*
let dia = prompt("Digite a primeira letra do seu turno (M, V ,N)")
if (dia === "M") {
    console.log("Bom dia !");
} else if (dia === "V"){
    console.log("Boa tarde")
}else if (dia === "N"){
    console.log("Boa noite!");
}else{
    console.log("Letra inválida");
}
*/

// --------------------------------------------------------




// EXERCICIO 6
/*
let dia = prompt("Digite a primeira letra do seu turno (M, V ,N)")

switch (dia) {
    case "M":
        console.log("Bom dia!");
    break;
        
    case "V":
        console.log("Boa tarde!");
    break;
    case "N":
        console.log("Boa noite!");
    break;
    
    default:
        console.log("Letra inválida");
    break;
}
*/

// ------------------------------------------------------------




// EXERCICIO 7 

let filme = prompt("Qual o genêro do filme?")
let preco = prompt("Qual o preço do ingresso?")

if (filme === "fantasia" && preco <= 15) {
    let resposta = prompt("Topa assistir o filme ?")
        if (resposta === "sim") {
            console.log("Bom filme!");

} if (resposta === "nao") {
    console.log("Escolha outro filme");
}
}else {
    console.log("Requisitos nao cumpridos");
}