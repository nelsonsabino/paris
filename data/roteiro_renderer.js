// data/roteiro_renderer.js

// Importar os dados de cada dia
import { day1Data } from './roteiro_day1.js';
import { day2Data } from './roteiro_day2.js';
import { day3Data } from './roteiro_day3.js';
import { day4Data } from './roteiro_day4.js';
import { day5Data } from './roteiro_day5.js';

const allDaysData = [day1Data, day2Data, day3Data, day4Data, day5Data];

document.addEventListener('DOMContentLoaded', () => {
    const mainContentArea = document.querySelector('.container.mx-auto.p-4.md\\:p-8.max-w-5xl');
    if (!mainContentArea) return;

    const header = mainContentArea.querySelector('header');
    let targetNode = header;

    // Limpa conteúdo antigo
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

        // --- INÍCIO: Barra de Navegação do Dia ---
        const dayNavSections = dayData.sections.filter(s => s.id);
        let dayNavHtml = '';
        if (dayNavSections.length > 0) {
            dayNavHtml = `
                <div class="day-nav mb-10">
                    <div class="container mx-auto max-w-5xl px-4 flex items-center justify-center space-x-2 md:space-x-4 overflow-x-auto">
                        ${dayNavSections.map(s => {
                            // Extrai a primeira palavra do título para o link (ex: "CASA → VERSALHES" -> "VERSALHES")
                            const linkText = s.title.split('→').pop().trim().split(' ')[0];
                            return `<a href="#${s.id}" data-section-id="${s.id}">${linkText}</a>`;
                        }).join('')}
                    </div>
                </div>`;
        }
        // --- FIM: Barra de Navegação do Dia ---

        let htmlContent = `
            <h2 class="font-display text-2xl md:text-3xl text-gray-900 mb-1 font-bold">${dayData.title}</h2>
            <p class="text-gray-500 mb-6">${dayData.date}</p>
            ${dayNavHtml}
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
                <div ${sectionBlock.id ? `id="${sectionBlock.id}"` : ''} class="section-block pt-4">
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
                    } else { ticketIconHTML = icon; }
                }
                let titleHTML = item.title;
                if (item.guideLink) {
                    titleHTML = `<a href="${item.guideLink}" class="text-blue-700 hover:underline hover:text-blue-900 transition">${item.title}</a>`;
                }
                
                let itemBody = '';
                const iconClass = item.mealSuggestion ? 'timeline-icon timeline-icon-meal' : 'timeline-icon';

                if (item.mealSuggestion) {
                    itemBody = `<h3 class="font-semibold text-lg">${titleHTML}${ticketIconHTML}</h3>
                        ${item.description ? `<p class="text-gray-600 mt-1">${item.description}</p>` : ''}
                        <div class="timeline-item-meal">
                            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-y-2 md:gap-x-4">
                                <p class="text-gray-600 flex-grow">${item.mealSuggestion.suggestion}</p>
                                ${item.mealSuggestion.budget ? `<p class="font-mono text-sm bg-green-100 text-green-800 px-2 py-1 rounded-md whitespace-nowrap self-start md:self-auto">${item.mealSuggestion.budget}</p>` : ''}
                            </div>
                        </div>`;
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

                htmlContent += `<div class="timeline-item">
                        ${hasTime}
                        <div class="${iconClass}"><i class="fa-solid ${item.icon} text-xs"></i></div>
                        ${itemBody}
                    </div>`;
            });
            htmlContent += `</div></div>`;
        });
        
        if (dayData.shoppingInfo) {
            const shopData = dayData.shoppingInfo;
            let shopHtml = `<div class="mt-10 border-t-2 border-dashed border-gray-300 pt-6">
                    <button class="accordion-toggle w-full flex justify-between items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        <span class="font-display text-xl font-bold text-blue-800"><i class="fa-solid fa-cart-shopping mr-3"></i>${shopData.title}</span>
                        <i class="fas fa-chevron-down text-blue-800"></i>
                    </button>
                    <div class="accordion-content hidden mt-4 space-y-6">`;

            if (shopData.generalTips) {
                shopHtml += `<div class="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                        <h4 class="font-bold text-lg text-yellow-800 mb-2">Dicas Gerais</h4>
                        <ul class="list-disc list-inside text-yellow-700 space-y-1">${shopData.generalTips.map(tip => `<li>${tip}</li>`).join('')}</ul>
                    </div>`;
            }
            if (shopData.shopping) {
                 let whereHtml = '';
                 if (shopData.shopping.where) {
                     if (typeof shopData.shopping.where === 'object') {
                         whereHtml += `<p class="text-gray-700">${shopData.shopping.where.description}</p>`;
                         if (shopData.shopping.where.locations) {
                             whereHtml += `<ul class="list-none space-y-2 mt-2">${shopData.shopping.where.locations.map(loc => `<li><a href="${loc.link}" target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline"><i class="fa-solid fa-map-location-dot mr-2 text-sm"></i>${loc.name}</a></li>`).join('')}</ul>`;
                         }
                     } else { whereHtml = `<p class="text-gray-700">${shopData.shopping.where}</p>`; }
                 }
                 shopHtml += `<div>
                    <h4 class="font-bold text-lg text-gray-800 mb-2">${shopData.shopping.title}</h4>
                    <div class="p-4 bg-gray-50 rounded-lg">
                        ${shopData.shopping.list ? `<ul class="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600 mb-4">${shopData.shopping.list.map(item => `<li class="flex items-start"><i class="fa-solid fa-check text-green-600 mr-2 mt-1"></i><span>${item}</span></li>`).join('')}</ul>` : ''}
                        ${whereHtml}
                    </div></div>`;
            }
            shopHtml += `</div></div>`;
            htmlContent += shopHtml;
        }

        section.innerHTML = htmlContent;
        targetNode.parentNode.insertBefore(section, targetNode.nextSibling);
        targetNode = section;
    });

    // --- LÓGICA GERAL DA PÁGINA ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setTimeout(() => { mobileMenu.classList.add('hidden'); }, 100)));
    }

    document.querySelectorAll('.accordion-toggle').forEach(button => {
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

    window.openModal = (imageUrl) => { modalImage.src = imageUrl; imageModal.classList.remove('hidden'); };
    window.closeModal = () => { imageModal.classList.add('hidden'); modalImage.src = ""; };

    if (imageModal) {
        closeModalBtn.addEventListener('click', window.closeModal);
        imageModal.addEventListener('click', (e) => { if (e.target.id === 'imageModal') window.closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) window.closeModal(); });
    }

    // --- LÓGICA PARA HIGHLIGHT DO MENU NO SCROLL ---
    const mainNavLinks = document.querySelectorAll('.sticky-nav a[href^="#day"]');
    const daySections = document.querySelectorAll('.day-section');
    const dayNavLinks = document.querySelectorAll('.day-nav a');
    const sectionBlocks = document.querySelectorAll('.section-block');

    const observerOptions = { root: null, rootMargin: '-100px 0px -50% 0px', threshold: 0 };

    const mainObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mainNavLinks.forEach(link => {
                    link.classList.toggle('active-day-link', link.getAttribute('href').substring(1) === entry.target.id);
                });
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
});
