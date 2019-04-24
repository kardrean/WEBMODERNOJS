function boanota(nota) {
    if (nota >= 7){
        console.log('Você esta aprovado com a nota ' + nota)
    }
}
  
boanota(8.1)
boanota(6.7)

function seForverdadeeufalo (valor){
    if (valor) {
        console.log('é verdade ....' + valor)
    }
}
seForverdadeeufalo()
seForverdadeeufalo(null)
seForverdadeeufalo(undefined)
seForverdadeeufalo(NaN)
seForverdadeeufalo('')
seForverdadeeufalo(0)
seForverdadeeufalo(-1)
seForverdadeeufalo(' ')
seForverdadeeufalo('?')
seForverdadeeufalo([])
seForverdadeeufalo([1, 2])
seForverdadeeufalo()
seForverdadeeufalo({})