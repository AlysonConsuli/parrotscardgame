let numeroCartas = 0
let cartasNoJogo = []

function comparador() {
    return Math.random() - 0.5;
}

function quantidade() {
    numeroCartas = parseInt(prompt('Quantas cartas você deseja? (números pares de 4 à 14)'))
    let possibilidades = [4, 6, 8, 10, 12, 14]
    let i = 0

    while (numeroCartas !== possibilidades[i]) {
        i++
        if (i === possibilidades.length) {
            numeroCartas = parseInt(prompt('Quantas cartas você deseja? (números pares de 4 à 14)'))
            i = 0
        }
    }

    let escondidos = document.querySelectorAll('.escondido')
    for (let k = 0; k < numeroCartas; k++) {
        escondidos[k].classList.remove('escondido')
        cartasNoJogo[k] = escondidos[k]
    }

    //cartasNoJogo.sort(comparador)


    /*let fileiras = document.querySelectorAll('.fileira')
    let cartasFileira = numeroCartas / fileiras.length

    for (let j = 0; j < fileiras.length; j++) {
        let escondidos = fileiras[j].querySelectorAll('.escondido')
        for (let k = 0; k < cartasFileira; k++) {
            escondidos[k].classList.remove('escondido')
        }
    }*/

    /*let escondidos1 = fileiras[0].querySelectorAll('.escondido')
    for (let k = 0; k < cartasFileira; k++) {
        escondidos1[k].classList.remove('escondido')
    }

    let escondidos2 = fileiras[1].querySelectorAll('.escondido')
    for (let k = 0; k < cartasFileira; k++) {
        escondidos2[k].classList.remove('escondido')
    }*/

    /*if (numeroCartas === 4) {
        let removerEscondido = document.querySelector('.carta')
        removerEscondido.classList.add('escondido')
    } else if (numeroCartas === 6) {
        let removerEscondido = document.querySelector('.escondido')
        removerEscondido.classList.remove('escondido')

        removerEscondido = document.querySelector('.escondido')
        removerEscondido.classList.remove('escondido')
    }*/
}

quantidade()
