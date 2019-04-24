const imprimir = function(nota){
    switch(Math.floor(nota)){
        case 10:
        //pode colcoar varias sentenças aqui ou um pra cada valor
        case 9:
           console.log('Quadro de Honra com a nota ' + nota)
           break //isso faz com que para a setença aqui se não ira executar todos os proximos valores e imprimir errado   
        case 8: case 7:
           console.log('aprovado com a nota ' + nota)
           break
           case 6: case 5: case 4:
           console.log('Recuperação com a nota ' + nota)
           break
           case 3: case 2: case 1: case 0:
           console.log('Reprovado com a nota ' + nota)
           break
           default:
           console.log('Este valor de nota e invalido')
        }
        console.log('RESULTADO FINAL!!!')
}

imprimir(10)
imprimir(9.5)
imprimir(8.9)
imprimir(7)
imprimir(5)
imprimir(4)
imprimir(2)
imprimir(55)
imprimir(-85)
