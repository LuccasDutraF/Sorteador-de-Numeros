const botaoSorteio = document.querySelector(".botao-sortear")

function sortear() {

    const MinimoNumb = document.querySelector(".MinimoNumb").value
    const MaximoNumb = document.querySelector(".MaximoNumb").value

    const max = parseInt(MaximoNumb);
    const min = parseInt(MinimoNumb);

    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    const pResultado = document.querySelector(".resultado");

    if ( isNaN(max) || isNaN(min)){
        pResultado.textContent = `Por Favor, Insira os campos corretamente para efetuar o sorteio!`;
    }else{
        pResultado.textContent = `Seu número sorteado é: ${numeroAleatorio}`;
    }

    if (max < min){
        pResultado.textContent = `O número máximo deve ser maior que o mínimo`;
    }

}

botaoSorteio.addEventListener("click", sortear)










