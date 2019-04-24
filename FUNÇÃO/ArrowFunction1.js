let dobro = function (a){
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a //reuturn implicito
console.log(dobro(Math.PI))
let ola = function (){
    return 'Olá'
}
ola = () => 'qualé que é meu consagrado!!!'
ola = _ => 'qualé que é meu consagrado!!!' //underlinbe e um parametro _
console.log(ola())