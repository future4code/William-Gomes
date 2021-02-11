
function carregar() {
let msg = document.getElementById('msg')
let img = document.querySelector('div#imagem')

let data = new Date()
let hora = data.getHours()
msg.innerHTML = `agora sao ${hora} horas`

    if (hora >= 0 && hora < 12 ) {
        document.body.style.background = '#e2cd9f'
        img.innerHTML = '<img src="fotomanha.png">'       
    }
    
    else if (hora >= 12 && hora < 18){    
        document.body.style.background = '#b9846f'
        img.innerHTML = '<img src="fototarde.png">'       
    }
    
    else{
        document.body.style.background = '#515154'
        img.innerHTML = '<img src="fotonoite.png">'       
    }

}




