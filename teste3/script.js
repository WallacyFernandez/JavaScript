function Verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {

        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {

            genero = 'masculino'

            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'homemcriança.png')
                res.innerHTML = ` <p>Detectamos uma criança do genero ${genero} com ${idade} anos.</p>`
            } else if (idade < 21) {
                res.innerHTML = ` <p>Detectamos um adolecente do genero ${genero} com ${idade} anos.</p>`
                img.setAttribute('src', 'homemadolecente.png')
            } else if (idade < 50) {
                res.innerHTML = ` <p>Detectamos um adulto do genero ${genero} com ${idade} anos.</p>`
                img.setAttribute('src', 'homemadulto.png')
            } else {
                res.innerHTML = ` <p>Detectamos um idoso do genero ${genero} com ${idade} anos.</p>`
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                res.innerHTML = ` <p>Detectamos uma criança do genero ${genero} com ${idade} anos.</p>`
                img.setAttribute('src', 'mulhercriança.png')
            } else if (idade < 21) {
                res.innerHTML = ` <p>Detectamos um adolecente do genero ${genero} com ${idade} anos.</p>`
                img.setAttribute('src', 'mulheradolecente.png')
            } else if (idade < 50) {
                res.innerHTML = ` <p>Detectamos um adulto do genero ${genero} com ${idade} anos.</p>`
                img.setAttribute('src', 'mulheradulta.png')

            } else {
                res.innerHTML = ` <p>Detectamos um idoso do genero ${genero} com ${idade} anos.</p>`
                img.setAttribute('src', 'mulheridosa.png')
            }
        }

    }

    res.style.textAlign = 'center'
    res.appendChild(img)
}
