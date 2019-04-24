const escola = 'kardrean7'
console.log(escola.charAt(3)) //exibe no caso a 3° letra começando pelo 0 no caso aqui o D
console.log(escola.charAt(15)) //como não existe letra parao numeor ele vai retornar o valor NULO

console.log(escola.charCodeAt(8)) //retorna o valor dentro da tabela unicode
console.log(escola.indexOf('7')) //

console.log(escola.substring(1)) //digita na telaa partir do indice indicado
console.log(escola.substring(0, 3)) // escole de onde ate onde vai ser exibido
console.log('Esse '.concat(escola).concat(' VAI SER UM PUTA PROGRAMADOS JS')) //concatenar string com variaveis posso usar o + no lugar do concat
console.log(escola.replace(/\w/g, 'k')) // substitui todas as letrar pelaque selecionei
console.log(escola.replace(7, 'k')) //substitui o numeor pelo caacter que eu qusier

console.log('kardrean,carlos,monte'.split(','))//separa e um array com aspas e virgula
