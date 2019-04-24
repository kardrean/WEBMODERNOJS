let a = 3
global.b = 123 //global no node tem a mesma função do Window no navegador
this.c = 789
this.d = false
this.e = 'zueira never ends'
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports) // retorna todos os valores com this
//module.exports  { c: 789, d: false, e: 'zueira never ends' }
//criando uma variavel global: sem var nem let nem const
abc = 9090 // nunca fazer esse tipo  de declaração global !!!!
console.log(global.abc)
