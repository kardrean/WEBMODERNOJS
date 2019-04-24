//usando a notação literal
const obj = {}
console.log(obj)

//object em js
console.log(typeof Object, typeof new Object)
//chamando novo objeto

const obj1 = new Object
console.log(obj1)

//funções construtoras
function Produto(nome, preco, desc){
    this.nome= nome
    this.getprecoComdesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('PS4', 1499.99, 0.25)
const p2 = new Produto('Notebook', 2500.99, 0.30)
console.log(p1.getprecoComdesconto(), p2.getprecoComdesconto())

//function factory

function newfunc (nome, salabase, faltas){
    return{
        nome,
        salabase,
        faltas,
        getSalario(){
            return (salabase / 30 ) * (30 - faltas)
        }
    }
}

const f1 = newfunc('Kardrean', 9999, 1)
const f2 = newfunc('Anderson', 2599.99, 5)
console.log(f1.getSalario(), f2.getSalario())

//object.creat

const filha = Object.create(null)
filha.nome = 'Zoe'
console.log(filha)

//função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "SOU UM JSON"}')

console.log(fromJSON.info)