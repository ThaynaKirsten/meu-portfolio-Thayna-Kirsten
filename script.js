// Captura o ícone de menu e o nav
const iconemenu = document.getElementById('icone-menu');
const navbar = document.getElementById('navbar');

// Quando o ícone de menu for clicado, alterna a classe 'active' no menu
iconeMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');  // Alterna a visibilidade do menu
});


document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const progress = bar.getAttribute("data-progress");
        bar.style.width = progress + "%";
    });
});

