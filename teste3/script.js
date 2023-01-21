function Verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){

        alert('Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){

            genero = 'homem'

            if(idade >= 0 && idade < 10){

                img.setAttribute('src', 'homemcriança.png')
            } else if (idade < 21){

                img.setAttribute('src', 'homemadolecente.png')
            } else if (idade < 50){

                img.setAttribute('src', 'homemadulto.png')
            } else {

                img.setAttribute('src', 'homemidoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){

                img.setAttribute('src', 'mulhercriança.png')
            }
        }
       
    }

    res.style.textAlign = 'center'
    res.innerHTML= ` <p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
}
