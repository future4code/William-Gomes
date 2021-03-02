
let horas = document.getElementById("horario")
let diasSemana = document.getElementById("dias-semana")

function botao(){
    if(diasSemana.value === "domingo") {
    
        let domingo = document.getElementById("domingo")
        let tarefa = document.getElementById("tarefaText")
        
        if(tarefa.value === ""){
        alert("Digite algo para colocarmos na sua agenda")
        }
    
        domingo.innerHTML+=`<p>${tarefa.value} ${horas.value}</p>`
        tarefa.value = ""
        

    }else if(diasSemana.value === "segunda" ){
        let segunda = document.getElementById("segunda")
        let tarefa = document.getElementById("tarefaText")
       
        if(tarefa.value === ""){
        alert("Digite algo para colocarmos na sua agenda")
        }

        segunda.innerHTML+=`<p>${tarefa.value} ${horas.value}</p>`
        tarefa.value = ""
        

    }else if(diasSemana.value === "terca" ){
        let terca = document.getElementById("terca")
        let tarefa = document.getElementById("tarefaText")
       
        if(tarefa.value === ""){
        alert("Digite algo para colocarmos na sua agenda")
         }
       
         terca.innerHTML+=`<p>${tarefa.value} ${horas.value}</p>`
        tarefa.value = ""
        

    }else if(diasSemana.value === "quarta" ){
        let quarta = document.getElementById("quarta")
        let tarefa = document.getElementById("tarefaText")
       
        if(tarefa.value === ""){
        alert("Digite algo para colocarmos na sua agenda")
        }
       
            quarta.innerHTML+=`<p>${tarefa.value} ${horas.value}</p>`
        tarefa.value = ""
        

    }else if(diasSemana.value === "quinta" ){
        let quinta = document.getElementById("quinta")
        let tarefa = document.getElementById("tarefaText")
       
        if(tarefa.value === ""){
        alert("Digite algo para colocarmos na sua agenda")
         }
       
         quinta.innerHTML+=`<p>${tarefa.value} ${horas.value}</p>`
        tarefa.value = ""
        

    }else if(diasSemana.value === "sexta" ){
        let sexta = document.getElementById("sexta")
        let tarefa = document.getElementById("tarefaText")
       
        if(tarefa.value === ""){
        alert("Digite algo para colocarmos na sua agenda")
        }
        
        
        sexta.innerHTML+=`<p>${tarefa.value} ${horas.value}</p>`
        tarefa.value = ""
        

    }else if(diasSemana.value === "sabado" ){
        let sabado = document.getElementById("sabado")
        let tarefa = document.getElementById("tarefaText")
        
        if(tarefa.value === ""){
        alert("Digite algo para colocarmos na sua agenda")
        }
        
        sabado.innerHTML+=`<p>${tarefa.value} ${horas.value}</p>`
        tarefa.value = ""
       
    }
}

function apagar() {
  
    let domingo = document.getElementById("domingo")
    let segunda = document.getElementById("segunda")
    let terca = document.getElementById("terca")
    let quarta = document.getElementById("quarta")
    let quinta = document.getElementById("quinta")
    let sexta = document.getElementById("sexta")
    let sabado = document.getElementById("sabado")
    domingo.innerHTML = ""
    segunda.innerHTML = ""
    terca.innerHTML = ""
    quarta.innerHTML = ""
    quinta.innerHTML = ""
    sexta.innerHTML = ""
    sabado.innerHTML = ""
}