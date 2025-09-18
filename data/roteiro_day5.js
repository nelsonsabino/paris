// data/roteiro_day5.js
export const day5Data = {
    id: "day5",
    title: "Dia 5: Despedida com Charme e Regresso",
    date: "Terça-Feira, 23 de Setembro",
    mapImage: "assets/images/Dia5a.png",
    highlights: [
        { name: "Sainte-Chapelle", icon: "fa-gem", link: "visita_sainte-chapelle.html", imageUrl: "https://www.civitatis.com/f/francia/paris/guia/sainte-chapelle.jpg" },
        { name: "Quartier Latin", icon: "fa-graduation-cap", link: "visita_quartier-latin.html", imageUrl: "https://cdn.tourdesk.io/activity-gallery/f1f967f84edd4696975c3e6614e7ca07_main_slider.jpg" },
        { name: "Jardim do Luxemburgo", icon: "fa-seedling", link: "visita_jardim-luxemburgo.html", imageUrl: "https://www.civitatis.com/f/francia/paris/guia/jardines-luxemburgo.jpg" },
        { name: "Saint-Germain-des-Prés", icon: "fa-mug-saucer", link: "visita_saint-germain.html", imageUrl: "https://media.vrbo.com/lodging/78000000/77880000/77875600/77875504/83a7323f.jpg" }
    ],
    sections: [
        {
            id: "cacifos",
            navTitle: "Malas",
            title: "CASA → CACIFO DE MALAS",
            mapLink: "https://maps.app.goo.gl/ekxEaaQ8wJTVeGcT7",
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
                            { 
                    time: "08:58", 
                    icon: "fa-suitcase", 
                    title: "Bounce Luggage Storage - Near Châtelet Subway Station",
                    description: "<strong>Reservado!</strong> Usar a app."
                }
            ]
        },
        {
            id: "quartier-latin",
            navTitle: "Quartier Latin",
            title: "MANHÃ NO QUARTIER LATIN",
            mapLink: "https://maps.app.goo.gl/JkgAoFCqB5ca5qpE6",
            timeline: [
                { time: "09:00", icon: "fa-train-subway", title: "Saída do Metro Châtelet", description: "~4 min a pé até Sainte-Chapelle." },
                { time: "09:30", icon: "fa-gem", title: "Sainte-Chapelle", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1ucQbtBDOxRx83d_m4Up5lnqzKcngOm3k/view?usp=drive_link", guideLink: "visita_sainte-chapelle.html", description: "Visita: ~1 hora. Saída: 10:30", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "10:30", icon: "fa-road", title: "Rue de la Huchette", description: "Passeio e fotos (~10 min). Saída: 10:40" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~2 min a pé." },
                { time: "10:40", icon: "fa-church", title: "Igreja de São Severino", description: "Visita breve (~20 min). Saída: 11:00" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~2 min a pé." },
                { time: "11:00", icon: "fa-cookie-bite", title: "Lanche da Manhã",
                    mealSuggestion: {
                        suggestion: "Comprar um croissant ou outra pastelaria numa das muitas 'boulangeries' do Quartier Latin (~15 min). Saída: 11:15"
                    }
                },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~3 min a pé." },
                { time: "11:15", icon: "fa-monument", title: "Saint-Étienne-du-Mont", description: "Visita: ~25 min. Saída: 11:40", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~3 min a pé." },
                { time: "11:40", icon: "fa-landmark-dome", title: "Panteão (Vista Exterior)", guideLink: "visita_quartier-latin.html", description: "Fotos: ~15 min. Saída: 11:55", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "11:55", icon: "fa-seedling", title: "Jardim do Luxemburgo", guideLink: "visita_jardim-luxemburgo.html", description: "Pausa, caminhada e fotos: ~45 min. Saída: 12:40", isHighlight: true  }
            ]
        },
        {
            id: "st-germain",
            navTitle: "St. Germain",
            title: "ALMOÇO E TARDE EM SAINT-GERMAIN-DES-PRÉS",
            mapLink: "https://maps.app.goo.gl/8vhhuJfL3BteB6mk9",
            timeline: [
                { time: "13:00", icon: "fa-utensils", title: "Almoço em Brasserie",
                     mealSuggestion: {
                        suggestion: "Escolha uma brasserie típica para a refeição especial. Duração: ~1h30. Saída: 14:30",
                        /*budget: "~15€ (adulto), ~10€ (criança)"*/
                    }
                },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~6 min a pé." },
                { time: "14:30", icon: "fa-church", title: "Igreja de Saint-Sulpice", description: "Visita e pinturas de Delacroix (~30 min). Saída: 15:00", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "15:00", icon: "fa-coffee", title: "Pausa num Café Icónico",
                     mealSuggestion: {
                        suggestion: "Sentar no Les Deux Magots ou Café de Flore (~30 min). Saída: 15:30",
                        /*budget: "~6 € / pessoa"*/
                    }
                },
                { time: "15:30", icon: "fa-church", title: "Abadia de Saint-Germain-des-Prés", description: "Visita rápida e fotos (~10 min). Saída: 15:40", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~2 min a pé." },
                { time: "15:40", icon: "fa-tree", title: "Square Laurent-Prache", description: "Passeio breve, fotos (~10 min). Saída: 15:50" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~3 min a pé." },
                { time: "15:50", icon: "fa-shopping-bag", title: "Rue Jacob", description: "Passeio por ruas pitorescas, lojas e galerias (~20 min). Saída: 16:10" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé." },
                { time: "16:10", icon: "fa-road", title: "Rue de Seine", description: "Caminhada final explorando boutiques até ao cacifo (~35 min). Chegada: 16:45" },
                { time: "17:45", icon: "fa-suitcase", title: "Recolher Malas no Cacifo", description: "Duração estimada: ~15 min para recolher as malas. Saída: 18:00" }
            ]
        },
        {
            id: "regresso-d5",
            navTitle: "Regresso",
            title: "CACIFO DE MALAS → AEROPORTO ORLY",
            mapLink: "https://maps.app.goo.gl/DQDxF2NFxLGHDybs5", // <-- LINK ATUALIZADO
            timeline: [
                {
                    time: "18:10", 
                    icon: "fa-route", 
                    title: "Percurso: Cacifo → Aeroporto Orly", 
                    description: "Duração total: ~30 min. <strong>Alternativa:</strong> Táxi via app (custo total ~55€).",
                    accordion: [
                        { text: "18:10: Apanhar Metro <span class='metro-line' style='background-color: #62259d;'>14</span>", subText: "Da estação <strong>Châtelet</strong>, direção Aéroport d'Orly." },
                        { text: "18:36: Sair em Aéroport d'Orly" }
                    ]
                },
                { time: "18:40", icon: "fa-plane-departure", title: "Chegada ao Aeroporto Orly (Terminal 3)" },
                { time: "19:00", icon: "fa-utensils", title: "Jantar no Aeroporto",
                    mealSuggestion: {
                        suggestion: "Jantar antes do voo. Opções de fast food ou sandes (Paul, Exki, etc.) no terminal.",
                    }
                },
                { 
                    time: "20:00", 
                    icon: "fa-door-open", 
                    title: "Chegada à Porta de Embarque",
                    description: "Fecho previsto às 20:20. A partida é no <strong>Terminal 3</strong>."
                },
                { 
                    time: "20:50", 
                    icon: "fa-plane-up", 
                    title: "Voo de Regresso (TO 7664)",
                    requiresTicket: true,
                    ticketLink: "essencial.html#voos",
                    description: `
                        <ul class='list-disc list-inside text-sm mt-1'>
                            <li><strong>Nº Confirmação:</strong> CD9VUW</li>
                            <li><strong>Partida:</strong> 20:50</li>
                            <li><strong>Chegada:</strong> 22:30</li>
                            <li><strong>Duração:</strong> 2h 40min</li>
                        </ul>
                    `
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
