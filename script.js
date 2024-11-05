function calcularImc() {
    var campoAltura = document.getElementById("altura");
    var campoPeso = document.getElementById("peso");
    var campoResultado = document.getElementById("resultado");
    var campoMensagem = document.getElementById("mensagem");

    let peso = Number(campoPeso.value)
    let altura = Number(campoAltura.value)

    var calculo = peso / (altura * altura)

    if (calculo <= 18.5) {
        campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`
        campoMensagem.innerText = `Por conta disso, você está abaixo do peso`
    } else if (calculo >= 18.5 || calculo <= 24.9) {
        campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`
        campoMensagem.innerText = `Seu peso está normal :)`
    } else if (calculo >= 25 || calculo <= 29.9) {
        campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`
        campoMensagem.innerText = `Você está um pouco acima do peso, tome cuidado`
    } else if (calculo >= 30 || calculo <= 34.9) {
        campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`
        campoMensagem.innerText = `Você está com Obesidade, procure um médico!`
    }

}



/* IMC menor que 18,5: Abaixo do peso 
IMC de 18,5 a 24,9: Peso normal 
IMC de 25 a 29,9: Sobrepeso 
IMC de 30 a 34,9: Obesidade grau I 
*/