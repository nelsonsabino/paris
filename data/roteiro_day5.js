// data/roteiro_day5.js
export const day5Data = {
    id: "day5",
    title: "Dia 5: Despedida com Charme e Regresso",
    date: "Terça-Feira, 23 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia5a.png",
    sections: [
        {
            id: "cacifos",
            title: "CASA → CACIFO DE MALAS",
            mapLink: "https://maps.app.goo.gl/wW3zVHupQH2CQmCb8",
            timeline: [
                { time: "08:00", icon: "fa-mug-hot", title: "Pequeno-almoço em casa",
                    mealSuggestion: {
                        suggestion: "Última refeição em casa, aproveitando o que sobrou (cereais, pão, fruta)."
                    }
                },
                { time: "08:27", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "08:30", icon: "fa-route", title: "Percurso: Casa → Cacifo", description: "Duração total: ~31 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "08:30: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Mairie d'Ivry." },
                        { text: "08:55: Sair em Pont Neuf", subText: "Caminhar ~3 min até ao cacifo." }
                    ]
                },
                { time: "08:58", icon: "fa-suitcase", title: "Bounce Luggage Storage - Louvre" }
            ]
        },
        {
            id: "quartier-latin",
            title: "MANHÃ NO QUARTIER LATIN",
            mapLink: "https://maps.app.goo.gl/7GCuifBh5KauXXcCA",
            description: "Duração estimada do percurso a pé com visitas: ~3.5 horas",
            timeline: [
                { time: "09:30", icon: "fa-gem", title: "Sainte-Chapelle", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1ucQbtBDOxRx83d_m4Up5lnqzKcngOm3k/view?usp=drive_link", guideLink: "visita_sainte-chapelle.html", description: "Visita: ~1 hora" },
                { time: "10:40", icon: "fa-person-walking", title: "Rue de la Huchette & Igreja de São Severino", description: "Passeio: ~20 min" },
                 { time: "11:00", icon: "fa-cookie-bite", title: "Lanche da Manhã",
                    mealSuggestion: {
                        suggestion: "Comprar um croissant ou outra pastelaria numa das muitas 'boulangeries' do Quartier Latin.",
                     /*   budget: "~2 € / pessoa"*/
                    }
                },
                { time: "11:15", icon: "fa-monument", title: "Saint-Étienne-du-Mont", description: "Visita: ~25 min" },
                { time: "11:50", icon: "fa-landmark-dome", title: "Panteão (Vista Exterior)", guideLink: "visita_quartier-latin.html", description: "Fotos: ~15 min" },
                { time: "12:15", icon: "fa-seedling", title: "Jardim do Luxemburgo", guideLink: "visita_jardim-luxemburgo.html", description: "Pausa e caminhada: ~45 min" },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>Place du Panthéon - <a href='https://www.google.com/maps/search/?api=1&query=48.8471,2.3468' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                            <li>Jardin du Luxembourg - <a href='https://www.google.com/maps/search/?api=1&query=48.8460,2.3371' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: "st-germain",
            title: "ALMOÇO E TARDE EM SAINT-GERMAIN-DES-PRÉS",
            mapLink: "https://maps.app.goo.gl/ZcqjqcGoYmcdEt8u6",
            timeline: [
                { time: "13:00", icon: "fa-utensils", title: "Almoço em Brasserie",
                    description: "Encontrar uma brasserie típica no bairro de Saint-Germain para a refeição especial da viagem.",
                     mealSuggestion: {
                        suggestion: "É o 'desvio' ao orçamento, para uma experiência parisiense autêntica. Procurar menus com 'formule déjeuner'.",
                        budget: "~15€ (adulto), ~10€ (criança)"
                    }
                },
                { time: "14:30", icon: "fa-church", title: "Igreja de Saint-Sulpice", description: "Visitar o interior e ver as pinturas de Delacroix." },
                { time: "15:15", icon: "fa-coffee", title: "Pausa num Café Icónico",
                    description: "Sentar na esplanada do Les Deux Magots ou Café de Flore para um café e observar o movimento.",
                     mealSuggestion: {
                        suggestion: "Pedir um 'café crème' ou 'chocolat chaud' para a experiência completa. É caro, mas memorável.",
                        budget: "~6 € / pessoa"
                    }
                },
                { time: "16:00", icon: "fa-person-walking", title: "Explorar o Bairro e caminhar para o cacifo", description: "Passear pelas ruas charmosas e seguir a pé em direção à zona do Louvre." },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>10 Rue Saint-Sulpice - <a href='https://www.google.com/maps/search/?api=1&query=48.8509,2.3330' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                            <li>Marché Saint-Germain - <a href='https://www.google.com/maps/search/?api=1&query=48.8521,2.3346' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                },
                { time: "17:45", icon: "fa-suitcase", title: "Recolher Malas no Cacifo" }
            ]
        },
        {
            id: "regresso-d5",
            title: "CACIFO DE MALAS → AEROPORTO ORLY",
            mapLink: "https://maps.app.goo.gl/FT9XCYpm46v4dmf66",
            timeline: [
                {
                    time: "18:10", icon: "fa-route", title: "Percurso: Cacifo → Aeroporto Orly", description: "Duração total: ~30 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:10: Apanhar Metro <span class='metro-line' style='background-color: #62259d;'>14</span>", subText: "Da estação <strong>Châtelet</strong>, direção Aéroport d'Orly." },
                        { text: "18:36: Sair em Aéroport d'Orly" }
                    ]
                },
                { time: "18:40", icon: "fa-plane-departure", title: "Chegada ao Aeroporto Orly (Voo às 20:50)" },
                { time: "19:00", icon: "fa-utensils", title: "Jantar no Aeroporto",
                    mealSuggestion: {
                        suggestion: "Jantar antes do voo. Opções de fast food ou sandes (Paul, Exki, etc.) no terminal.",
                     /*   budget: "~10 € / pessoa"*/
                    }
                }
            ]
        }
    ],
    shoppingInfo: {
        title: "Dicas de Compras do Dia",
        shopping: {
            title: "Pontos de Compra Sugeridos",
            where: "<strong>Supermercado em Saint-Germain:</strong> Franprix na 26 Rue de Buci. Pode ser útil para comprar um último snack ou bebida antes de ir para o aeroporto."
        }
    }
};
