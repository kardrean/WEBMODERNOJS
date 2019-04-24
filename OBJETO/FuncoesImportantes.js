const pessoa = {
    nome: 'Kardrêan',
    idade: 26,
    peso: 85
}

console.log(Object.keys(pessoa)) //pega so atributos
console.log(Object.values(pessoa)) // pega só os valores
console.log(Object.entries(pessoa)) //todos os valores  separados dentro de arrays

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '18/03/1992'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ECAMAscrip 2015)

const dest = {a: 1}
const o2 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)