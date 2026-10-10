function executarEx01() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let num3 = prompt("Digite um terceiro valor:");

    console.log("Exercício 1");

    console.log("15 é diferente de 10 ?", num1 != num2);

    console.log("15 é igual a '15' ?", num1 === num3);

    console.log("15 é maior ou igual a 10 ?", num1 >= num2);

    console.log("----------------------------------------");

    alert("O primeiro número é diferente do segundo? " + (num1 != num2));

    alert("O primeiro número é igual ao terceiro valor? " + (num1 === num3));

    alert("O primeiro número é maior ou igual ao segundo? " + (num1 >= num2));
}