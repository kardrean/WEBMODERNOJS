Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i< this.length; i++){
        newArray.push(callback(this[i], i, this))
    } 
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 10.99}',
    '{ "nome": "Kit de lapis", "preco": 7.56}',
    '{ "nome": "Caneta", "preco": 0.50}'
]

//RETORNAR UM ARRAY COM OS PREÇOS DOS PRODUTOS

const paraRetonar = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraRetonar).map(apenasPreco)
console.log(resultado)
