function executarEx06() {
    let usuario = prompt('Digite o usuário:');
    let senha = prompt('Digite a senha:');
 
    if (usuario === 'admin' && senha === '1234') {
        alert('Login realizado com sucesso');
 
    } else {
        alert('Usuário ou senha incorretos');
    }
}