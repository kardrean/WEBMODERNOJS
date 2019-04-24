class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é: ${this.nome}`)
    }
}
const p1 = new Pessoa('Kardrêan')
p1.falar()

const criarnewpessoa = nome => {
    return{
        falar: () => console.log(`Meu nome e: ${nome}`)
    }
}

const p2 = criarnewpessoa('Carlos')
p2.falar()