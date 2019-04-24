const notas = [4.5, 7.8, 9.8, 7.9, 7.8, 8.9, 5.8]

//sem callback
let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
} 
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)
//callback com arraw function
const notasMenoresque7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresque7)
console.log(notasBaixas3)