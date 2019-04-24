function area (largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`valor acima do permitido: ${area}.m2`)
    } else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 45, 89, 56, 23)) // funciona pois eledepois de pegar os primeiros valores ra ignorar oresto
console.log(area(5, 5))