/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto)         
    
    
    // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    
    
    console.log(carta.valor)                                              
    
    // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
 console.log("Bem vindo ao jogo de Blackjack")

 if (confirm("Deseja iniciar um novo jogo?")) {
   const carta = comprarCarta()
   let resultado = carta.valor + carta.valor
   console.log(`Usuário - cartas: ${carta.texto} ${carta.valor}  - pontuação ${resultado}`);
   
   const carta2 = comprarCarta()
   let resultado2 = carta2.valor + carta2.valor
   console.log(`Computador - cartas: ${carta2.texto} ${carta2.valor} - pontuação ${resultado2}`);

  if (resultado > 21) {
     console.log("Usuário perdeu");
}
 
  else if (resultado2 > 21) {
   console.log("Computador perdeu");
}

 
 else if (resultado > resultado2) {
   console.log("Usuário ganhou");
   console.log("Computador perdeu")  
}
else if (resultado2 > resultado) {
   console.log("Computador ganhou");
   console.log("Usuário perdeu");
}

else if (resultado2 === resultado) {
   console.log("empate!");
}

} else {
    console.log("O jogo acabou.")
 }

*/
 