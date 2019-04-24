//coleção dinamica par chave/valor
const produto = new Object
produto.nome = 'PS4'
produto ['marca do produto'] = 'SONY'
produto.preco = 199
console.log(produto)

//EXCLUIR VALORES
delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro = {
    modelo: 'AVENTADOR',
    valor: 70000000,
    proprietario:{
    nome: 'Kardrêan',
    idade: 27,
    endereco:{
        rua: 'Pasqualine',
        numero: 418
    }
}, condutores:[{
    nome: 'Mayara',
    idade:23 
        },{
            nome:'Kaceline',
        idade:22
        }
        
]}


carro.proprietario.endereco.numero = 1000000
carro ['proprietario'] ['endereco'] ['rua'] = 'Moinhos de Vento'
delete carro.condutores //deleta objetos

console.log(carro)
console.log(carro.condutores) // vai dar undefined pq cnondutores foi deletado
console.log(carro.condutores.length)