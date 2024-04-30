const simBtn = document.getElementById('simBtn');
const naoBtn = document.getElementById('naoBtn');
const messageDiv = document.getElementById('message');


simBtn.addEventListener('click', () => {
    if (simBtn.textContent === 'Sim') {
        messageDiv.textContent = 'Quando olho para seus olhos, quero dizer que vejo meu futuro inteiro. Cada batida do meu coração é uma promessa de amor eterno a você. Eu quero viver cada momento possível com você, meu amor ❤';
        messageDiv.classList.add('show'); // Adiciona a classe show para exibir a mensagem
    } else {
        messageDiv.textContent = '';
        messageDiv.classList.remove('show'); // Remove a classe show para ocultar a mensagem
    }
});

naoBtn.addEventListener('click', () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    
    naoBtn.style.position = 'absolute';
    naoBtn.style.left = randomX + 'px';
    naoBtn.style.top = randomY + 'px';
});

document.addEventListener("DOMContentLoaded", function() {
    var autograph = document.getElementById("autograph");
    autograph.style.bottom = "20px"; // Ajuste para definir a posição inicial corretamente
});
