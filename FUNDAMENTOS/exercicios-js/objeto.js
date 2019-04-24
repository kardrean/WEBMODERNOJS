const prod1 = {} // inserindo valores dentro de um objeto
prod1.nome = 'Playstation 4'
prod1.preco = 1350.75
prod1['SUPER DESCONTO'] = 0.50
prod1.celular = 'galaxy s10'
prod1.preco2 = 2999.99
prod1['MEGA DESCONTO'] = 0.80 // EVITAR ATRIBUTOS OCM ESPAÇO
console.log(prod1)
//declarar objeto ja com valor,e objeto dentro de outor memso ocm o mesmo nome porem tem que ser unico dentro de m mesmo
const prod2 = {
nome: 'game - ps4 nioh',
preco: 49.99 ,
obj: {
     verjap: 39.99,
     obj: {
        verusa: 29.99
      }
   }
}
console.log(prod2)
//{"nome": "Camisa Polo", "preco": 79.99 }  Json e uma forma textual de objeto