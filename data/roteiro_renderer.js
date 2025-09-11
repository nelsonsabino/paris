// data/roteiro_renderer.js

// Importar os dados de cada dia (caminhos ajustados para './' assumindo que estão na mesma pasta 'data/')
import { day1Data } from './roteiro_day1.js';
import { day2Data } from './roteiro_day2.js';
import { day3Data } from './roteiro_day3.js';
import { day4Data } from './roteiro_day4.js';
import { day5Data } from './roteiro_day5.js';

const allDaysData = [day1Data, day2Data, day3Data, day4Data, day5Data];

document.addEventListener('DOMContentLoaded', () => {
    const mainContentArea = document.querySelector('.container.mx-auto.p-4.md\\:p-8.max-w-5xl');
    if (!mainContentArea) {
        console.error("Main content area not found!");
        return;
    }

    const header = mainContentArea.querySelector('header');
    let targetNode = header;

    // Remove old content if any
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

        let htmlContent = `
            <h2 class="font-display text-2xl md:text-3xl text-gray-900 mb-1 font-bold">${dayData.title}</h2>
            <p class="text-gray-500 mb-6">${dayData.date}</p>
        `;

        if (dayData.mapImage) {
            htmlContent += `
                <div class="cursor-pointer" onclick="openModal('${dayData.mapImage}')">
                    <img src="${dayData.mapImage}" alt="Mapa do percurso do ${dayData.title}" class="w-full aspect-[5/2] object-cover rounded-lg mb-6">
                </div>
            `;
        }

        dayData.sections.forEach(sectionBlock => {
            htmlContent += `
                <a href="${sectionBlock.mapLink}" target="_blank" class="block p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-colors duration-200 mt-8 mb-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fas fa-map-location-dot text-blue-600 text-xl mr-3"></i>
                            <h3 class="font-display text-lg md:text-xl font-bold text-gray-800">${sectionBlock.title}</h3>
                        </div>
                        <span class="text-sm font-semibold text-blue-500 hidden md:block">Ver no Mapa <i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i></span>
                    </div>
                </a>
                <div class="relative timeline-container">
            `;

            sectionBlock.timeline.forEach(item => {
                const hasTime = item.time ? `<p class="timeline-time">${item.time}</p>` : '';
                let ticketIconHTML = '';
                if (item.requiresTicket) {
                    const icon = `<i class='fa-solid fa-ticket ml-2 text-blue-600' title='Necessita de Bilhete'></i>`;
                    if (item.ticketLink) {
                        ticketIconHTML = `<a href="${item.ticketLink}" target="_blank" onclick="event.stopPropagation()" class="inline-block" title="Comprar/Ver Bilhetes">${icon}</a>`;
                    } else {
                        ticketIconHTML = icon;
                    }
                }
                let titleHTML = item.title;
                if (item.guideLink) {
                    titleHTML = `<a href="${item.guideLink}" class="text-blue-700 hover:underline hover:text-blue-900 transition">${item.title}</a>`;
                }
                
                let itemBody = '';
                const iconClass = item.mealSuggestion ? 'timeline-icon timeline-icon-meal' : 'timeline-icon';

                if (item.mealSuggestion) {
                    itemBody = `
                        <h3 class="font-semibold text-lg">${titleHTML}${ticketIconHTML}</h3>
                        ${item.description ? `<p class="text-gray-600 mt-1">${item.description}</p>` : ''}
                        <div class="timeline-item-meal">
                            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-y-2 md:gap-x-4">
                                <p class="text-gray-600 flex-grow">${item.mealSuggestion.suggestion}</p>
                                ${item.mealSuggestion.budget ? `<p class="font-mono text-sm bg-green-100 text-green-800 px-2 py-1 rounded-md whitespace-nowrap self-start md:self-auto">${item.mealSuggestion.budget}</p>` : ''}
                            </div>
                        </div>`;
                } else if (item.accordion) {
                    let accordionContent = item.accordion.map(accItem => `
                        <div class="mb-4 relative">
                            <div class="absolute -left-[26px] top-1 h-3 w-3 bg-gray-400 rounded-full"></div>
                            <p class="font-semibold">${accItem.text}</p>
                            ${accItem.subText ? `<p class="text-gray-600 text-sm ml-1">${accItem.subText}</p>` : ''}
                        </div>
                    `).join('');
                    itemBody = `
                        <button class="accordion-toggle w-full text-left">
                            <h3 class="font-semibold text-lg flex justify-between items-center"><span>${titleHTML}${ticketIconHTML}</span><i class="fas fa-chevron-down text-sm"></i></h3>
                            <p class="text-gray-600">${item.description}</p>
                        </button>
                        <div class="accordion-content hidden mt-4 pl-4 border-l-2 border-gray-300">
                            ${accordionContent}
                        </div>
                    `;
                } else {
                    itemBody = `<h3 class="font-semibold text-lg">${titleHTML}${ticketIconHTML}</h3>`;
                    if (item.description) {
                        itemBody += `<p class="text-gray-600 mt-1">${item.description}</p>`;
                    }
                }

                htmlContent += `
                    <div class="timeline-item">
                        ${hasTime}
                        <div class="${iconClass}"><i class="fa-solid ${item.icon} text-xs"></i></div>
                        ${itemBody}
                    </div>
                `;
            });
            htmlContent += `</div>`;
        });
        
        // --- SECÇÃO DE COMPRAS E DICAS ---
        if (dayData.shoppingInfo) {
            const shopData = dayData.shoppingInfo;
            let shopHtml = `
                <div class="mt-10 border-t-2 border-dashed border-gray-300 pt-6">
                    <button class="accordion-toggle w-full flex justify-between items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        <span class="font-display text-xl font-bold text-blue-800">
                            <i class="fa-solid fa-cart-shopping mr-3"></i>${shopData.title}
                        </span>
                        <i class="fas fa-chevron-down text-blue-800"></i>
                    </button>
                    <div class="accordion-content hidden mt-4 space-y-6">`;

            if (shopData.generalTips && shopData.generalTips.length > 0) {
                shopHtml += `
                    <div class="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                        <h4 class="font-bold text-lg text-yellow-800 mb-2">Dicas Gerais</h4>
                        <ul class="list-disc list-inside text-yellow-700 space-y-1">
                            ${shopData.generalTips.map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>`;
            }
            
            if (shopData.shopping) {
                 let whereHtml = '';
                 if (shopData.shopping.where) {
                     if (typeof shopData.shopping.where === 'object') {
                         whereHtml += `<p class="text-gray-700">${shopData.shopping.where.description}</p>`;
                         if (shopData.shopping.where.locations && shopData.shopping.where.locations.length > 0) {
                             whereHtml += `<ul class="list-none space-y-2 mt-2">`;
                             shopData.shopping.where.locations.forEach(loc => {
                                 whereHtml += `<li><a href="${loc.link}" target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline"><i class="fa-solid fa-map-location-dot mr-2 text-sm"></i>${loc.name}</a></li>`;
                             });
                             whereHtml += `</ul>`;
                         }
                     } else {
                         whereHtml = `<p class="text-gray-700">${shopData.shopping.where}</p>`;
                     }
                 }

                 shopHtml += `<div>
                    <h4 class="font-bold text-lg text-gray-800 mb-2">${shopData.shopping.title}</h4>
                    <div class="p-4 bg-gray-50 rounded-lg">
                        ${shopData.shopping.list ? `
                            <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600 mb-4">
                                ${shopData.shopping.list.map(item => `<li class="flex items-start"><i class="fa-solid fa-check text-green-600 mr-2 mt-1"></i><span>${item}</span></li>`).join('')}
                            </ul>` : ''}
                        ${whereHtml}
                    </div>
                 </div>`;
            }

            shopHtml += `</div></div>`;
            htmlContent += shopHtml;
        }

        section.innerHTML = htmlContent;
        targetNode.parentNode.insertBefore(section, targetNode.nextSibling);
        targetNode = section;
    });

    // --- Lógica para o menu hamburger ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => { mobileMenu.classList.add('hidden'); }, 100);
            });
        });
    }

    // --- Lógica genérica para todos os acordeões ---
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i.fas.fa-chevron-down, i.fas.fa-chevron-up');
            content.classList.toggle('hidden');
            if (icon) {
                if (content.classList.contains('hidden')) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                } else {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
    });
    
    // --- Lógica para o pop-up de imagem (modal) ---
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');

    window.openModal = function(imageUrl) {
        modalImage.src = imageUrl;
        imageModal.classList.remove('hidden');
    };
    window.closeModal = function() {
        imageModal.classList.add('hidden');
        modalImage.src = "";
    };

    if (imageModal) {
        closeModalBtn.addEventListener('click', window.closeModal);
        imageModal.addEventListener('click', (e) => {
            if (e.target.id === 'imageModal') window.closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) window.closeModal();
        });
    }

    // --- LÓGICA PARA HIGHLIGHT DO MENU NO SCROLL ---
    const sections = document.querySelectorAll('section[id^="day"]');
    const navLinks = document.querySelectorAll('.sticky-nav a[href^="#day"]');
    const mobileDayHeader = document.getElementById('mobile-day-header');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active-day-link');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active-day-link');
                    }
                });

                if (mobileDayHeader) {
                    const titleElement = entry.target.querySelector('h2');
                    if (titleElement) {
                        const title = titleElement.textContent.split(':')[0];
                        mobileDayHeader.textContent = `A navegar: ${title}`;
                        mobileDayHeader.classList.remove('hidden');
                    }
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
