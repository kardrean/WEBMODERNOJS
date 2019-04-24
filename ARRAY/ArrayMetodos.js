const animes = ['DRAGON BALL Z', 'NARUTO', 'TOKYO GHOUL','ONE PIECE']
animes.pop() //exclui o ultimoelemento do array, no caso one piece pq e uma merda heuehueh
console.log(animes)

animes.push('BLEACH') //metdo push adiciona um elemento ao array
console.log(animes)

animes.shift() // remove o primeiro elemento do array, no caso o dbz :'(
console.log(animes)    

animes.unshift('DRAGON BALL GT') //ADICIONA UM ELEMENTO NO ARRAY
console.log(animes)

//splice adiciona e remove elementos de um array

//adicionando

animes.splice(2, 0, 'TENCHI MUYO', 'YU YU HAKUSHO')
console.log(animes)

//removendo

animes.splice(3, 1)
console.log(animes)

const newanimes = animes.slice(2) //criaum novo array com a parte que voce selecionou do array antigo
console.log(newanimes)

const newanimes2 = animes.slice(0, 2) // o ultimo indice nao entra no caso o 2 entao ele pega so o 0 e 1
console.log(newanimes2)