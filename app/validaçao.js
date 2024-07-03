function verificaSeOChuteTemUmValorValido(){
    const numero = +chute

    if  (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueONumeroPermitido(numero)) {
        elementoChute.innerHTML +=`<div>valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class = "btn-jogar">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>
        `
    }else {
        elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div> 
        `
    }
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroForMaiorOuMenorQueONumeroPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente')
        window.location.reload()
})