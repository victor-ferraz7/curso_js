function carregar(){
var mensagem = document.getElementById('msg')
var imagem = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()



mensagem.innerHTML = `Agora são ${hora}h  `
mensagem.style.marginTop = '10px'

if(hora >= 0 && hora < 12){
    imagem.src = 'manha.jpg'
}
else if(hora >=12 && hora <= 18){
    document.body.style.backgroundColor= '#f46842'
    imagem.src = 'tarde.jpg'
     
}
else {
    document.body.style.backgroundColor = '#080223'
    imagem.src = 'noite.jpg'
}

}

