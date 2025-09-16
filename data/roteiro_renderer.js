// data/roteiro_renderer.js

// Importar os dados de cada dia
import { day1Data } from './roteiro_day1.js';
import { day2Data } from './roteiro_day2.js';
import { day3Data } from './roteiro_day3.js';
import { day4Data } from './roteiro_day4.js';
import { day5Data } from './roteiro_day5.js';

const allDaysData = [day1Data, day2Data, day3Data, day4Data, day5Data];
const monthMap = { 'Setembro': 8 };

// --- LÓGICA DA METEOROLOGIA (ALTERADA) ---

// Função modificada para devolver também uma classe de cor
function getWeatherIconFromWMO(wmoCode) {
    const iconMap = {
        0: { icon: 'fa-sun', colorClass: 'weather-color-sun' },
        1: { icon: 'fa-cloud-sun', colorClass: 'weather-color-sun' },
        2: { icon: 'fa-cloud-sun', colorClass: 'weather-color-cloud' },
        3: { icon: 'fa-cloud', colorClass: 'weather-color-cloud' },
        45: { icon: 'fa-smog', colorClass: 'weather-color-smog' },
        48: { icon: 'fa-smog', colorClass: 'weather-color-smog' },
        51: { icon: 'fa-cloud-rain', colorClass: 'weather-color-rain' },
        53: { icon: 'fa-cloud-rain', colorClass: 'weather-color-rain' },
        55: { icon: 'fa-cloud-rain', colorClass: 'weather-color-rain' },
        61: { icon: 'fa-cloud-showers-heavy', colorClass: 'weather-color-rain' },
        63: { icon: 'fa-cloud-showers-heavy', colorClass: 'weather-color-rain' },
        65: { icon: 'fa-cloud-showers-heavy', colorClass: 'weather-color-rain' },
        71: { icon: 'fa-snowflake', colorClass: 'weather-color-snow' },
        73: { icon: 'fa-snowflake', colorClass: 'weather-color-snow' },
        75: { icon: 'fa-snowflake', colorClass: 'weather-color-snow' },
        80: { icon: 'fa-cloud-showers-heavy', colorClass: 'weather-color-rain' },
        81: { icon: 'fa-cloud-showers-heavy', colorClass: 'weather-color-rain' },
        82: { icon: 'fa-cloud-showers-heavy', colorClass: 'weather-color-rain' },
        95: { icon: 'fa-bolt', colorClass: 'weather-color-storm' },
        96: { icon: 'fa-bolt', colorClass: 'weather-color-storm' },
        99: { icon: 'fa-bolt', colorClass: 'weather-color-storm' },
    };
    return iconMap[wmoCode] || { icon: 'fa-question-circle', colorClass: 'weather-color-cloud' };
}

async function fetchHourlyWeatherForTrip() {
    const lat = 48.8566;
    const lon = 2.3522;
    const startDate = '2025-09-19';
    const endDate = '2025-09-23';
    
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=weathercode&timezone=Europe/Paris&start_date=${startDate}&end_date=${endDate}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) return null;
        const data = await response.json();

        const weatherMap = new Map();
        if (data.hourly && data.hourly.time && data.hourly.weathercode) {
            data.hourly.time.forEach((time, index) => {
                weatherMap.set(time, data.hourly.weathercode[index]);
            });
        }
        return weatherMap;
    } catch (error) {
        console.error("Erro ao buscar previsão horária:", error);
        return null;
    }
}

function updateTimelineBadges() {
    const now = new Date(); 
    const allTimedEvents = [];

    document.querySelectorAll('.timeline-item[data-time]').forEach(el => {
        const timeStr = el.dataset.time;
        const dateStr = el.dataset.date;
        
        const dateParts = dateStr.split(', ')[1].split(' de ');
        const day = parseInt(dateParts[0]);
        const month = monthMap[dateParts[1]];
        const year = 2025;
        
        const [hours, minutes] = timeStr.split(':').map(Number);
        
        const eventDate = new Date(year, month, day, hours, minutes);
        
        allTimedEvents.push({ element: el, date: eventDate });
    });

    allTimedEvents.sort((a, b) => a.date - b.date);

    let nextEventIndex = -1;
    for (let i = 0; i < allTimedEvents.length; i++) {
        if (allTimedEvents[i].date > now) {
            nextEventIndex = i;
            break;
        }
    }

    allTimedEvents.forEach((event, index) => {
        const titleElement = event.element.querySelector('h3');
        if (!titleElement) return;

        let badgeHtml = '';
        if (nextEventIndex === -1 && allTimedEvents.length > 0) {
            badgeHtml = '<span class="timeline-badge badge-completed">CONCLUÍDO</span>';
        } else {
            if (index < nextEventIndex - 1) {
                badgeHtml = '<span class="timeline-badge badge-completed">CONCLUÍDO</span>';
            } else if (index === nextEventIndex - 1) {
                badgeHtml = '<span class="timeline-badge badge-ongoing">A DECORRER</span>';
            } else if (index === nextEventIndex) {
                badgeHtml = '<span class="timeline-badge badge-next">PRÓXIMO</span>';
            }
        }
        
        if (badgeHtml && !titleElement.querySelector('.timeline-badge')) {
            titleElement.innerHTML += badgeHtml;
        }
    });
}

async function renderPage() {
    const weatherMap = await fetchHourlyWeatherForTrip();
    const mainContentArea = document.querySelector('.container.mx-auto.p-4.md\\:p-8.max-w-5xl');
    if (!mainContentArea) return;

    const header = mainContentArea.querySelector('header');
    let targetNode = header;

    let currentElement = header.nextElementSibling;
    while (currentElement && !currentElement.id.startsWith('imageModal')) {
        const nextElement = currentElement.nextElementSibling;
        currentElement.remove();
        currentElement = nextElement;
    }
    
    allDaysData.forEach(dayData => {
        const section = document.createElement('section');
        section.id = dayData.id;
        section.classList.add('day-section', 'mb-12');

        const dayNavSections = dayData.sections.filter(s => s.id);
        let dayNavHtml = '';
        if (dayNavSections.length > 0) {
            dayNavHtml = `<div class="day-nav mb-10">
                ${dayNavSections.map(s => {
                    const linkText = s.navTitle || s.title.split('→').pop().trim().split(' ')[0];
                    return `<a href="#${s.id}" data-section-id="${s.id}">${linkText}</a>`;
                }).join('')}
            </div>`;
        }
        
        let highlightsHtml = '';
        if (dayData.highlights && dayData.highlights.length > 0) {
            highlightsHtml = `
                <div class="highlights-grid">
                    ${dayData.highlights.map(highlight => `
                        <a href="${highlight.link}" class="highlight-card">
                            <div class="highlight-card-bg" style="background-image: url('${highlight.imageUrl}');"></div>
                            <div class="highlight-card-overlay"></div>
                            <div class="highlight-card-content">
                                <i class="fa-solid ${highlight.icon} highlight-icon"></i>
                                <h3 class="highlight-name">${highlight.name}</h3>
                            </div>
                        </a>
                    `).join('')}
                </div>`;
        }

        let htmlContent = `
            <h2 class="font-display text-2xl md:text-3xl text-gray-900 mb-1 font-bold">${dayData.title}</h2>
            <p class="text-gray-500 mb-6">${dayData.date}</p>
            ${highlightsHtml}
            ${dayNavHtml}`;

        if (dayData.mapImage) {
            htmlContent += `<div class="cursor-pointer" onclick="openModal('${dayData.mapImage}')"><img src="${dayData.mapImage}" alt="Mapa do percurso do ${dayData.title}" class="w-full aspect-[5/2] object-cover rounded-lg mb-6"></div>`;
        }

        dayData.sections.forEach(sectionBlock => {
            let rainyDayHtml = '';
            if (sectionBlock.rainyDayAlternatives && sectionBlock.rainyDayAlternatives.restaurants.length > 0) {
                const { title, restaurants } = sectionBlock.rainyDayAlternatives;
                const restaurantList = restaurants.map(r => {
                    const highlightClass = r.highlight ? 'highlight-restaurant' : '';
                    return `
                    <li class="rainy-restaurant-item ${highlightClass}">
                        <div class="flex-grow">
                            <p class="font-semibold">${r.name}</p>
                            <p class="text-sm text-gray-500">${r.type}</p>
                        </div>
                        <a href="${r.mapLink}" target="_blank" class="rainy-map-link">
                            Mapa <i class="fa-solid fa-location-dot ml-1 text-xs"></i>
                        </a>
                    </li>`;
                }).join('');

                rainyDayHtml = `
                    <div class="rainy-accordion">
                        <button class="rainy-accordion-toggle">
                            <span><i class="fa-solid fa-cloud-showers-heavy mr-3"></i>${title}</span>
                            <i class="fas fa-chevron-down text-sm"></i>
                        </button>
                        <div class="rainy-accordion-content hidden">
                            <ul>${restaurantList}</ul>
                        </div>
                    </div>
                `;
            }

            htmlContent += `<div ${sectionBlock.id ? `id="${sectionBlock.id}"` : ''} class="section-block pt-4">
                    <a href="${sectionBlock.mapLink}" target="_blank" class="block p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-colors duration-200 mt-8 mb-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center"><i class="fas fa-map-location-dot text-blue-600 text-xl mr-3"></i><h3 class="font-display text-lg md:text-xl font-bold text-gray-800">${sectionBlock.title}</h3></div>
                            <span class="text-sm font-semibold text-blue-500 hidden md:block">Ver no Mapa <i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i></span>
                        </div>
                    </a>
                    ${rainyDayHtml} 
                    <div class="relative timeline-container">`;

            sectionBlock.timeline.forEach(item => {
                const hasTime = item.time ? `<p class="timeline-time">${item.time}</p>` : '';
                const timeDataAttr = item.time ? `data-time="${item.time}" data-date="${dayData.date}"` : '';
                
                let weatherIconHtml = '';
                if (item.time && weatherMap) {
                    const dateParts = dayData.date.split(', ')[1].split(' de ');
                    const day = parseInt(dateParts[0]);
                    const month = monthMap[dateParts[1]];
                    const dateString = `2025-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}T${item.time}`;
                    
                    const weatherCode = weatherMap.get(dateString);
                    if (weatherCode !== undefined) {
                        const weatherInfo = getWeatherIconFromWMO(weatherCode);
                        // A linha abaixo agora adiciona a classe de cor
                        weatherIconHtml = `<i class="fa-solid ${weatherInfo.icon} weather-icon ${weatherInfo.colorClass}" title="Previsão para as ${item.time}"></i>`;
                    }
                }

                let ticketIconHTML = '';
                if (item.requiresTicket) {
                    const icon = `<i class='fa-solid fa-ticket ml-2 text-blue-600' title='Necessita de Bilhete'></i>`;
                    if (item.ticketLink) { ticketIconHTML = `<a href="${item.ticketLink}" target="_blank" onclick="event.stopPropagation()" class="inline-block" title="Comprar/Ver Bilhetes">${icon}</a>`; } 
                    else { ticketIconHTML = icon; }
                }
                
                let titleContent = item.guideLink 
                    ? `<a href="${item.guideLink}" class="text-blue-700 hover:underline hover:text-blue-900 transition">${item.title}</a>`
                    : item.title;
                
                let titleHTML = `${weatherIconHtml} ${titleContent}`;

                let itemBody = '';
                const iconClass = item.mealSuggestion ? 'timeline-icon timeline-icon-meal' : 'timeline-icon';

                if (item.mealSuggestion) {
                    itemBody = `<h3 class="font-semibold text-lg">${titleHTML}${ticketIconHTML}</h3>
                        ${item.description ? `<p class="text-gray-600 mt-1">${item.description}</p>` : ''}
                        <div class="timeline-item-meal"><div class="flex flex-col md:flex-row md:justify-between md:items-start gap-y-2 md:gap-x-4">
                                <p class="text-gray-600 flex-grow">${item.mealSuggestion.suggestion}</p>
                                ${item.mealSuggestion.budget ? `<p class="font-mono text-sm bg-green-100 text-green-800 px-2 py-1 rounded-md whitespace-nowrap self-start md:self-auto">${item.mealSuggestion.budget}</p>` : ''}
                            </div></div>`;
                } else if (item.accordion) {
                    let accordionContent = item.accordion.map(accItem => `<div class="mb-4 relative"><div class="absolute -left-[26px] top-1 h-3 w-3 bg-gray-400 rounded-full"></div><p class="font-semibold">${accItem.text}</p>${accItem.subText ? `<p class="text-gray-600 text-sm ml-1">${accItem.subText}</p>` : ''}</div>`).join('');
                    itemBody = `<button class="accordion-toggle w-full text-left">
                            <h3 class="font-semibold text-lg flex justify-between items-center"><span>${titleHTML}${ticketIconHTML}</span><i class="fas fa-chevron-down text-sm"></i></h3>
                            <p class="text-gray-600">${item.description}</p>
                        </button>
                        <div class="accordion-content hidden mt-4 pl-4 border-l-2 border-gray-300">${accordionContent}</div>`;
                } else {
                    itemBody = `<h3 class="font-semibold text-lg">${titleHTML}${ticketIconHTML}</h3>`;
                    if (item.description) { itemBody += `<p class="text-gray-600 mt-1">${item.description}</p>`; }
                }

                htmlContent += `<div class="timeline-item timeline-item-hidden" ${timeDataAttr}>
                        ${hasTime}
                        <div class="${iconClass}"><i class="fa-solid ${item.icon} text-xs"></i></div>
                        ${itemBody}
                    </div>`;
            });
            htmlContent += `</div></div>`;
        });
        
        if (dayData.shoppingInfo) { /* Lógica de compras, mantida inalterada */ }

        section.innerHTML = htmlContent;
        targetNode.parentNode.insertBefore(section, targetNode.nextSibling);
        targetNode = section;
    });

    // --- LÓGICA GERAL DA PÁGINA (EVENT LISTENERS) ---
    document.querySelectorAll('.accordion-toggle, .rainy-accordion-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i.fas.fa-chevron-down, i.fas.fa-chevron-up');
            content.classList.toggle('hidden');
            if (icon) {
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    });
    
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');
    window.openModal = (imageUrl) => { if (imageModal && modalImage) { modalImage.src = imageUrl; imageModal.classList.remove('hidden'); }};
    window.closeModal = () => { if (imageModal) { imageModal.classList.add('hidden'); modalImage.src = ""; }};
    if (imageModal && closeModalBtn) {
        closeModalBtn.addEventListener('click', window.closeModal);
        imageModal.addEventListener('click', (e) => { if (e.target === imageModal) window.closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) window.closeModal(); });
    }

    const mainNavLinks = document.querySelectorAll('.sticky-nav-days a[href^="#day"]');
    const daySections = document.querySelectorAll('.day-section');
    const dayNavLinks = document.querySelectorAll('.day-nav a');
    const sectionBlocks = document.querySelectorAll('.section-block');
    const observerOptions = { root: null, rootMargin: '-100px 0px -50% 0px', threshold: 0 };
    
    const mainObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                mainNavLinks.forEach(link => {
                    link.classList.remove('active-day-link');
                });
                const activeLink = document.querySelector(`.sticky-nav-days a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-day-link');
                }
            }
        });
    }, observerOptions);
    daySections.forEach(section => mainObserver.observe(section));

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                dayNavLinks.forEach(link => {
                    link.classList.toggle('active-section', link.dataset.sectionId === id);
                });
            }
        });
    }, observerOptions);
    sectionBlocks.forEach(section => sectionObserver.observe(section));
    
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timelineItems = entry.target.querySelectorAll('.timeline-item-hidden');
                timelineItems.forEach((item, index) => {
                    item.style.animationDelay = `${index * 100}ms`;
                    item.classList.add('timeline-item-animate');
                    item.classList.remove('timeline-item-hidden');
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.day-section').forEach(daySection => {
        animationObserver.observe(daySection);
    });

    updateTimelineBadges();
}

document.addEventListener('DOMContentLoaded', renderPage);
