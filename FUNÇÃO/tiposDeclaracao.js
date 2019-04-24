console.log(soma(5, 2))
//função declarativa (melhor forma de declarar a função pois ela pode ser chamada em linhas anteriorres)
function soma (x, y){
    return x + y 
}

//function expression
const sub = function (x, y){
     return x - y
}
console.log(sub(5, 2))
//named function expressions
const mult = function mult(x, y){
    return x * y 
}

console.log(mult(5, 2))