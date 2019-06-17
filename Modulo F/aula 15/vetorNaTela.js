let valores = [12,45,2,66,75784,8675,345,23425,324,5,4,23,46,6]

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`Posição ${pos +1} do Vetor de valores = ${valores[pos]}`)
// }

var posicao = valores.indexOf(46)
var p2 = valores.indexOf(7)

console.log(`O valor 46 está na posição ${posicao}`)
console.log(`O valor 7 não tem no  array de valores, logo é retornado ${p2}`)