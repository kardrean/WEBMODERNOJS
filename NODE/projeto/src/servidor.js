const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./BancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.use('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, resp, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome: req.body.nome,
        preco:req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})