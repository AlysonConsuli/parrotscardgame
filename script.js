let numeroCartas = 0
let passaros = ['unicornparrot', 'unicornparrot', 'tripletsparrot', 'tripletsparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'revertitparrot', 'revertitparrot']
let imgSelecionada1 = null
let imgSelecionada2 = null
let cartasParaCima = []
let src1 = null
let src2 = null
let intervalo = null
let contador = 0
let numeroDeJogadas = 0
let relogio = document.querySelector('.relogio')
let frente
let verso
let carta1
let again
let main
//let cartas

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

    passaros.splice(numeroCartas, (14 - numeroCartas));
    passaros.sort(comparador)

    main = document.querySelector('main')
    for (let k = 0; k < numeroCartas; k++) {
        main.innerHTML += `
    <div class="carta" onclick="virarCarta(this)" data-identifier="card">    
        <div class="face frontFace" data-identifier="front-face">
        <img src="../img/${passaros[k]}.gif" alt="${passaros[k]}">
        </div>
        <div class="face backFace" data-identifier="back-face">
        <img src="../img/front.png" alt="passaro">
        </div>
    </div>`
    }

}

function virarCarta(cartaSelecionada) {
    frente = cartaSelecionada.querySelector('.frontFace')
    verso = cartaSelecionada.querySelector('.backFace')
    frente.classList.add('mostrarFrente')
    verso.classList.add('esconderVerso')

    cartasParaCima = document.querySelectorAll('.mostrarFrente')
    let n = cartasParaCima.length

    if (n % 2 === 1) {
        imgSelecionada1 = cartaSelecionada.querySelector('img')
        src1 = imgSelecionada1.getAttribute('src')
        carta1 = cartaSelecionada
        src2 = null
    } else {
        imgSelecionada2 = cartaSelecionada.querySelector('img')
        src2 = imgSelecionada2.getAttribute('src')
    }
    numeroDeJogadas += 1
    if (numeroDeJogadas === 1) {
        intervalo = setInterval(cronometro, 1000)
    }

    if (src1 === src2) {
        contador += 2
    } else if (src1 !== src2 && src2 !== null) {
        setTimeout(desvirar, 1000)
    }

    setTimeout(finalizarJogo, 500)

}

function desvirar() {
    frente.classList.remove("mostrarFrente")
    verso.classList.remove("esconderVerso")
    frente = carta1.querySelector('.frontFace')
    verso = carta1.querySelector('.backFace')
    frente.classList.remove('mostrarFrente')
    verso.classList.remove('esconderVerso')
}

function finalizarJogo() {
    if (contador === numeroCartas) {
        alert(`Você ganhou em ${numeroDeJogadas} jogadas e em ${parseInt(relogio.innerHTML)} segundos!`)
        jogarNovamente()
    }
}

function cronometro() {
    if (contador === numeroCartas) {
        clearInterval(intervalo)
    } else {
        relogio.innerHTML = parseInt(relogio.innerHTML) + 1
    }
}

function jogarNovamente() {
    again = prompt('Quer jogar novamente? (s ou n)')
    while (again !== 's' && again !== 'n') {
        again = prompt('Quer jogar novamente? (s ou n)')
    }

    if (again === 's') {
        main.innerHTML = ''
        relogio.innerHTML = 0
        numeroDeJogadas = 0
        contador = 0
        passaros = ['unicornparrot', 'unicornparrot', 'tripletsparrot', 'tripletsparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'revertitparrot', 'revertitparrot']
        imgSelecionada1 = null
        imgSelecionada2 = null
        src1 = null
        src2 = null
        quantidade()

    } else {
        /*cartas = document.querySelectorAll('.carta')
        for(let i = 0; i < cartas.length; i++){
            let cadaCarta = cartas[i]
            cadaCarta.prop("onclick", null).off("click")
        }*/
    }
}

quantidade()