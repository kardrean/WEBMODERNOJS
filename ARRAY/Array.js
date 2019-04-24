console.log(typeof Array, typeof new Array, typeof [])
 let aprovados = new Array('kardrean', 'Carlos', 'Compegne', 'Monte')
 console.log(aprovados)

 aprovados = ['Naruto', 'Kakashi', 'Sakura', 'Sasuke']
 console.log(aprovados [0])
 console.log(aprovados[2])
 console.log(aprovados[99])  //undefined pq nao existe esse indice

 aprovados [4] = 'Sai'
 aprovados.push('Ichigo')
 console.log(aprovados.length)

 aprovados [17] = 'Itacih'
 console.log(aprovados.length)
 console.log(aprovados [10] === undefined)

 console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados [1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Naruto', 'Kakashi', 'Sakura', 'Sasuke']
aprovados.splice(1, 2, 'Gaara', 'Temari')
console.log(aprovados)