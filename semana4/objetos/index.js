let titulo = document.getElementById("titulo-post")
let autor = document.getElementById("autor-post")
let conteudo = document.getElementById("conteudo-post")
let conteudoEnviado = document.getElementById("container-de-posts")


let information = {
    Titulo: "",
    Autor: "",
    Conteudo: "",
    }

    information = {
        Titulo: titulo.value,
        Autor: autor.value,
        Conteudo: conteudo.value
        }

        console.log(information)


    function digitou(event){
      
    let array = [titulo.value, autor.value,conteudo.value]

    console.log(array)
   
    
}
 



function enviado() {
   
    conteudoEnviado.innerHTML = `${titulo.value} 
     
    ${autor.value} 
     
     ${conteudo.value}`
    
}
   
