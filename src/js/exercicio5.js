
function executarEx05() {
    let idade = Number(prompt("Digite sua idade:"));

    let permissao = idade >= 18
        ? "Usuário tem permissão"
        : "Usuário não tem permissão";


    alert(permissao);
}