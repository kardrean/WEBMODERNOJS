const vilakonoha =  [{
    nome: 'Time 7',
    alunos:[{
        nome:'Naruto',
        nota: 7.1
    },{
        nome:'Sakura',
        nota: 8.1
    }]
},{
    nome: 'Time Areia',
alunos:[{
    nome: 'Gaara',
    nota: 9.7},{
        nome: 'Temari',
        nota:8.8
    }]
}]

const getnotashinobe = shinobe => shinobe.nota
const getnotastime = time => time.alunos.map(getnotashinobe)

const notas1 = vilakonoha.map(getnotastime)
console.log(notas1)

console.log([].concat([ 7.1, 8.1 ], [ 9.7, 8.8 ] ))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = vilakonoha.flatMap(getnotastime)
console.log(notas2)