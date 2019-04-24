const soma = function (x, y) {
    return x+ y 
}
const imprimirResult = function(a, b, operacao= soma){
    console.log(operacao(a,b))
}
imprimirResult(7,3)
imprimirResult(7, 3, soma)
imprimirResult(7, 3,function(x,y){
    return x - y
})
imprimirResult(7,3,(x,y) => x * y)
const pessoa = {
    falar : function (){
      console.log('má ôee')
    }
}
pessoa.falar()