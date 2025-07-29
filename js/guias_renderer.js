// js/guias_renderer.js

// Lista central de todos os guias para fácil manutenção
const guias = [
    { link: 'visita_torre-eiffel.html', img: 'https://res.cloudinary.com/dtljonz0f/image/upload/f_auto/q_auto/v1/gc-v1/paris/3%20giorni%20a%20Parigi%20Tour%20Eiffel?_a=BAVAZGE70', title: 'Torre Eiffel' },
    { link: 'visita_louvre.html', img: 'https://www.relaisdulouvre.com/wp-content/uploads/2024/03/Louvre1-1024x682.jpg', title: 'Museu do Louvre' },
    { link: 'visita_versalhes.html', img: 'https://paisageiro.com/wp-content/uploads/2023/03/organizacao-jardins-de-versalhes1-1024x683.jpg', title: 'Palácio de Versalhes' },
    { link: 'visita_notre-dame.html', img: 'https://images.adsttc.com/media/images/671f/6aa2/3dfd/b479/8aac/78a7/large_jpg/notre-dame-de-paris-announces-reopening-date-and-proposes-constroversial-entrance-fee_2.jpg?1730112234', title: 'Catedral de Notre-Dame' },
    { link: 'visita_sainte-chapelle.html', img: 'https://www.timographie360.fr/photos/realisations/sliders/hd/visite-virtuelle-sainte-chapelle-02_518.jpg', title: 'Sainte-Chapelle' },
    { link: 'visita_montmartre.html', img: 'https://www.civitatis.com/f/francia/paris/free-tour-montmartre-589x392.jpg', title: 'Montmartre' },
    { link: 'visita_musee-orsay.html', img: 'https://officiel-galeries-musees.fr/wp-content/uploads/2020/08/orsay-musee.jpg', title: 'Musée d\'Orsay' },
    { link: 'visita_champs-elysees.html', img: 'https://www.tudosobreparis.com/f/francia/paris/guia/campos-eliseos-m.jpg', title: 'Champs-Élysées' },
    { link: 'visita_galeries-lafayette.html', img: 'https://www.franceguide.info/wp-content/uploads/sites/18/paris-galeries-lafayette.jpg', title: 'Galeries Lafayette' },
    { link: 'visita_quartier-latin.html', img: 'https://midias-turismo.eurodicas.com.br/wp-content/uploads/2025/02/quartier-latin-1-1200x800.jpg.webp', title: 'Quartier Latin' },
    { link: 'visita_opera-garnier.html', img: 'https://imgmd.net/images/v1/guia/1704274/opera-garnier.jpg', title: 'Ópera Garnier' },
    { link: 'visita_arco-do-triunfo.html', img: 'https://images.mnstatic.com/61/40/614037e83d114c30b06f7eecee55ff80.jpg', title: 'Arco do Triunfo' },
    { link: 'visita_jardim-luxemburgo.html', img: 'https://vinhedoscuiaba.com.br/blog/wp-content/uploads/2021/06/iStock-489807187_low.jpg', title: 'Jardim do Luxemburgo' }
];

function renderStickyNav() {
    const navContainer = document.getElementById('guias-nav-container');
    if (!navContainer) return;

    let navLinks = '';
    guias.forEach(guia => {
        navLinks += `
            <li class="flex-shrink-0">
                <a href="${guia.link}" title="${guia.title}" class="block border-2 border-transparent hover:border-blue-500 rounded-lg p-1 transition">
                    <img src="${guia.img}" alt="${guia.title}" class="w-16 h-16 object-cover rounded-md">
                </a>
            </li>
        `;
    });

    navContainer.innerHTML = `<ul class="flex md:flex-col items-center gap-2 p-2">${navLinks}</ul>`;
}

// Chamar a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', renderStickyNav);
