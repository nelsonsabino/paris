// js/theme_switcher.js

/**
 * Script para controlar a lógica de alternância de tema (Dark/Light Mode).
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcherBtn = document.getElementById('theme-switcher');
    
    if (!themeSwitcherBtn) {
        console.warn('Botão de seletor de tema (#theme-switcher) não encontrado.');
        return;
    }

    // Função para definir o tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
    
    // Adiciona o evento de clique ao botão
    themeSwitcherBtn.addEventListener('click', () => {
        // Verifica se o modo escuro está ativo e alterna
        const isDarkMode = document.documentElement.classList.contains('dark');
        if (isDarkMode) {
            localStorage.setItem('theme', 'light');
            applyTheme('light');
        } else {
            localStorage.setItem('theme', 'dark');
            applyTheme('dark');
        }
    });

    // O script "anti-flash" no <head> já cuida da aplicação inicial do tema.
    // Este script apenas garante que o botão funciona após o carregamento da página.
});
