const pessoa = {
    saudacao: 'BOM DIA MEU CONSAGRADO!!!',
    falar(){
      console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
const falarDepessoa = pessoa.falar.bind(pessoa)
falarDepessoa