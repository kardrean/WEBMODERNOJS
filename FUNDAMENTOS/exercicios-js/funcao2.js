//armazenando uma função em uma variavel
const imprimirSoma = function (a, b) 
{
    console.log(a + b)
}
imprimirSoma(2, 3)

// armazenando uma função arrow em uma variavel substitui a palavra function por => uma flecha
const soma = (a, b) => 
{
    return a + b
}
console.log(soma(2, 3))
//retorno implicito
const subtracao = (a, b) => a - b 
console.log(subtracao(10, 3))

//reduzindo uam função simples de um parametro
const imprimir2 = a => console.log(a) 
imprimir2("VOU SER O MELHOR DESENVOLVEDOR JS ")
