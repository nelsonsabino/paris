// js/theme_switcher.js

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcherBtn = document.getElementById('theme-switcher');
    
    if (!themeSwitcherBtn) {
        console.warn('Botão de seletor de tema (#theme-switcher) não encontrado.');
        return;
    }

    // --- NOVA LÓGICA PARA CONTROLAR A COR DA BARRA DE STATUS ---

    const lightThemeColor = "#f0f4f8"; // Cor de fundo do modo claro
    const darkThemeColor = "#0f172a";  // Cor de fundo do modo escuro

    /**
     * Encontra ou cria a meta tag 'theme-color' e atualiza a sua cor.
     */
    function updateMetaThemeColor() {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        
        // Se a tag não existir, cria-a e adiciona-a ao <head>
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }

        // Verifica se o modo escuro está ativo
        const isDarkMode = document.documentElement.classList.contains('dark');
        
        // Define a cor da tag com base no tema
        metaThemeColor.setAttribute('content', isDarkMode ? darkThemeColor : lightThemeColor);
    }


    // --- LÓGICA EXISTENTE (MODIFICADA) ---

    /**
     * Aplica o tema (classe 'dark') e atualiza a cor da barra de status.
     * @param {string} theme - O tema a ser aplicado ('light' or 'dark').
     */
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Chama a nossa nova função sempre que o tema muda
        updateMetaThemeColor();
    };
    
    // Adiciona o evento de clique ao botão
    themeSwitcherBtn.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        if (isDarkMode) {
            localStorage.setItem('theme', 'light');
            applyTheme('light');
        } else {
            localStorage.setItem('theme', 'dark');
            applyTheme('dark');
        }
    });

    // Ouve por mudanças no tema do sistema operativo (ex: o modo escuro do telemóvel)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // Só muda automaticamente se o utilizador não tiver uma preferência guardada
        if (!('theme' in localStorage)) {
            applyTheme(event.matches ? 'dark' : 'light');
        }
    });

    // Chama a função uma vez no carregamento inicial da página para definir a cor correta
    updateMetaThemeColor();
});
