function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    
    res.innerHTML = 'Contando : '

  if(inicio == ''){
      inicio = 0
  }
  if(fim == '' && fim == 0){
      alert("[ERRO] favor preecher corretamente os dados do fim  ")
  }
  if(passo == '' && passo == 0){
      alert('[ERRO] Passo inválido')
  }

  if( inicio < fim){
    for( i = inicio; i <= fim; i += passo){
        res.innerHTML += `${i} \u{270D}`    
    }
 
    res.innerHTML += `\u{1F3AF}`
  }
  else{
      for(i = inicio; i > fim; i -= passo){
          res.innerHTML += `${i} \u{270D}`
      }
      res.innerHTML += `\u{1F3AF}`
  }
}

