function compras (trabalho1, trabalho2){
    comprarSorvete = trabalho1 || trabalho2 //  || trabalho OU
    comprarTV50 = trabalho1 && trabalho2 // &&  trabalho I
 //   comprarTV32 = !!(trabalho1 ^ trabalho2) bitwise operar bite a bite 
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSoverte //negação logica

    return{comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))