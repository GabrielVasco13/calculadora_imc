function calcularImc() {
    var campoAltura = document.getElementById("altura");
    var campoPeso = document.getElementById("peso");
    var campoResultado = document.getElementById("resultado");

    let peso = Number(campoPeso.value)
    let altura = Number(campoAltura.value)

    var calculo = peso / (altura * altura)

    campoResultado.innerText = `O resultado do seu IMC: ${calculo.toFixed(2)}`
}