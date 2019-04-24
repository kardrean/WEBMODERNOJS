function retint(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1

do{
    opcao = retint(-1, 10)
    console.log(`O VALOR FINAL FOI DE ${opcao}.`)
}while (opcao != -1)
console.log('FIM DAS TENTATIVAS!!!')