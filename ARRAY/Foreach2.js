Array.prototype.forEach2 = function (callback){
    for ( let i = 0; i <this.length; i++){
        callback(this[i],1 , this)
    }
}


const aprovados = ['naruto', 'sasuke', 'sakura','gaara','temari', 'kankuro']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice+ 1}) ${nome}`)
})
