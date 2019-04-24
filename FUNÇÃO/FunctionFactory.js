const prod1 = {
    nome: 'PS4 pro',
    preco: 1900
}

const prod2 = {
    nome: 'Xbox X',
    preco: 2100
}
//factory simples ela sempreretonra um objeto
function criarPessoa(){
    return{
        nome: 'PS4 SLim',
        preco: 1500

    }
}

console.log(criarPessoa())