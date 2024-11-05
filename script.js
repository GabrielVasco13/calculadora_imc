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
    }

    campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`
}



/* IMC menor que 18,5: Abaixo do peso 
IMC de 18,5 a 24,9: Peso normal 
IMC de 25 a 29,9: Sobrepeso 
IMC de 30 a 34,9: Obesidade grau I 
*/