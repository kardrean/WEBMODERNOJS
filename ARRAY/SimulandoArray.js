const quasearray = {0: 'goku', 1: 'naruto', 2: 'kaneki'}
console.log(quasearray)
Object.defineProperty(quasearray, 'toString',{
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quasearray[0])

const mewarray = ['vegeta','sasuke', 'touka']
console.log(quasearray.toString(), mewarray)