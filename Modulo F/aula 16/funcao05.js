// Recursividade

function fatorial2 (n){
    if (n == 1){
        return 1
    }
    else{
        return n * fatorial2(n - 1)
    }
}

console.log(fatorial2(5))