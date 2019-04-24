// operador  ... rest (juntar)/spread(espalhar)
//usar o rest como parametro para função
//usar spread como objeto

const funcionario = {nome: 'Maria', salario: 2348.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['Gaara', 'Sasuke']
const GrupoFinal = ['Naruto', ...grupoA, 'Shikamaru'] 
console.log(GrupoFinal)

