// Função para exibir mensagem quando o botão Enviar é clicado
document.getElementById('submitBtn').addEventListener('click', function () {
    var msg = "Infelizmente, o botão de envio ainda não está operacional.";
    var msgElement = document.getElementById('msg');
    msgElement.textContent = msg;
    msgElement.style.display = 'inline-block';
});

// Função para limpar o formulário quando o botão Limpar é clicado
document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('formulario').reset();
});
