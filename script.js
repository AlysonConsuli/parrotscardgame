let numeroCartas

function quantidade(){
    numeroCartas = parseInt(prompt('Quantas cartas você deseja? (números pares de 4 à 14)'))
    if(numeroCartas === 6){
        let removerEscondido = document.querySelector('.escondido')
        removerEscondido.classList.remove('escondido')
    
        removerEscondido = document.querySelector('.escondido')
        removerEscondido.classList.remove('escondido')
    }

}

quantidade()
