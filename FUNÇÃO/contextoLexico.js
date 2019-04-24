const  valor = 'Global'

function myFunc(){
    console.log(valor)
}

function exec(){
      const valor = 'local'
      myFunc()
}
exec()