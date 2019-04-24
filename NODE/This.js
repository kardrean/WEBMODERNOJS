console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis (){
    console.log('DENTROS DE UMA FUNÇÃO O HIS N]AO APONTA PRA EXPORTS..')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //dentro de uma função aponta pra global
    //this.perigo= 'CUIDADO AO APONTAR VARIAVEIS GLOBAIS'
}

logThis()