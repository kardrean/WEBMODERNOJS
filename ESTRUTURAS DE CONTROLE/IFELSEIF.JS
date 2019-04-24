Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const impriresult = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quador de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3,99)){
        console.log('Reprovado')
    } else {
        console.log('NOTA INVALIDA')
    }
    console.log('FINAL!!!')
}
impriresult(10)
impriresult(9.5)
impriresult(7.8)
impriresult(4.5)
impriresult(2.6)
impriresult(-1)
impriresult(11)
