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

    // Keep the header, so insert after it.
    const header = mainContentArea.querySelector('header');
    let targetNode = header; // Element after which to insert day sections

    // Remove any existing dynamic content sections to prevent duplicates on re-render (if applicable)
    let currentElement = header.nextElementSibling;
    while (currentElement && !currentElement.id.startsWith('imageModal')) { // Stop before the modal div
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
                // No need to explicitly add ticket icon here, as it's part of the item.title string
                
                let itemBody = `<h3 class="font-semibold text-lg">${item.title}</h3>`;
                if (item.description) {
                    itemBody += `<p class="text-gray-600">${item.description}</p>`;
                }

                if (item.accordion) {
                    let accordionContent = item.accordion.map(accItem => `
                        <div class="mb-4 relative">
                            <div class="absolute -left-[26px] top-1 h-3 w-3 bg-gray-400 rounded-full"></div>
                            <p class="font-semibold">${accItem.text}</p>
                            ${accItem.subText ? `<p class="text-gray-600 text-sm ml-1">${accItem.subText}</p>` : ''}
                        </div>
                    `).join('');

                    itemBody = `
                        <button class="accordion-toggle w-full text-left">
                            <h3 class="font-semibold text-lg flex justify-between items-center"><span>${item.title}</span><i class="fas fa-chevron-down text-sm"></i></h3>
                            <p class="text-gray-600">${item.description}</p>
                        </button>
                        <div class="accordion-content hidden mt-4 pl-4 border-l-2 border-gray-300">
                            ${accordionContent}
                        </div>
                    `;
                }

                htmlContent += `
                    <div class="timeline-item">
                        ${hasTime}
                        <div class="timeline-icon"><i class="fa-solid ${item.icon} text-xs"></i></div>
                        ${itemBody}
                    </div>
                `;
            });
            htmlContent += `</div>`; // Close timeline-container
        });
        targetNode.parentNode.insertBefore(section, targetNode.nextSibling); // Insert after header or previous section
        targetNode = section; // Update targetNode for next insertion
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

    // --- Lógica para o acordeão (agora que o conteúdo foi adicionado dinamicamente) ---
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    accordionToggles.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i.fas');
            content.classList.toggle('hidden');
            if (content.classList.contains('hidden')) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });

    // --- Lógica para o pop-up de imagem (modal) ---
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');

    // Make openModal and closeModal global for onclick attribute in HTML
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

    // --- LÓGICA PARA HIGHLIGHT DO MENU NO SCROLL (agora que o conteúdo foi adicionado) ---
    const sections = document.querySelectorAll('section[id^="day"]');
    const navLinks = document.querySelectorAll('.sticky-nav a[href^="#day"]');
    const mobileDayHeader = document.getElementById('mobile-day-header');

    const observerOptions = {
        root: null, // usa o viewport como referência
        rootMargin: '0px',
        threshold: 0.2 // A secção tem de estar 20% visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Atualiza o menu do desktop
                navLinks.forEach(link => {
                    link.classList.remove('active-day-link');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active-day-link');
                    }
                });

                // Atualiza o cabeçalho do telemóvel
                if (mobileDayHeader) {
                    const title = entry.target.querySelector('h2').textContent.split(':')[0]; // Pega só o "Dia X"
                    mobileDayHeader.textContent = `A navegar: ${title}`;
                    mobileDayHeader.classList.remove('hidden');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
