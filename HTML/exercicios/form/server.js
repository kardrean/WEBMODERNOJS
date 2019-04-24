const express = required ('expres')
const app = express()
const bodyParse = require('body-parse')

app.use(bodyParse.urlencoded({extend: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns, Usuário Incluido</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns, Usuyario alterado</h1>')
})


app.listen(3003)