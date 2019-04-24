//usando para somar valores

const alunos = [
    {nome: 'Naruto', nota: 7.7, bolsista: true},
    {nome: 'Sasuke', nota: 9.1, bolsista: true},
    {nome: 'Sakura', nota: 8.2, bolsista: true},
    {nome: 'Temari', nota: 9.5, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0 ) //no caso 0 posso mudar o valor para iniciar com o alor omado queeu quiser

console.log(resultado)