function calcularImc() {
    var campoAltura = document.getElementById("altura");
    var campoPeso = document.getElementById("peso");
    var campoResultado = document.getElementById("resultado");
    var campoMensagem = document.getElementById("mensagem");

    let peso = Number(campoPeso.value);
    let altura = Number(campoAltura.value);

    console.log("Peso:", peso);
    console.log("Altura:", altura);

    var calculo = peso / (altura * altura);

    console.log("Cálculo do IMC:", calculo);

    switch (true) {
        case (calculo <= 18.5):
            campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`;
            campoMensagem.innerText = `Por conta disso, você está abaixo do peso`;
            break;
        case (calculo > 18.5 && calculo <= 24.9):
            campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`;
            campoMensagem.innerText = `Seu peso está normal :)`;
            break;
        case (calculo >= 25 && calculo <= 29.9):
            campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`;
            campoMensagem.innerText = `Você está um pouco acima do peso, tome cuidado`;
            break;
        case (calculo >= 30 && calculo <= 34.9):
            campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`;
            campoMensagem.innerText = `Você está com Obesidade, procure um médico!`;
            break;
        default:
            campoResultado.innerText = `nenhum valor foi encontrado`;
            break;
    }

    console.log("Mensagem:", campoMensagem.innerText);

}



/* IMC menor que 18,5: Abaixo do peso 
IMC de 18,5 a 24,9: Peso normal 
IMC de 25 a 29,9: Sobrepeso 
IMC de 30 a 34,9: Obesidade grau I 
*/