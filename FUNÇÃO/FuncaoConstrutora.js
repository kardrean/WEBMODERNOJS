function Carro(VeloMax = 200, delta = 5){
    //atributo provido
    let VeloxAtual = 0

    //metodo publico
    this.acelerar = function(){
        if (VeloxAtual + delta <= VeloMax) {
            VeloxAtual += delta
        } else {
            VeloxAtual = VeloMax
        }
    }
    //metodo publico, usso do this toprna a função publica
    this.getVeloxAtual = function (){
        return VeloxAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVeloxAtual())

const lambuguine = new Carro(350, 20)
lambuguine.acelerar()
console.log(lambuguine.getVeloxAtual())

console.log(typeof Carro)
console.log(typeof lambuguine)
