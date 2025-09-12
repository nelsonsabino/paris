// data/roteiro_day2.js
export const day2Data = {
    id: "day2",
    title: "Dia 2: Coração Histórico e Grandes Avenidas",
    date: "Sábado, 20 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia2b.png",
    sections: [
        {
            title: "CASA → ÎLE DE LA CITÉ",
            mapLink: "https://maps.app.goo.gl/7EPhqZnEWWDcPmbS6",
            timeline: [
                { time: "8:00", icon: "fa-mug-hot", title: "Pequeno-almoço em casa", 
                    mealSuggestion: {
                        suggestion: "Refeição em casa com os produtos comprados no dia anterior (pão, leite, cereais, etc).",
                        budget: "~2 € / pessoa"
                    }
                },
                { time: "8:21", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "8:24", icon: "fa-route", title: "Percurso: Casa → Île de la Cité", description: "Duração total: ~37 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "8:24: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Villejuif-Louis Aragon." },
                        { text: "8:50: Sair em Châtelet", subText: "Caminhar ~8 min até ao nosso ponto de partida na ilha." }
                    ]
                }
            ]
        },
        {
            title: "ÎLE DE LA CITÉ → SQUARE DU VERT-GALANT",
            mapLink: "https://maps.app.goo.gl/rUXPgUtAZMW1sijY7",
            timeline: [
                { time: "8:58", icon: "fa-coffee", title: "Au Vieux Paris d'Arcole" },
                { time: "9:10", icon: "fa-church", title: "Catedral de Notre-Dame", description: "Visita interior (~30-45min.) e Point Zéro", requiresTicket: true, ticketLink: "https://resa.notredamedeparis.fr/en/reservationindividuelle/tickets", guideLink: "visita_notre-dame.html" },
                { icon: "fa-book", title: "Shakespeare and Company" },
                { time: "11:00", icon: "fa-cookie-bite", title: "Lanche da Manhã", 
                    mealSuggestion: {
                        suggestion: "Levar snacks do supermercado para comer a meio da manhã no Quartier Latin, ou comprar um croissant numa pastelaria local.",
                        budget: "~2 € / pessoa"
                    }
                },
                { icon: "fa-church", title: "Igreja de São Severino" },
                { icon: "fa-person-walking", title: "Rue de la Huchette" },
                { icon: "fa-fountain", title: "Fontaine Saint-Michel" },
                { icon: "fa-flower", title: "Mercado das Flores Rainha Elizabeth II" },
                { icon: "fa-tree-city", title: "Place Dauphine" },
                { icon: "fa-tree", title: "Square du Vert-Galant" },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>Place du Parvis de Notre-Dame - <a href='https://www.google.com/maps/search/?api=1&query=48.85311,2.34854' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                            <li>Quai du Louvre (Perto da Pont Neuf) - <a href='https://www.google.com/maps/search/?api=1&query=48.85834,2.34114' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                }
            ]
        },
        {
            title: "SQUARE DU VERT-GALANT → LE PETIT PALAIS",
            mapLink: "https://maps.app.goo.gl/Z2i67u12TGEfCiS17",
            timeline: [
                { icon: "fa-bridge", title: "Pont Neuf" },
                { icon: "fa-bridge", title: "Pont des Arts" },
                { icon: "fa-archway", title: "Arco do Triunfo do Carrossel" },
                { time: "13:00", icon: "fa-utensils", title: "Almoço no Jardim das Tulherias", 
                    mealSuggestion: {
                        suggestion: "Optar por uma 'formule' de padaria (sandes + bebida + sobremesa). É prático e económico para comer ao ar livre nos jardins.",
                        budget: "~7 € / pessoa"
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
                        budget: "~5 € / pessoa"
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
