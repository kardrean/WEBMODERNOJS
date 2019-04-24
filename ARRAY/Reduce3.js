Array.prototype.reduce2 = function(callback, ValorInicial) {
   const indiceInicial = ValorInicial ? 0 : 1 
   let acumulador = ValorInicial || this[0]
   for (let i = indiceInicial; i < this.length;i++ ){
       acumulador = callback(acumulador, this[i], i, this)
   }
   return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6 ,7]
console.log(nums.reduce2(soma, 21))
