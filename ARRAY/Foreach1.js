const aprovados = ['naruto', 'sasuke', 'sakura','gaara','temari', 'kankuro']
aprovados.forEach(function(nome, indice){
    console.log(`${indice+ 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exbibiraprovados = aprovados => console.log(aprovados)
aprovados.forEach(exbibiraprovados)