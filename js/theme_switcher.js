// js/theme_switcher.js

// Define a chave que usaremos para guardar a preferência no browser.
const themeKey = 'theme-preference';

// Função para obter a preferência guardada ou do sistema.
const getThemePreference = () => {
    // 1. Verifica se já existe uma preferência guardada.
    if (localStorage.getItem(themeKey)) {
        return localStorage.getItem(themeKey);
    }
    // 2. Se não, verifica a preferência do sistema operativo.
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Obtém a preferência inicial.
const initialTheme = getThemePreference();

// Função para aplicar o tema à página.
const setTheme = (theme) => {
    // Remove as classes existentes para evitar conflitos.
    document.documentElement.classList.remove('light', 'dark');
    // Adiciona a classe do tema escolhido à tag <html>.
    document.documentElement.classList.add(theme);
    // Guarda a preferência no localStorage para futuras visitas.
    localStorage.setItem(themeKey, theme);
};

// Aplica o tema inicial assim que o script é lido, para evitar o "flash" de tema errado.
setTheme(initialTheme);

// Cria a função de alternância e torna-a global (acessível pelo HTML).
window.toggleTheme = () => {
    // Verifica qual é o tema atual.
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    // Define o novo tema como o oposto do atual.
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // Aplica o novo tema.
    setTheme(newTheme);
};
