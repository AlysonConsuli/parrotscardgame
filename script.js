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
let bloquearVirarCarta = false

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

    if (bloquearVirarCarta === false) {
        frente = cartaSelecionada.querySelector('.frontFace')
        let jaSelecionada = frente.classList.contains('mostrarFrente')

        if (jaSelecionada === false) {
            frente.classList.add('mostrarFrente')
            verso = cartaSelecionada.querySelector('.backFace')
            verso.classList.add('esconderVerso')

            cartasParaCima = document.querySelectorAll('.mostrarFrente')
            if (cartasParaCima.length % 2 === 1) {
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
                bloquearVirarCarta = true
                setTimeout(desvirar, 1000)
            }

            if (contador === numeroCartas) {
                setTimeout(finalizarJogo, 500)
            }
        }
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function cronometro() {
    relogio.innerHTML = parseInt(relogio.innerHTML) + 1
}

function desvirar() {
    frente.classList.remove("mostrarFrente")
    verso.classList.remove("esconderVerso")
    frente = carta1.querySelector('.frontFace')
    verso = carta1.querySelector('.backFace')
    frente.classList.remove('mostrarFrente')
    verso.classList.remove('esconderVerso')
    bloquearVirarCarta = false
}

function finalizarJogo() {
    alert(`Você ganhou em ${numeroDeJogadas} jogadas e em ${parseInt(relogio.innerHTML)} segundos!`)
    clearInterval(intervalo)
    jogarNovamente()
}

function jogarNovamente() {
    again = prompt('Quer jogar novamente? (sim ou nao)')
    while (again !== 'sim' && again !== 'nao') {
        again = prompt('Quer jogar novamente? (sim ou nao)')
    }

    if (again === 'sim') {
        main.innerHTML = ''
        relogio.innerHTML = 0
        numeroDeJogadas = 0
        contador = 0
        passaros = ['unicornparrot', 'unicornparrot', 'tripletsparrot', 'tripletsparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'revertitparrot', 'revertitparrot']
        intervalo = null
        imgSelecionada1 = null
        imgSelecionada2 = null
        src1 = null
        src2 = null
        quantidade()
    } else {
        bloquearVirarCarta = true
    }
}

quantidade()