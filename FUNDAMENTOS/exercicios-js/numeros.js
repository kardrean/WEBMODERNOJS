const peso1 = 1.0
const peso2 = Number ('2.0') 
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
//se o numero flor um float mesmo com 1.1 ele vai ler o numeor inteiro se for 1.1 ele vai lero numero como ponto flutuante

const avaliacao1 = 9.567
const avaliacao2 = 6.536

const total = avaliacao1 * peso1 +  avaliacao2 * peso2
const media = total / (peso1 + peso2 )
console.log(media.toFixed(2))
console.log(media.toString(2)) // em binario
console.log(typeof media)//tipo da variavel
console.log(typeof Number)// com N maicusculo e uma função