// js/nav_renderer.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Encontra o contentor do menu na página
    const navContainer = document.getElementById('main-nav-container');

    // Se a página não tiver este contentor, não faz nada
    if (!navContainer) {
        return;
    }

    // 2. Adiciona a classe principal que define o estilo da barra
    navContainer.className = 'visita-nav';

    // 3. Define o conteúdo HTML do menu (os links e botões)
    const navContentHTML = `
        <a href="index.html" class="visita-nav-link" title="Início">
            <i class="fa-solid fa-house text-lg"></i>
        </a>
        <a href="roteiro.html" class="visita-nav-link" title="Roteiro">
            <i class="fa-solid fa-list-ol text-lg"></i>
        </a>
        <a href="orcamento.html" class="visita-nav-link" title="Orçamento">
            <i class="fa-solid fa-euro-sign text-lg"></i>
        </a>
        <button id="theme-switcher" class="theme-switcher" title="Mudar Tema">
            <i class="fa-solid fa-sun text-lg sun-icon"></i>
            <i class="fa-solid fa-moon text-lg moon-icon"></i>
        </button>
    `;

    // 4. Insere o conteúdo HTML dentro do contentor
    navContainer.innerHTML = navContentHTML;
});
