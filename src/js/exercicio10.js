function executarEx10() {
    let valorProduto = Number(prompt("Digite o valor do produto:"));
    let valorDesconto = Number(prompt("Digite o valor do desconto:"));
 
    let valorFinal = valorProduto - valorDesconto;
 
    alert("Valor final do produto: R$ " + valorFinal.toFixed(2));
}