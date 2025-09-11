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
    const container = document.getElementById('ticket-timeline-container');
    if (!container) return;
    container.innerHTML = '';
    tripItinerary.forEach(day => {
        let venuesHTML = '';
        if (day.ticketedVenues.length > 0) {
            venuesHTML = `<ul class="mt-3 space-y-4">` + day.ticketedVenues.map(venue => {
                const isComplete = venue.status === 'complete';
                return `
                    <li class="p-4 bg-gray-50 rounded-lg">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <i class="fa-solid ${isComplete ? 'fa-check-circle text-green-500' : 'fa-hourglass-half text-yellow-500'} w-6 text-center mr-3"></i>
                                <span class="font-semibold ${isComplete ? 'line-through text-gray-400' : 'text-gray-800'}">${venue.name}</span>
                            </div>
                            <i class="fa-solid ${venue.icon} text-xl text-gray-400"></i>
                        </div>
                        <div class="mt-2 pl-9 text-sm text-gray-600 space-y-1">
                            <div class="flex items-start"><i class="fa-regular fa-calendar-days w-6 text-center mr-1 pt-1"></i><span>${venue.openDays || 'Não especificado'}</span></div>
                            <div class="flex items-start"><i class="fa-regular fa-clock w-6 text-center mr-1 pt-1"></i><span>${venue.openingHours || 'Não especificado'}</span></div>
                        </div>
                    </li>`;
            }).join('') + `</ul>`;
        }
        const dayHTML = `
            <div class="bg-white p-6 rounded-2xl shadow-lg">
                <div class="flex items-center border-b pb-3">
                    <div class="text-center w-16">
                        <p class="text-xl font-bold text-gray-800">${day.day}</p>
                        <p class="text-sm text-gray-500">${day.date}</p>
                    </div>
                    <div class="pl-4 border-l ml-4">
                        <h4 class="font-semibold text-lg text-gray-900">${day.theme}</h4>
                    </div>
                </div>
                ${venuesHTML}
            </div>`;
        container.innerHTML += dayHTML;
    });
}


// --- Lógica da Meteorologia ---

const getWeatherIcon = (iconCode) => {
    const code = iconCode.substring(0, 2);
    const iconMap = {
        '01': 'fa-sun', '02': 'fa-cloud-sun', '03': 'fa-cloud', '04': 'fa-cloud-meatball',
        '09': 'fa-cloud-showers-heavy', '10': 'fa-cloud-rain', '11': 'fa-bolt',
        '13': 'fa-snowflake', '50': 'fa-smog'
    };
    return iconMap[code] || 'fa-question-circle';
};

const formatDayAndDate = (dateObject) => `${dateObject.toLocaleDateString('pt-PT', { weekday: 'short' })} ${dateObject.getDate()}`;

function renderForecast(forecastDays) {
    const widget = document.getElementById('forecast-widget');
    let forecastHtml = '';
    
    if (forecastDays.length === 0) {
        const daysToWait = Math.ceil((new Date('2025-09-19T00:00:00Z') - new Date()) / (1000 * 60 * 60 * 24)) - 5;
        widget.innerHTML = `<h2 class="section-title font-bold text-gray-800 mb-4 text-center">Previsão da Viagem</h2><p class="text-center text-gray-600">A previsão para as datas da viagem ainda não está disponível. Tente novamente em ${daysToWait > 0 ? daysToWait : 1} dia(s).</p>`;
        return;
    }

    forecastDays.forEach(day => {
        const date = new Date(day.dt * 1000);
        forecastHtml += `
            <div class="text-center p-3 bg-gray-100 rounded-lg">
                <p class="font-semibold">${formatDayAndDate(date)}</p>
                <i class="fa-solid ${getWeatherIcon(day.weather[0].icon)} text-3xl my-2 text-blue-500"></i>
                <p class="text-sm">
                    <span class="font-bold text-red-500">${Math.round(day.main.temp_max)}°</span> / 
                    <span class="text-blue-600">${Math.round(day.main.temp_min)}°</span>
                </p>
            </div>`;
    });
    widget.innerHTML = `<h2 class="section-title font-bold text-gray-800 mb-4 text-center">Previsão da Viagem</h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">${forecastHtml}</div>`;
}

/**
 * Busca e renderiza a previsão do tempo para a viagem.
 */
export async function fetchTripWeather() {
    const apiKey = '__OPENWEATHERMAP_API_KEY__';
    const lat = 48.8566;
    const lon = 2.3522;
    const tripStartDate = new Date('2025-09-19T00:00:00Z');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const msInDay = 1000 * 60 * 60 * 24;
    const daysUntilTrip = Math.ceil((tripStartDate - today) / msInDay);
    
    const widget = document.getElementById('forecast-widget');

    const forecastAvailableOnDay = 5;
    if (daysUntilTrip > forecastAvailableOnDay) {
        const daysToWait = daysUntilTrip - forecastAvailableOnDay;
        const pluralS = daysToWait > 1 ? 's' : '';
        widget.innerHTML = `<h2 class="section-title font-bold text-gray-800 mb-4 text-center">Previsão da Viagem</h2><p class="text-center text-gray-600">A previsão estará disponível dentro de ${daysToWait} dia${pluralS}.</p>`;
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Erro na API: ${response.statusText}`);
        const data = await response.json();
        
        const tripStartDateString = '2025-09-19';
        const tripEndDateString = '2025-09-23';
        
        const dailyForecasts = {};
        data.list.forEach(item => {
            const itemDate = item.dt_txt.split(' ')[0];
            if (itemDate >= tripStartDateString && itemDate <= tripEndDateString) {
                if (!dailyForecasts[itemDate] || item.dt_txt.includes("12:00:00")) {
                    dailyForecasts[itemDate] = item;
                }
            }
        });
        
        const tripForecast = Object.values(dailyForecasts);
        renderForecast(tripForecast);

    } catch (error) {
        console.error("Erro ao buscar dados da meteorologia:", error);
        widget.innerHTML = `<h2 class="section-title font-bold text-gray-800 mb-4 text-center">Previsão da Viagem</h2><p class="text-red-500 text-center">Não foi possível carregar a previsão.</p>`;
    }
}
