// data/roteiro_day1.js
export const day1Data = {
    id: "day1",
    title: "Dia 1: Chegada e a Magia da Torre Eiffel",
    date: "Sexta-feira, 19 de Setembro",
    mapImage: "assets/images/Dia1b.png", // Imagem do mapa geral do dia
    sections: [
        {
            id: "viagem",
            navTitle: "Viagem", // Título personalizado para a navegação
            title: "ALENQUER → TERMINAL 2",
            mapLink: "https://maps.app.goo.gl/UDWRJ6vJieWfL2G19",
            timeline: [
                { time: "7:00", icon: "fa-car", title: "Saída de Casa" },
                { time: "7:45", icon: "fa-plane", title: "Chegada ao Aeroporto" },
                { time: "9:00", icon: "fa-ticket", title: "Fecho do Embarque T2" },
                { time: "9:40", icon: "fa-plane-departure", title: "Descolagem" },
                { time: "13:10", icon: "fa-plane-arrival", title: "Chegada a Paris" }
            ]
        },
        {
            id: "chegada",
            navTitle: "Chegada", // Título personalizado
            title: "AEROPORTO ORLY → CASA",
            mapLink: "https://maps.app.goo.gl/cyPYrbbdUmfpbmAz9",
            timeline: [
                {
                    time: "13:30", icon: "fa-utensils", title: "Pausa para Almoço e WC",
                    mealSuggestion: {
                        suggestion: "Refeição rápida no Aeroporto de Orly. Opções como McDonald's, Paul, ou sandes de supermercado.",
                       /* budget: "~10 € / pessoa" */
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
                     /*   budget: "~1,5 € / pessoa" */
                    }
                }
            ]
        },
        {
            id: "ida-eiffel",
            navTitle: "Eiffel", // Título personalizado para a navegação
            title: "CASA → INVALIDES",
            mapLink: "https://maps.app.goo.gl/eBNE3Dy1SoSbVufCA",
            timeline: [
                { time: "18:30", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "18:33", icon: "fa-route", title: "Percurso: Casa → Invalides", description: "Duração total: ~30 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:33: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Mairie d'Ivry." },
                        { text: "18:53: Trocar em Opéra", subText: "Sair do metro e seguir para a Linha 8." },
                        { text: "18:56: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Opéra</strong>, direção Balard." },
                        { text: "19:00: Sair em Invalides", subText: "" }
                    ]
                }
            ]
        },
        {
            id: "zona-eiffel",
            navTitle: "Zona Eiffel", // Título personalizado
            title: "INVALIDES - TOUR EIFFEL",
            mapLink: "https://maps.app.goo.gl/R9Hgbbwr1KJgKHkD8",
            timeline: [
                { icon: "fa-landmark-dome", title: "Hôtel des Invalides (Vista Exterior)" },
                { icon: "fa-bridge", title: "Ponte Alexandre III" },
                { icon: "fa-camera-retro", title: "Jardim do Trocadéro" },
                { time: "21:00", icon: "fa-tower-observation", title: "Torre Eiffel", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1yA1rnPn_RHHJ3oZ8ImG2pWCC61VbrpNa/view?usp=sharing", guideLink: "visita_torre-eiffel.html" },
                { icon: "fa-store", title: "Rue Cler" },
                { time: "22:00", icon: "fa-utensils", title: "Jantar Económico",
                    mealSuggestion: {
                        suggestion: "Explorar a Rue Cler para encontrar crepes ou levar sandes feitas. Uma boa opção é comprar algo num supermercado (Franprix/Monoprix) na zona.",
                      /*  budget: "~6 € / pessoa"*/
                    }
                },
             /*   { time: "22:45", icon: "fa-croissant", title: "Lanche Doce",
                    mealSuggestion: {
                        suggestion: "Comprar um croissant ou pão de chocolate para manter a energia dos mais novos antes da viagem de metro de volta.",
                        budget: "~2 € / pessoa"
                    }
                },*/
                { time: "23:00", icon: "fa-person-walking", title: "Ida para o Metro École Militaire" },
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
            navTitle: "Regresso", // Título personalizado
            title: "ÉCOLE MILITAIRE → CASA",
            mapLink: "https://maps.app.goo.gl/h8Evfet5J4ntq5cE8",
            timeline: [
                {
                    time: "23:04", icon: "fa-route", title: "Percurso: École Militaire → Casa", description: "Duração total: ~34 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "23:04: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>École Militaire</strong>, direção Créteil-Pointe du Lac." },
                        { text: "23:10: Trocar em Opéra", subText: "Sair do metro e seguir para a Linha 7." },
                        { text: "23:17: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Opéra</strong>, direção La Courneuve-8-Mai-1945." },
                        { text: "23:36: Sair em Fort d'Aubervilliers", subText: "Caminhar ~2 min até casa." }
                    ]
                },
                { time: "23:38", icon: "fa-bed", title: "Regresso a Casa" }
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
                description: "<strong>Supermercados perto de casa:</strong> Para o abastecimento principal, procurar por um Franprix ou Coccinelle Express",
                locations: [
                    { name: "Franprix Perto da Casa", link: "https://maps.app.goo.gl/uzspchqU5hnb7xpk7" },
                     { name: "Coccinelle Express Perto da Casa", link: "https://maps.app.goo.gl/a6QLaHNL6opvUuhw6" }
                ]
            }
        }
    }
};
