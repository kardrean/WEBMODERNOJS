const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise ((resolve, reject) => {
        http.get(url, res =>{
            let resultado = ''
    
            res.on('data', dados => {
                resultado +=dados
            })
    
            res.on('end', () => {
                 try{
                    resolve(JSON.parse(resultado))
                 } catch(e){
                     reject(e)
                 }
            })
        })
    })
}

//recurso do ES8
//objetivo e simplificar o uso do promise
let obterAlunos  = async () => {
    const ta = await getTurma('A')
    const ta = await getTurma('B')
    const ta = await getTurma('C')
} //retorna um objeto AsybcFunction

obterAlunos()
           .then(alunos => alunos.map(a => a.nome))
           .then(nomes => console.log(nomes))