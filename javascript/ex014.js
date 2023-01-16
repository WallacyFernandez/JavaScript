var agora = new Date()
var diaSem = agora.getDay()

/*

Dormingo = 0
segunda = 1
terça = 2
quarta = 3
quinta = 4
sexta = 5
sabado = 6

*/


 switch (diaSem){
    case 0:
        console.log(`Domingo`)
    break
    case 1:
        console.log(`Segunda`)
    break
    case 2:
        console.log(`Terça`)
    break

    default:
        console.log(`Erro dia invalido`)
    break
 }