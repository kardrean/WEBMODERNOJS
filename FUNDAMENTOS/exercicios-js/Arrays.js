const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // emjs nao da erro mas da undefined pq esse valor não existe no array
valores [4] = 10
console.log(valores)
console.log(valores.length) // comando length diz o numero total de valores do  array

valores.push({id: 3}, false, null, 'e nois que ta' ) // comando push insere valores dentro de um array seja eles qual forem
console.log(valores)

console.log(valores.pop()) //retira o ultimo valor do array
delete valores [0] //seleciona o valor do arrayque quer ser deletado
console.log(valores) 

console.log(typeof valores) //em js arrays são do tipo object
