const nome = "Rebeca"
const concatenacao = "Ola" + nome + "!"
const template = `
      Ola
      ${nome}!`
Console.log(concatenacao, template)
//expresoes
console.log(`1 + 1 = ${1 + 1}`)
const up = texto => texto.toUperCase()
console.log(`Ei...${up("cuidado")} !`)