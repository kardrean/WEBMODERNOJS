//FINAL NOT A NUMBER EEHUEUEHEUH NaN

class lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumaria(){
        let valorConsolidado
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
 return valorConsolidado
    }
}

const salario = new lancamento ('Salario', 70000)
const contaDeLuz = new lancamento('Luz ', -220)

const contas = new CicloFinanceiro (11, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumaria())
