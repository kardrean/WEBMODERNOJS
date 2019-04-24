const produtos = [
    {nome: 'IPAD Pro', preco: 4500.99, fragil: true},
    {nome: 'Notebook', preco: 2500.99, fragil: true},
    {nome: 'PS4', preco: 1500.99, fragil: true},
    {nome: 'copo de plastico', preco: 15.00, fragil: false},
    {nome: 'Taça de vinho', preco: 18.00, fragil: true}
]
console.log(produtos.filter(function (p){
    return false
}))

const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
