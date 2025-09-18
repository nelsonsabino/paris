// data/roteiro_day1.js
export const day1Data = {
    id: "day1",
    title: "Dia 1: Chegada e a Magia da Torre Eiffel",
    date: "Sexta-feira, 19 de Setembro",
    mapImage: "assets/images/Dia1b.png",
    highlights: [
        { name: "Torre Eiffel", icon: "fa-tower-observation", link: "visita_torre-eiffel.html", imageUrl: "https://cdn.pixabay.com/photo/2017/03/22/11/30/eiffel-tower-2164711_1280.jpg" },
        { name: "Ponte Alexandre III", icon: "fa-bridge", link: "visita_ponte-alexandre-iii.html", imageUrl: "https://www.duchensphotographie.fr/wp-content/uploads/2017/09/pont-alexandre-III-vignette-FB-article-blog-200917.jpg" },
        { name: "Jardim do Trocadéro", icon: "fa-camera-retro", link: "visita_jardim-trocadero.html", imageUrl: "https://www.parisinsidersguide.com/image-files/trocadero-renovation-2024-grand-jardin-trocadero-tour-eiffel-7-800-2x1.jpg" },
        { name: "Rue Cler", icon: "fa-store", link: "visita_rue-cler.html", imageUrl: "https://joetourist.ca/wp-content/uploads/2014/09/2014JCIMG-5139a-650x300.jpg" }
    ],
    sections: [
        {
            id: "viagem",
            navTitle: "Viagem",
            title: "ALENQUER → TERMINAL 2",
            mapLink: "https://maps.app.goo.gl/UDWRJ6vJieWfL2G19",
            timeline: [
                { time: "6:35", icon: "fa-car", title: "Saída de Casa" },
                { time: "7:15", icon: "fa-plane", title: "Chegada ao Aeroporto" },
                { time: "8:55", icon: "fa-ticket", title: "Embarque T2" },
                 { 
                    time: "9:40", 
                    icon: "fa-plane-departure", 
                    title: "Voo de Partida (TO 7641)",
                    requiresTicket: true,
                    ticketLink: "essencial.html#voos",
                    description: `
                        <ul class='list-disc list-inside text-sm mt-1'>
                            <li><strong>Nº Confirmação:</strong> B7UQNI</li>
                            <li><strong>Partida:</strong> 09:40</li>
                            <li><strong>Chegada:</strong> 13:10</li>
                            <li><strong>Duração:</strong> 2h 30min</li>
                        </ul>
                    `
                },
                { time: "13:10", icon: "fa-plane-arrival", title: "Chegada a Paris" }
            ]
        },
        {
            id: "chegada",
            navTitle: "Chegada",
            title: "AEROPORTO ORLY → CASA",
            mapLink: "https://maps.app.goo.gl/cyPYrbbdUmfpbmAz9",
            timeline: [
                {
                    time: "13:30", icon: "fa-utensils", title: "Pausa para Almoço e WC",
                    mealSuggestion: {
                        suggestion: "Refeição rápida no Aeroporto de Orly. Opções como McDonald's, Paul, ou sandes de supermercado.",
                    }
                },
                {
                    time: "14:00",
                    icon: "fa-ticket-simple",
                    title: "Comprar Bilhetes de Transporte",
                    description: "Dirigir-se às máquinas automáticas. Para cada pessoa, comprar 1 cartão Navigo Easy e carregar os bilhetes individuais necessários para os 5 dias."
                },
                {
                    time: "14:30", icon: "fa-route", title: "Percurso: Aeroporto d'Orly → Casa", description: "Duração total: ~54 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "14:30: Apanhar Metro <span class='metro-line' style='background-color: #62259d;'>14</span>", subText: "Da estação <strong>Aéroport d'Orly</strong>, direção Saint-Denis - Pleyel." },
                        { text: "14:57: Trocar em Pyramides", subText: "Sair do metro e seguir para a Linha 7." },
                        { text: "15:01: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Pyramides</strong>, direção La Courneuve-8-Mai-1945." },
                        { text: "15:22: Sair em Fort d'Aubervilliers", subText: "Saída final. Caminhar ~2 min até casa." }
                    ]
                },
                { time: "15:24", icon: "fa-house-chimney", title: "Chegada a Casa" },
                { time: "16:30", icon: "fa-cookie-bite", title: "Lanche da Tarde",
                    mealSuggestion: {
                        suggestion: "Pequeno lanche em casa (fruta, bolachas do supermercado) para aguentar até ao jantar.",
                    }
                }
            ]
        },
        {
            id: "ida-eiffel",
            navTitle: "Eiffel",
            title: "CASA → ÓPERA",
            mapLink: "https://maps.app.goo.gl/q5okVHgdTgK4mSdn7",
            timeline: [
                { time: "18:30", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "18:33", icon: "fa-route", title: "Percurso: Casa → Opéra",
                    description: "Duração total: ~23 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:33: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Mairie d'Ivry (14 paragens)." },
                        { text: "18:53: Sair em Opéra", subText: "Fim do percurso de metro. Daqui, seguir a pé para a zona de Invalides." }
                    ]
                }
            ]
        },
        {
            id: "zona-eiffel",
            navTitle: "Zona Eiffel",
            title: "ÓPERA - TOUR EIFFEL",
            mapLink: "https://maps.app.goo.gl/hsKbjghfZveBbgGw8",
             timeline: [
                { time: "19:00", icon: "fa-landmark", title: "Opéra Garnier", description: "Chegada, vista exterior e fotos rápidas." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé desde Opéra Garnier" },
            { 
                    time: "19:10", 
                    icon: "fa-basket-shopping", 
                    title: "Abastecimento em MONOP'", 
                    description: "Paragem rápida para comprar sandes e bebidas. <a href='https://maps.app.goo.gl/xXqvbr9uYVRGC6jH8' target='_blank' class='text-blue-600 hover:underline font-semibold'>(Ver no Mapa)</a>",
                    isLogistics: true // <-- Campo especial para o destaque
                },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé desde o MONOP'" },
                { time: "19:30", icon: "fa-landmark-dome", title: "Hôtel des Invalides", description: "Vista exterior, paragem rápida (~10 min).", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé desde Hôtel des Invalides." },
                { time: "19:45", icon: "fa-bridge", title: "Ponte Alexandre III", description: "<strong>Pôr-do-sol às 19:53.</strong> Chegar 10-15 min antes para garantir boa posição.", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~20 min a pé desde a Ponte Alexandre III." },
                { time: "20:30", icon: "fa-camera-retro", title: "Jardim do Trocadéro", description: "Fotos da Torre Eiffel, breve passeio (~15 min)." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé desde o Trocadéro." },
                { time: "20:45", icon: "fa-tower-observation", title: "Torre Eiffel", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1yA1rnPn_RHHJ3oZ8ImG2pWCC61VbrpNa/view?usp=sharing", guideLink: "visita_torre-eiffel.html", description: "Chegada 15 min antes do bilhete (21:00). Visita estimada: 1h30.", isHighlight: true },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé desde a Torre Eiffel." },
                { time: "22:00", icon: "fa-store", title: "Rue Cler", description: "Passeio rápido ou lanche (~30 min)." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min até à estação de metro." },
                { time: "22:30", icon: "fa-train-subway", title: "Entrada no Metro École Militaire" },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>Avenue Joseph Bouvard (Champ de Mars) - <a href='https://www.google.com/maps/search/?api=1&query=48.85429,2.29909' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                            <li>Avenue des Champs-Élysées (perto do Trocadéro) - <a href='https://www.google.com/maps/search/?api=1&query=48.86726,2.31709' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: "regresso-d1",
            navTitle: "Regresso",
            title: "ÉCOLE MILITAIRE → CASA",
            mapLink: "https://maps.app.goo.gl/bVccedxWUbvoQinR6",
            timeline: [
                {
                    time: "22:34", icon: "fa-route", title: "Percurso: École Militaire → Casa", description: "Duração total: ~34 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "22:34: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>École Militaire</strong>, direção Créteil-Pointe du Lac." },
                        { text: "22:40: Trocar em Opéra", subText: "Sair do metro e seguir para a Linha 7." },
                        { text: "22:47: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Opéra</strong>, direção La Courneuve-8-Mai-1945." },
                        { text: "23:06: Sair em Fort d'Aubervilliers", subText: "Caminhar ~2 min até casa." }
                    ]
                },
                { time: "23:08", icon: "fa-bed", title: "Regresso a Casa" }
            ]
        }
    ],
    shoppingInfo: {
        title: "Dicas de Compras do Dia",
        generalTips: [
            "Levem sempre convosco uma garrafa de água para ir recarregando nas fontes públicas (são potáveis).",
            "Evitem comprar snacks e bebidas dentro dos museus, pois os preços são muito mais altos.",
            "Tentem fazer as compras de supermercado ao final do dia para estarem preparados para o dia seguinte."
        ],
        shopping: {
            title: "Lista de Compras Essenciais (Dia 1)",
            list: [
                "Água (pack grande)", "Leite", "Cereais", "Pão de forma ou baguetes",
                "Manteiga/Compota/Nutella", "Sumo", "Vinho", "Cerveja", "Bolachas e barrinhas", "Fruta", "Iogurtes líquidos",
                "Ingredientes para jantares em casa (massa, molho, queijo, ovos, atum)."
            ],
            where: {
                description: "<strong>Supermercados perto de casa e da zona da Torre Eifell:</strong>",
                locations: [
                    { name: "Franprix Perto da Casa", link: "https://maps.app.goo.gl/uzspchqU5hnb7xpk7" },
                     { name: "Coccinelle Express Perto da Casa", link: "https://maps.app.goo.gl/a6QLaHNL6opvUuhw6" },
                    { name: "Supermercados na área", link: "https://maps.app.goo.gl/V3mjkNaZi5hk7mZbA" }                    
                ]
            }
        }
    }
};
