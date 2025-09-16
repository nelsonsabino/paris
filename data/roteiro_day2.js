// data/roteiro_day2.js
export const day2Data = {
    id: "day2",
    title: "Dia 2: Coração Histórico e Grandes Avenidas",
    date: "Sábado, 20 de Setembro",
    mapImage: "assets/images/Dia2b.png",
    highlights: [
        { name: "Notre-Dame", icon: "fa-church", link: "visita_notre-dame.html", imageUrl: "https://www.civitatis.com/f/francia/paris/guia/catedral-notre-dame.jpg" },
        { name: "Musée d'Orsay", icon: "fa-palette", link: "visita_musee-orsay.html", imageUrl: "https://asset-prod.france.fr/France_Seine_Paris_musee_d_Orsay_42258_Patrice_Schmidt_de06a75b85.jpg" },
        { name: "Jardim das Tulherias", icon: "fa-tree", link: "visita_jardim-tulherias.html", imageUrl: "https://cparici.com/wp-content/uploads/2025/08/cparici-2025-08-16T075320.195.jpg" },
        { name: "Arco do Triunfo", icon: "fa-archway", link: "visita_arco-do-triunfo.html", imageUrl: "https://blog.actafrika.net/wp-content/uploads/2021/09/arco-triunfo.jpg" }
    ],
    sections: [
        {
            id: "ida-cite",
            navTitle: "Ida",
            title: "CASA → ÎLE DE LA CITÉ",
            mapLink: "https://maps.app.goo.gl/ZLTXGwidLLW28Cpv5", // <-- LINK ATUALIZADO
            timeline: [ // <-- TIMELINE ATUALIZADA
                { time: "08:01", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "08:04", icon: "fa-route", title: "Percurso: Casa → Île de la Cité", description: "Duração total: ~37 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "08:04: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Villejuif-Louis Aragon (18 paragens)." },
                        { text: "08:30: Sair em Châtelet", subText: "Caminhar ~8 min até ao ponto de partida na ilha, chegando às 08:38." }
                    ]
                }
            ]
        },
        {
            id: "ile-cite",
            navTitle: "Île Cité",
            title: "ÎLE DE LA CITÉ → SQUARE DU VERT-GALANT",
            mapLink: "https://maps.app.goo.gl/5E9U6Ka6DwobLj5e7", // <-- LINK ATUALIZADO
            timeline: [ // <-- TIMELINE COMPLETAMENTE REFEITA
                { time: "08:40", icon: "fa-coffee", title: "Au Vieux Paris d'Arcole", description: "Início do passeio, fotos rápidas (~10 min)." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé." },
                { time: "08:50", icon: "fa-church", title: "Catedral de Notre-Dame", description: "Visita interior + Point Zéro (~1h10). Saída prevista: 10:00.", requiresTicket: true, ticketLink: "https://resa.notredamedeparis.fr/en/reservationindividuelle/tickets", guideLink: "visita_notre-dame.html" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~2 min a pé." },
                { time: "10:00", icon: "fa-book", title: "Shakespeare and Company", description: "Livraria histórica, fotos (~15 min). Saída prevista: 10:15." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé." },
                { time: "10:25", icon: "fa-church", title: "Igreja de São Severino", description: "Visita interior/exterior (~15 min). Saída prevista: 10:40." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "10:45", icon: "fa-road", title: "Rue de la Huchette", description: "Passeio rápido, ambiente da rua (~10 min). Saída prevista: 10:55." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "11:00", icon: "fa-fountain", title: "Fontaine Saint-Michel", description: "Fotos rápidas, breve paragem (~10 min). Saída prevista: 11:10." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "11:15", icon: "fa-leaf", title: "Mercado das Flores Rainha Elizabeth II", description: "Passeio e fotos (~15 min). Saída prevista: 11:30." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "11:35", icon: "fa-tree-city", title: "Place Dauphine", description: "Breve visita, fotos (~10 min). Saída prevista: 11:45." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~3 min a pé." },
                { time: "11:48", icon: "fa-tree", title: "Square du Vert-Galant", description: "Pausa final, fotos, contemplação do Sena (~10 min). Saída prevista: 11:58." },
            ]
        },
        {
            id: "tulherias",
            navTitle: "Tulherias",
            title: "SQUARE DU VERT-GALANT → LE PETIT PALAIS",
            mapLink: "https://maps.app.goo.gl/Z2i67u12TGEfCiS17",
            rainyDayAlternatives: {
                title: "Plano B (Chuva): Restaurantes Perto",
                restaurants: [
                    { name: "La Petite Bouclerie", type: "Creperia", mapLink: "https://maps.app.goo.gl/6dyuiZb21UHdwWgo8" },
                    { name: "Le Bistro des Augustins", type: "Restaurante francês", mapLink: "https://maps.app.goo.gl/h3ZLYmS8VsP9WNu38" },
                    { name: "Gusto Italia Amélie", type: "Restaurante italiano", mapLink: "https://maps.app.goo.gl/v19S5NtF13CDPMRD9" }
                ]
            },
            timeline: [
                { icon: "fa-bridge", title: "Pont Neuf" },
                { icon: "fa-bridge", title: "Pont des Arts" },
                { icon: "fa-archway", title: "Arco do Triunfo do Carrossel" },
                { time: "13:00", icon: "fa-utensils", title: "Almoço no Jardim das Tulherias", 
                    mealSuggestion: {
                        suggestion: "Optar por uma 'formule' de padaria (sandes + bebida + sobremesa). É prático e económico para comer ao ar livre nos jardins.",
                    }
                },
                { icon: "fa-fountain", title: "Jardim das Tulherias" },
                { icon: "fa-square-full", title: "Place de la Concorde" },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>Quai Anatole France (perto do Musée d'Orsay) - <a href='https://www.google.com/maps/search/?api=1&query=48.86261,2.31964' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                            <li>Avenue des Champs-Élysées (Jardins) - <a href='https://www.google.com/maps/search/?api=1&query=48.86726,2.31709' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                },
                { time: "15:30", icon: "fa-building-columns", title: "Musée d'Orsay", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1Bu_gwN7g8FUIv_qIG1aK_RuN7e0ACQcr/view?usp=drive_link", guideLink: "visita_musee-orsay.html" },
                { icon: "fa-landmark", title: "Petit Palais/Grand Palais (Exterior)" }
            ]
        },
        {
            id: "arco-triunfo",
            navTitle: "Arco",
            title: "METRO ATÉ ARCO DO TRIUNFO",
            mapLink: "https://maps.app.goo.gl/833iy7seTNW8XpgP7",
            timeline: [
                {
                    time: "18:07", icon: "fa-route", title: "Percurso: Clemenceau → Arco do Triunfo", description: "Duração total: ~7 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:07: Apanhar Metro <span class='metro-line' style='background-color: #ffcd00; color: black;'>1</span>", subText: "Da estação <strong>Champs-Élysées - Clemenceau</strong>, direção La Défense." },
                        { text: "18:10: Sair em Charles de Gaulle – Étoile", subText: "" }
                    ]
                },
                { icon: "fa-archway", title: "Arco do Triunfo", guideLink: "visita_arco-do-triunfo.html" },
                { icon: "fa-road", title: "Champs-Élysées", guideLink: "visita_champs-elysees.html" }
            ]
        },
        {
            id: "regresso-d2",
            navTitle: "Regresso",
            title: "CHAMPS-ÉLYSÉES → CASA",
            mapLink: "https://maps.app.goo.gl/SA1t9d2R1KwJmbvj8",
            timeline: [
                {
                    time: "20:02", icon: "fa-route", title: "Percurso: Champs-Élysées → Casa", description: "Duração total: ~36 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "20:05: Apanhar Metro <span class='metro-line' style='background-color: #ffcd00; color: black;'>1</span>", subText: "Da estação <strong>Charles de Gaulle-Etoile</strong>, direção Château de Vincennes." },
                        { text: "20:12: Trocar em Palais Royal - Musée du Louvre", subText: "Sair do metro e seguir para a Linha 7." },
                        { text: "20:14: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Direção La Courneuve-8-Mai-1945." },
                        { text: "20:36: Sair em Fort d'Aubervilliers", subText: "Caminhar ~2 min até casa." }
                    ]
                },
                { time: "20:38", icon: "fa-bed", title: "Regresso a Casa" },
                { time: "21:00", icon: "fa-utensils", title: "Jantar em Casa", 
                    mealSuggestion: {
                        suggestion: "Refeição em casa para poupar. Uma massa com salada é uma opção rápida e barata após um dia longo.",
                    }
                }
            ]
        }
    ],
     shoppingInfo: {
        title: "Dicas de Compras do Dia",
       shopping: {
            title: "Pontos de Compra Sugeridos",
            where: {
                description: "<strong>Supermercado no Quartier Latin:</strong> Franprix na 32 Rue Saint-André des Arts. Bom para reabastecer snacks e bebidas antes de seguir para a zona das Tulherias e Champs-Élysées (onde os preços são mais altos).",
                locations: [
                    { name: "Franprix", link: "https://maps.app.goo.gl/FoV2c5YnBiqtz7u96" }
                ]
            }
        }
    }
};
