{
     {
          {
               {//dentro de um bloco de codigo que não seja uma função ela ira executar
                 var sera = 'SERA?????' 
                 console.log(sera)
               }
          } 
     }
}
//fora do bloco de codigo a var não executa fora da função
console.log(sera)
function teste () 
{
  var local = 123
  console.log(local)
}
// quando cria uma variavel do tipo VAR fora de uma função ela e uma variavel global e fica dentro da janela window no bawser
//variaveis do tipo VAr ou são globais ou ficam dentro de funções evitar as globais