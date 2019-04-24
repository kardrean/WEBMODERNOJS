//Closure e o escopo criado quando uma função e declarada
//este escopo permite  a funçã oacessar e manipular variveis externas a função
//contexto lexico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x 
    }
    return dentro
}

const Myfunction = fora ()
console.log(Myfunction())