// js/ui_renderer.js

// Importa os dados estáticos para que as funções de renderização possam usá-los
import { planningEvents, tripItinerary } from '../data/dados_estaticos.js';

/**
 * Renderiza a timeline de próximos passos na página.
 */
export function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;
    timelineContainer.innerHTML = '';
    planningEvents.forEach(event => {
        if (event.title === 'VIAGEM!') return;
        const eventDate = new Date(event.date + 'T00:00:00');
        const month = eventDate.toLocaleString('pt-PT', { month: 'short' }).toUpperCase().replace('.', '');
        const day = eventDate.getDate();
        const isComplete = event.status === 'complete';
        const itemHTML = `
            <div class="flex items-start space-x-4 ${isComplete ? 'opacity-60' : ''}">
                <div class="flex flex-col items-center">
                    <span class="text-lg font-semibold ${isComplete ? 'text-gray-500' : 'text-green-700'}">${month}</span>
                    <span class="text-2xl font-bold ${isComplete ? 'text-gray-500' : 'text-green-700'}">${day}</span>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md flex-1">
                    <h3 class="font-semibold text-lg ${isComplete ? 'line-through' : ''}">${event.title}</h3>
                    <p class="text-sm text-gray-600">${event.description}</p>
                    <div class="mt-2 text-sm font-medium ${isComplete ? 'text-green-600' : 'text-yellow-600'}">
                        <i class="fa-solid ${isComplete ? 'fa-check-circle' : 'fa-hourglass-half'} mr-2"></i>
                        ${isComplete ? 'Concluído' : 'Pendente'}
                    </div>
                </div>
            </div>`;
        timelineContainer.innerHTML += itemHTML;
    });
}

/**
 * Renderiza o calendário interativo do FullCalendar.
 */
export function renderCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;
    const calendarEvents = planningEvents.map(event => ({
        title: event.title,
        start: event.date,
        end: event.endDate,
        backgroundColor: event.color,
        borderColor: event.color,
        allDay: true,
        extendedProps: { description: event.description || 'Não há detalhes adicionais.' }
    }));
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        headerToolbar: { left: 'prev,next today', center: 'title', right: '' },
        events: calendarEvents,
        eventClick: function(info) {
            info.jsEvent.preventDefault();
            document.dispatchEvent(new CustomEvent('openEventModal', { detail: info.event }));
        }
    });
    calendar.render();
}

/**
 * Renderiza a timeline de bilhetes a comprar.
 */
export function renderTicketTimeline() {
    // Esta função permanece inalterada
}


// --- Lógica da Meteorologia (com Open-Meteo) ---

const getAqiInfo = (aqi) => {
    if (aqi <= 20) return { text: 'Boa', colorClass: 'text-green-800' };
    if (aqi <= 40) return { text: 'Razoável', colorClass: 'text-blue-800' };
    if (aqi <= 60) return { text: 'Moderada', colorClass: 'text-purple-800' };
    return { text: 'Fraca/Má', colorClass: 'text-red-800' };
};

const getWeatherIconFromWMO = (wmoCode) => {
    const iconMap = {
        0: 'fa-sun', 1: 'fa-cloud-sun', 2: 'fa-cloud-sun', 3: 'fa-cloud',
        45: 'fa-smog', 48: 'fa-smog', 51: 'fa-cloud-rain', 53: 'fa-cloud-rain', 55: 'fa-cloud-rain',
        61: 'fa-cloud-showers-heavy', 63: 'fa-cloud-showers-heavy', 65: 'fa-cloud-showers-heavy',
        71: 'fa-snowflake', 73: 'fa-snowflake', 75: 'fa-snowflake',
        80: 'fa-cloud-showers-heavy', 81: 'fa-cloud-showers-heavy', 82: 'fa-cloud-showers-heavy',
        95: 'fa-bolt', 96: 'fa-bolt', 99: 'fa-bolt',
    };
    return iconMap[wmoCode] || 'fa-question-circle';
};

const formatDayAndDate = (dateObject) => `${dateObject.toLocaleDateString('pt-PT', { weekday: 'short' })} ${dateObject.getDate()}`;

function renderWeatherWidget(forecastData, airQualityData) {
    const widget = document.getElementById('forecast-widget');

    const current = forecastData.current;
    const todayForecast = forecastData.daily;
    const aqiInfo = getAqiInfo(airQualityData.current.european_aqi);

    const currentHtml = `
        <div class="text-center border-b dark:border-slate-700 pb-6 mb-6">
            <p class="weather-current-title">Tempo Atual em Paris</p>
            <div class="flex items-center justify-center gap-4 my-2">
                <i class="fa-solid ${getWeatherIconFromWMO(current.weathercode)} weather-current-icon"></i>
                <p class="weather-current-temp">${Math.round(current.temperature_2m)}°C</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4 text-center">
                <div class="weather-info-card">
                    <p class="weather-info-title">Qualidade do Ar</p>
                    <p class="font-bold ${aqiInfo.colorClass}">${aqiInfo.text}</p>
                </div>
                <div class="weather-info-card">
                    <p class="weather-info-title">Visibilidade</p>
                    <p class="weather-info-value">${(current.visibility / 1000).toFixed(1)} km</p>
                </div>
                <div class="weather-info-card">
                    <p class="weather-info-title">Nascer do Sol</p>
                    <p class="weather-info-value">${new Date(todayForecast.sunrise[0]).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div class="weather-info-card">
                    <p class="weather-info-title">Pôr do Sol</p>
                    <p class="weather-info-value">${new Date(todayForecast.sunset[0]).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
            </div>
        </div>
    `;

    let forecastHtml = '';
    todayForecast.time.forEach((time, index) => {
        const date = new Date(time);
        forecastHtml += `
            <div class="weather-forecast-card">
                <p class="weather-forecast-date">${formatDayAndDate(date)}</p>
                <i class="fa-solid ${getWeatherIconFromWMO(todayForecast.weathercode[index])} weather-forecast-icon"></i>
                <p class="text-sm">
                    <span class="font-bold text-red-800">${Math.round(todayForecast.temperature_2m_max[index])}°</span> / 
                    <span class="text-blue-800">${Math.round(todayForecast.temperature_2m_min[index])}°</span>
                </p>
            </div>`;
    });
    
    widget.innerHTML = `
        <h2 class="section-title font-bold text-gray-800 mb-6 text-center">Meteorologia</h2>
        ${currentHtml}
        <h3 class="weather-forecast-title">Previsão para a Viagem</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">${forecastHtml}</div>
    `;
}

export async function fetchTripWeather() {
    const lat = 48.8566;
    const lon = 2.3522;
    const startDate = '2025-09-19';
    const endDate = '2025-09-23';
    const widget = document.getElementById('forecast-widget');

    const forecastApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe/Paris&start_date=${startDate}&end_date=${endDate}`;
    const airQualityApiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi`;

    try {
        const [forecastResponse, airQualityResponse] = await Promise.all([
            fetch(forecastApiUrl),
            fetch(airQualityApiUrl)
        ]);

        if (!forecastResponse.ok) throw new Error(`Erro na API de previsão: ${forecastResponse.statusText}`);
        if (!airQualityResponse.ok) throw new Error(`Erro na API de qualidade do ar: ${airQualityResponse.statusText}`);

        const forecastData = await forecastResponse.json();
        const airQualityData = await airQualityResponse.json();

        if (!forecastData.daily || !airQualityData.current) {
            throw new Error("Resposta de uma das APIs é inválida.");
        }
        
        renderWeatherWidget(forecastData, airQualityData);

    } catch (error) {
        console.error("Erro ao buscar dados da meteorologia:", error);
        widget.innerHTML = `<h2 class="section-title font-bold text-gray-800 mb-4 text-center">Meteorologia</h2><p class="text-red-500 text-center">Não foi possível carregar a previsão do tempo.</p>`;
    }
}
