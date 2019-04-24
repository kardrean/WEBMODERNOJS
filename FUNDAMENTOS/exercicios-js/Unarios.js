let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // vai dar verdadeiro por que so vai debitar o valor de num2 pos comparação

console.log(num1 === num2) //falso por que num2 agora vale 1