//função pra calcular
function calculate(operation){
    var num1 = parseFloat(prompt("digite o primeiro número: "));
    if (!confirm("você digitou: " +num1+ ". confirmar?")){
        return;
    }
    //return conclui o "se" da função 
    var num2 = parseFloat(prompt("digite o segundo número: "));
    if (!confirm("você digitou: " +num2+ ". confirmar?")){
        return;
    }
    var result;
    if (operation === 'add'){
        result = num1 + num2;
        alert("O resultado da adição é: " + result)
    }
     else if (operation === 'sub'){
        result = num1 - num2;
        alert("O resultado da subtração é: " + result)
    }
    else if (operation === 'mult'){
        result = num1 * num2;
        alert("O resultado da multiplicação é: " + result)
    }
    else if (operation === 'div'){
        if (num2 === 0){
            alert("erro: divisão por zero!");
            return;
        }
        result = num1 / num2;
        alert("O resultado da divisão é: " + result)
    }
}
