var amigo = {
    nome: "José",
    sexo: "M",
    peso: 90.4 ,
    engordar(p){
        amigo.peso += p
    }
}

amigo.engordar(5)

console.log(amigo.peso)