function Verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value.length == 0 || fano.value > ano){

        alert('Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){

            genero = 'homem'

            if(idade >= 0 && idade < 10){

                img.setAttribute('src', 'homemcriança.png')
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){

                img.setAttribute('src', 'mulhercriança.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
