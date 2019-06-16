function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano').value
   
    var res = document.querySelector('div#res')
    
    if( formAno <= 0 || formAno > ano){
        alert('Verifique os dados e tente novamente')
    }
    else{

        var formSex = document.getElementsByName('radsex')
        var idade = ano - formAno
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
        if (formSex[0].checked){
            genero = "Masculino"
            
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'garoto.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src', 'homem.jpg')
            }
            else{
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        else {
            genero = "Feminino"

            if(idade >= 0 && idade < 10){
                img.setAttribute('src','menina.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'garota.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src', 'mulher.jpg')
            }
            else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos pessoa do gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
   
}