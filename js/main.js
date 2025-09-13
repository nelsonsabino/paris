// js/main.js

// Importa as funções de renderização da UI
import { renderTimeline, renderCalendar, fetchTripWeather } from './ui_renderer.js';

// Importa a lógica da checklist
import { initializeChecklist } from './checklist.js';

// Importa a configuração da base de dados do Firebase
import { database } from './config/firebase-config.js';

// --- VARIÁVEIS GLOBAIS ---
const a_senha_secreta = 'paris2025';
let isAuthenticated = false;
let pendingAction = null;

/**
 * Função para iniciar a contagem decrescente para a viagem.
 */
function startCountdown() {
    const countdownDate = new Date(2025, 8, 19, 6, 0, 0).getTime();
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "<div class='text-center w-full'><p class='text-2xl font-bold'>A VIAGEM COMEÇOU! BON VOYAGE!</p></div>";
        }
    }, 1000);
}

/**
 * Pede a password para executar uma ação protegida.
 * @param {function} actionCallback - A função a ser executada se a password estiver correta.
 */
function requestPassword(actionCallback) {
    const passwordModal = document.getElementById('password-modal');
    if (isAuthenticated) {
        actionCallback();
        return;
    }
    pendingAction = actionCallback;
    if (passwordModal) {
        passwordModal.classList.remove('hidden');
        document.getElementById('password-input').focus();
    }
}

/**
 * Inicializa todos os event listeners para os modais (evento, password).
 */
function initializeModals() {
    const eventModal = document.getElementById('event-modal');
    const passwordModal = document.getElementById('password-modal');

    // Modal de eventos do calendário
    document.addEventListener('openEventModal', (e) => {
        if (!eventModal) return;
        document.getElementById('modal-title').textContent = e.detail.title;
        document.getElementById('modal-description').textContent = e.detail.extendedProps.description;
        eventModal.classList.remove('hidden');
    });

    // Função genérica para fechar modais
    function closeModal(modal) {
        if (modal) modal.classList.add('hidden');
    }

    document.getElementById('modal-close-btn')?.addEventListener('click', () => closeModal(eventModal));
    eventModal?.addEventListener('click', (e) => { if (e.target === eventModal) closeModal(eventModal); });
    
    // Modal de password
    document.getElementById('password-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById('password-input');
        if (passwordInput.value === a_senha_secreta) {
            isAuthenticated = true;
            passwordInput.value = '';
            document.getElementById('password-error').classList.add('hidden');
            closeModal(passwordModal);
            if (pendingAction) {
                pendingAction();
                pendingAction = null;
            }
        } else {
            document.getElementById('password-error').classList.remove('hidden');
        }
    });
    document.getElementById('cancel-password')?.addEventListener('click', () => closeModal(passwordModal));
}

// --- CÓDIGO EXECUTADO QUANDO A PÁGINA CARREGA ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar componentes visuais
    startCountdown();
    renderTimeline();
    renderCalendar();
    fetchTripWeather();
    
    // Inicializar a lógica da checklist, passando a referência da base de dados e a função de password
    initializeChecklist(database, requestPassword);

    // Inicializar os modais
    initializeModals();
});
