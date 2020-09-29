var numero1 = prompt("Digite um valor:");
var num1 = parseFloat(numero1);
var numero2 = prompt("Digite outro valor:");
var num2 = parseFloat(numero2);
var soma = prompt("Digite sua operação, adicao/subtracao:");

if (soma == "adicao") {
    var resultado = num1+num2;
    alert("Resultado eh: "+ resultado);    
} else if (soma == "subtracao"){
    var resultado = num1-num2;
    alert("Resultado eh: "+ resultado);
} else {
    alert("Erro: operação incorreta!");
}