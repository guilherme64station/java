// Função para calcular o IMC
function calculateIMC() {
    // Obtém os valores de peso e altura
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Verifica se os valores são válidos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("imcResult").innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o IMC
    const imc = weight / (height * height); 

    //seleciona o elemento de resultado
    const resultElmemt = document.getElementById("imcResult");

    //define a cor e o texto de acordo com o valor do IMC
    if (imc < 18.5){
        resultElmemt.innerText = `seu IMC é: ${imc.toFixed(2)}(abaixo do peso)`;
        resultElmemt.className = "imc-abaixo";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultlElmemt.innerText = `seu IMC é: ${imc.toFixed(2)}(peso normal)`;
        resultElmemt.className = "imc-normal";
    } else if (imc >= 25 && imc < 29.9) {
        resultElmemt.innerText = `seu IMC é: ${imc.toFixed(2)}(sobrepeso)`;
        resultElmemt.className = "imc-sobrepeso";
    } else {
        resultElmemt.innerText = `seu IMC é: ${imc.toFixed(2)}(Obesidade)`;
        resultElmemt.className = "imc-obesidade";
    }
}