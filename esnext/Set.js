//não aceita repetição/ não e indexado
const animes = new Set()
animes.add('dragon ball')
animes.add('naruto')
animes.add('bleach').add('one piece').add('goblyn slayer').add('Tokyo ghoul')
animes.add('naruto')
console.log(animes)
console.log(animes.size)
animes.delete('bleach')
console.log(animes.has('naruto'))

const nomes = ['Gaara', 'sasuke', 'Sakura', 'Tenten', 'Naruto', 'Hinata', 'Naruto']
const nomesSet = new Set(nomes)
console.log(nomesSet)
