function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 1.3, 4.5))

console.log(soma(3.4, 5.6, 8.9, "teste"))
console.log(soma('a', 'b', 'k',))