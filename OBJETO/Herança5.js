console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('') 
}
console.log(' Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log(['Kardrean', 'Pedro', 'Mayara', 'Renata'].first())

//Não faça isso(nao substitua function ocm efeitos globais)

String.prototype.toString = function(){
    return "Ferrou tudo meu CHapa"

}

console.log('Escola Cod3r'.reverse())
