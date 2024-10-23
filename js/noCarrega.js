document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação ou exibir mensagens de erro/sucesso
    console.log('Login formulário enviado');
 });

 // Impede o recarregamento da página ao submeter o formulário de Registro
 document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de registro ou exibir mensagens de erro/sucesso
    console.log('Registro formulário enviado');
 });