let peso = 80
let altura = 1.91
let imc = peso / (altura * altura)

console.log("Exercício 2");

console.log("IMC", imc.toFixed(2)); // Pesquisei para saber como diminuir o número de casas decimais.

if (imc < 18.5){
    console.log("Abaixo do peso");
}
else if (imc <= 24.9){
    console.log("Peso ideial");
}
else{
    console.log("Acima do peso");
}
console.log("----------------------------------------")
console.log("Exercício 3");