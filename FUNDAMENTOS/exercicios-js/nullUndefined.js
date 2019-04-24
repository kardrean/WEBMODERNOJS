let valor // valor nao definido undefined
console.log(valor)
// console.log(valor2) vai dar erro not defined por que ela não foi nem declarada.
valor = null //ausencia de valor
console.log(valor)
//Console.log(valor.toString()) isso geraria errro por que não tem como apontar nada para um valor nulo
const produto = {}
//console.log(produto.preco) isso dara undefined, por que o preço não esta concatenado dentro do objeto
console.log(produto) //exibira o par de chaves {} vazio
produto.preco = 3.77 // atribuindo valores dendro das chaves
console.log(produto)

produto.preco = undefined //evitar usar isso para limpar variaveis melhor usar 0 ou null
console.log(!!produto.preco) // o valor do produtopreço esta undefined
//delete produto.preco deletar o atributo de um objeto
console.log(produto)

produto.preco = null //seria deixar o preço do produto sem nada
console.log(!!produto.preco)
console.log(produto)
