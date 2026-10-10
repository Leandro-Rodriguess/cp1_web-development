function executarEx02() {
    let peso = Number(prompt("Digite seu peso (kg):"));
    let altura = Number(prompt("Digite sua altura (m):"));
    let imc = peso / (altura * altura);

    console.log("Exercício 2");

    console.log("IMC", imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Abaixo do peso");
        alert("IMC: " + imc.toFixed(2) + "\nAbaixo do peso");
    }
    else if (imc <= 24.9) {
        console.log("Peso ideial");
        alert("IMC: " + imc.toFixed(2) + "\nPeso ideal");
    }
    else {
        console.log("Acima do peso");
        alert("IMC: " + imc.toFixed(2) + "\nAcima do peso");
    }

}