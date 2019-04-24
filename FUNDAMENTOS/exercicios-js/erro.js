function tratarerro(erro) {
   // throw new Error('...')
  // throw 10 
  //throw false
  //throw 'menssagem'
  throw {
      nome: erro.name,
      msg: erro.menssage,
      date: new Date
  }

}

function imperG (obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
     } catch (e) {
               tratarerro(e)
     } finally {
         console.log('deu erro caceta!!!')
     }
}

const obj = {name: 'Roberto'}
 imperG(obj)