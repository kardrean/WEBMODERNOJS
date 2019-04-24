// par nome valor
const saudacao = 'e ae man' // contexto léxico 1 
function exec ()
{
    const saudacao = 'fala ae meu parça' //contexto lexico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const Cliente = 
{
   nome: 'kardrean',
   idade: 26,
   peso: 86,
   endereço:
   {
     rua: 'venida pasqualine',
     numero: 418

   }
}
console.log(saudacao)
console.log(exec())
console.log(Cliente)