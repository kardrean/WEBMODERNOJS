function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto___ === obj2.__proto___)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia meu nome e: ${this.nome}!`)
}
obj1.falar()
obj2.nome = "Kardrêan"
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome= "Goku"
obj3.falar()
//Resumindo essa bagaça ...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype )
console.log(MeuObjeto.__proto__ === Function.prototype1)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)