function FalarDepoisDe(segundos, frase) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    }) 
}

FalarDepoisDe(3, 'Que legal meu chapa!!!')
     .then(frase => frase.concat('?!?'))
     .then(outrafrase => console.log(outrafrase)) 
    .catch(e => console.log(e))