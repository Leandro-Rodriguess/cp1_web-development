function executarEx09() {
    let senhaAtual = prompt('Digite sua senha atual:');
    
    let senhaCorreta = '1234';
 
    if (senhaAtual === senhaCorreta) {
        let novaSenha = prompt("Digite a nova senha:");
 
        if (novaSenha !== senhaAtual) {
            alert('Senha alterada com sucesso');
        } else {
            alert('A nova senha deve ser diferente da senha atual');
        }
    } else {
        alert('Senha atual incorreta');
    }
}