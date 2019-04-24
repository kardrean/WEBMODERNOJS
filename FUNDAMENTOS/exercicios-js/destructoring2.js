const [a] = [10]
console.log(a)
const [n1, , n3, ,n5, ,n6 = 0  ] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

//extraindo valores expecificos de um array
const [, [,esse]] = [[4,5,6], [2,999,0]]
console.log(esse)