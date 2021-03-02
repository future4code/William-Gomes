/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack")
const carta = comprarCarta()
const carta1 = comprarCarta()
const carta22 = comprarCarta()
const carta11 = comprarCarta()
const carta223 = comprarCarta()
const carta2 = comprarCarta()
 
const res1 = carta.valor + carta1.valor
const res22 = carta2.valor + carta22.valor + carta223.valor
const res12 = carta.valor + carta1.valor + carta11.valor
const res2 = carta2.valor + carta22.valor

if (confirm("Deseja iniciar um novo jogo?")){
 
   
   console.log(`Usuário  - cartas: ${carta.texto} ${carta1.texto} - pontuação ${res1}`)
   
   console.log(`Computador - cartas: ${carta2.texto} - pontuação ${carta2.valor}`);   
   
      }else if (carta.texto === "A" && carta1.texto === "A"){
      const cartaReverse = comprarCarta() 
      const cartaReverse1 = comprarCarta()
      const resReverse = cartaReverse.valor + cartaReverse1.valor
      console.log(`Usuário  - cartas: ${carta.texto} ${carta1.texto} - pontuação ${resReverse}`)
      }
      
      
      
   if (confirm("Computador, deseja comprar mais uma carta? ")) {
     
      console.log(`Computador - cartas: ${carta2.texto} ${carta22.texto} - pontuação ${res2}`)
     
      }else if (res2 > 21){
        console.log("Computador perdeu!");
      
      }else{
         console.log(`Valor final(Computador): ${res2}`);
      }
   
   
   if (confirm("Usuário,deseja comprar outra carta?")) {  
     
      console.log(`Usuário  - cartas: ${carta.texto} ${carta1.texto} ${carta11.texto} - pontuação ${res12}`)
    
      }else if (res1 > 21){
            console.log("Usuário perdeu!")
      
      }else if (res1 > res2){
            console.log("Usuário ganhou!");
      
      }else if (res2 > res1){
            console.log("Computador ganhou!")
      
      }else if(res2 === res1){
            console.log("Empate!") 
      }else{
            console.log(`Valor final(Usuário): ${res1}`);   
      }   
      
   
   if (confirm("Computador, deseja comprar mais uma carta? ")) {  
      console.log(`Computador - cartas: ${carta2.texto} ${carta22.texto}${carta223.texto} - pontuação ${res22}`)

      }else if (res22 > 21){
         console.log("Computador perdeu!");
      
      }else if(res22 === res12){
         console.log("Empate!") 

      }else if(res22 > res12){
      console.log("O computador venceu!");
   
      }else if(res22 < res12){
      console.log("Computador perdeu!");
   
      }else {
      console.log(`Valor final(computador): ${res2}`);
      }
  