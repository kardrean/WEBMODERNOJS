//novo recurso do ES 2015
//extraindo valores de um objeto
const pessoa = 
{
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua das flores',
        numero: 777,

    }
}
//tipos de extração
const { nome, idade} = pessoa
console.log(nome,idade)

const{nome: n, idade: i} = pessoa
console.log(n, i)

// retirnado um atributo que não existe
const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

const{endereço:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep )