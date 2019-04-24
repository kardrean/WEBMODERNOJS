const alunos = [
    {nome: 'Naruto', nota: 7.7, bolsista: true},
    {nome: 'Sasuke', nota: 9.1, bolsista: true},
    {nome: 'Sakura', nota: 8.2, bolsista: true},
    {nome: 'Temari', nota: 9.5, bolsista: false}
]

//todos os alunos são bolsistas?
const todosbolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosbolsistas))

//algum launo e bolsista?
const algumbolsista  = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumbolsista))