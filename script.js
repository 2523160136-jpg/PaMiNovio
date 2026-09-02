// 1. Contador exacto desde el 21 de julio de 2026 a las 3:00 PM
const startDate = new Date('2026-07-21T15:00:00'); 

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const counterEl = document.getElementById('counter');
    if(counterEl) {
        counterEl.innerHTML = `${days} días, ${hours}h, ${minutes}m y ${seconds}s`;
    }
}
setInterval(updateCounter, 1000);
updateCounter();

// 2. Control para alternar entre las 4 cartas del menú izquierdo y mostrar su contenido a la derecha
const letterBtns = document.querySelectorAll('.letter-card-btn');
const contentPanes = document.querySelectorAll('.content-pane');

letterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar la clase active de todos los botones y paneles
        letterBtns.forEach(b => b.classList.remove('active'));
        contentPanes.forEach(pane => pane.classList.remove('active-pane'));

        // Activar el botón presionado
        btn.classList.add('active');

        // Mostrar el panel de contenido correspondiente
        const targetId = btn.getAttribute('data-target');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
            targetPane.classList.add('active-pane');
        }
    });
});

// 3. Botón "Mmm..." que huye de forma más dispersa y divertida
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const responseMsg = document.getElementById('response-msg');

if (noBtn && yesBtn) {
    noBtn.addEventListener('mouseover', () => {
        // Hace que salte a un radio más amplio en la pantalla
        const randomX = (Math.random() - 0.5) * 250;
        const randomY = (Math.random() - 0.5) * 120;
        
        noBtn.style.position = 'relative';
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    yesBtn.addEventListener('click', () => {
        responseMsg.textContent = "¡Me encantas muchisimo, y me gustaría estar contigo por muchisimo tiempo más!🥰";
        noBtn.style.display = 'none';
    });
}