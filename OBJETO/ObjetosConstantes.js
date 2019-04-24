
const pessoa = { nome: 'Kardrean'}
pessoa.nome = 'Carlos'
console.log(pessoa)

//pessoa = {nome: 'JOcival'} não posso mudar o valor de uma constante sem usar ponto .
Object.freeze(pessoa)

//Object.freeze deixa o objeto imutavel

pessoa.nome = 'Cledeusvaldo'
console.log(pessoa)

const personcongelada = Object.freeze({nome: 'Yuno'})
pessoa.nome = 'Kaneki'
console.log(personcongelada)