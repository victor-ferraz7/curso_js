function gerar(){
    var numero = Number(document.getElementById('numero').value)
    var res = document.getElementById('res')
    var textbox = document.createElement('textarea')
    textbox.setAttribute('id','tbda')

    for(i = 0; i <= 10 ; i++){
        var soma = i * numero
        textbox.innerHTML= `${numero} x ${i} = ${soma}`
    }

    res.appendChild(textbox)
    gerar.stopEventPropagation()
}