//criar funçã ode forma literal
function func1() { }
//armazenar função em uma variavel
const func2 = function () { }
//armazenar função em um array
const array = [function (a, b) {return a + b}, func1, func2]
console.log(array[0](2 , 3))
//armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//passar funçã ocomo paramentro
function run(fun){
    fun()
}

run (function(){console.log('TESTE DE PAMONHA.....')})

//UMA FUNÇÃO PODE RETORNAR /CONTER OUTRA

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3) (4)
const fiveplus = soma(2,3)
fiveplus(4)