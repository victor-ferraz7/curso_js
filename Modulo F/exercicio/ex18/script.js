var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function ehNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function naLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function add(){
    
    if(ehNumero(num.value) && !naLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        alert('Valor inválido ou já  encontrado na lista')
    }
    num.value = ''
    num.focus()

}

function finalizar(){

    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }
    else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(v in valores){
            soma += valores[v]

            if (valores[v] > maior){
                maior = valores[v]
            }
            if(valores[v] < menor){
                menor = valores[v]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} numeros cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> A soma de todos os múmeros cadastrados é ${soma}`
        res.innerHTML += `<p> A média dos números cadastrados é ${media}`
    }

}