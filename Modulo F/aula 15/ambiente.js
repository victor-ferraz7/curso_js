let num = [5,4,1,3,5,6]
num.push(8)

console.log(`Os itens do vetor são: ${num}`)
console.log(`O Array tem ${num.length} elementos`) 
console.log(`O primeiro elemento do Array é o: ${num[0]}`)
console.log(`O Array em ordem crescente fica: ${num.sort()}`)

for (i = 0 ; i < num.length ;i++){
    console.log(`O elemento número ${i+1} do Array é ${num[i]}`)
}