const fabricnates = ['mercedes', 'audi','bmw']

function imprimir (nome, indice) {
    console.log(`${indice+ 1}. ${nome}`)
}

fabricnates.forEach(imprimir)
fabricnates.forEach(fabricante => console.log(fabricante))