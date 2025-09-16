// js/main.js

// Importa as funções de renderização da UI
import { renderTimeline, renderCalendar, fetchTripWeather } from './ui_renderer.js';

// Importa a lógica da checklist
import { initializeChecklist } from './checklist.js';

// --- INICIALIZAÇÃO FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyAt7jAk5r2tqSdyTf2m7MUebd_t7bbDTJk",
  authDomain: "planeamento-viagem-paris.firebaseapp.com",
  databaseURL: "https://planeamento-viagem-paris-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "planeamento-viagem-paris",
  storageBucket: "planeamento-viagem-paris.appspot.com",
  messagingSenderId: "121000897121",
  appId: "1:121000897121:web:75662c01dc56926bf61820"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

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
 * Inicializa todos os event listeners para os modais.
 */
function initializeModals() {
    const eventModal = document.getElementById('event-modal');

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
}

// --- CÓDIGO EXECUTADO QUANDO A PÁGINA CARREGA ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar componentes visuais
    startCountdown();
    renderTimeline();
    renderCalendar();
    fetchTripWeather();
    
    // Inicializar a lógica da checklist, passando null em vez da função de password
    initializeChecklist(database, null);

    // Inicializar os modais
    initializeModals();
});
