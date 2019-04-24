//object.preventExtention
const produto  = Object.preventExtensions({
    nome: 'Mafia III', preco: 19.99, tag: 'PROMOÇÃO BLACK FRIDAY'
})

console.log('EXTENSIVEL: ', Object.isExtensible(produto))

produto.nome = 'nioh'
produto.descricao = 'jogo de console'
delete produto.tag
console.log(produto)

//object seal (nao consegue adcionar nem excluir valores, porem consegue modificar)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 22
console.log(pessoa)

//Objet.freeze = selado + valores constantes = objetos valores inalteraveis
