//funcao sem retorno
function imprimirSoma(a, b)
{
   console.log(a + b)

}

imprimirSoma(2, 3)
imprimirSoma(2)  // NaN
imprimirSoma(2, 720, 45, 23, 65, 8, 9) // usar os 2 e ignorar o resto
imprimirSoma() //NaN

// funcao com retorno
function soma (a, b = 1)
{
    return a + b
}

console.log(soma(2,3)) // como esta retornando um valor colcoar a função dentor de um console.log
console.log(soma(2))
console.log(soma())



