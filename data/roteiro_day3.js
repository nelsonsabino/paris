// data/roteiro_day3.js
export const day3Data = {
    id: "day3",
    title: "Dia 3: Realeza, Arte Boémia e Vistas Icónicas",
    date: "Domingo, 21 de Setembro",
    mapImage: "assets/images/Dia3a.png",
    sections: [
        {
            id: "versalhes",
            navTitle: "Versalhes",
            title: "CASA → VERSALHES",
            mapLink: "https://maps.app.goo.gl/QxRJ6gVoJ88yKXfH9",
            timeline: [
                { time: "07:00", icon: "fa-mug-hot", title: "Pequeno-almoço em casa",
                    mealSuggestion: {
                        suggestion: "Refeição reforçada em casa, antes da longa viagem de RER para Versalhes.",
                       /* budget: "~2 € / pessoa"*/
                    }
                },
                { time: "07:26", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "07:29", icon: "fa-route", title: "Percurso: Casa → Versailles", description: "Duração total: ~1h 24min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "07:29: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Mairie d'Ivry." },
                        { text: "07:49: Trocar em Opéra", subText: "Sair do metro e seguir para a Linha 8." },
                        { text: "07:55: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Opéra</strong>, direção Balard." },
                        { text: "07:59: Trocar em Invalides", subText: "Sair do metro e seguir para o RER C." },
                        { text: "08:04: Apanhar RER <span class='metro-line' style='background-color: #f3d311; color: black;'>C</span>", subText: "Direção Versailles Château Rive Gauche." },
                        { text: "08:35: Sair em Versailles Château Rive Gauche", subText: "Caminhar ~15 min até ao palácio." }
                    ]
                },
                { time: "08:50", icon: "fa-crown", title: "Palácio de Versalhes", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1JWHf_KUwofGdZgYj5wp0JswPyZcCs3ys/view?usp=drive_link", guideLink: "visita_versalhes.html", description: "Entrada no Palácio. Nota: Existem várias casas de banho dentro do palácio e nos jardins." },
                { time: "13:00", icon: "fa-utensils", title: "Almoço Piquenique",
                    mealSuggestion: {
                        suggestion: "Almoço nos jardins com sandes preparadas no dia anterior. Evita os preços altos e as filas dos restaurantes do complexo.",
                     /*   budget: "~7 € / pessoa"*/
                    }
                }
            ]
        },
        {
            id: "viagem-montmartre",
            navTitle: "Ida Montmartre",
            title: "VERSALHES → MONTMARTRE",
            mapLink: "https://maps.app.goo.gl/4vWWzNcMPB3eZq3T6",
            timeline: [
                {
                    time: "14:40", icon: "fa-route", title: "Percurso: Versailles → Montmartre", description: "Duração total: ~54 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "14:40: Apanhar RER <span class='metro-line' style='background-color: #f3d311; color: black;'>C</span>", subText: "Da estação <strong>Versailles Château Rive Gauche</strong>." },
                        { text: "15:12: Paragem no Musée d'Orsay", subText: "" },
                        { text: "15:22: Apanhar Metro <span class='metro-line' style='background-color: #007852;'>12</span>", subText: "Da estação <strong>Solférino/Assemblée Nationale</strong>, direção Mairie D'aubervilliers." },
                        { text: "15:34: Sair em Abbesses", subText: "" }
                    ]
                }
            ]
        },
        {
            id: "montmartre",
            navTitle: "Montmartre",
            title: "MONTMARTRE → MOULIN ROUGE",
            mapLink: "https://maps.app.goo.gl/DBCJQ62qSGpKDVL28",
            description: "Duração estimada do percurso a pé com visitas: ~2.5 horas",
            timeline: [
                { time: "15:35", icon: "fa-heart", title: "Muro do Eu Te Amo (Le Mur des Je t'aime)", description: "Visita e fotos: ~15 min" },
                { time: "16:00", icon: "fa-place-of-worship", title: "Basílica de Sacré Cœur", guideLink: "visita_montmartre.html", description: "Visita ao interior e vista: ~45 min" },
                { time: "16:45", icon: "fa-palette", title: "Place du Tertre", description: "Passeio pela praça dos artistas: ~30 min" },
                 { time: "17:00", icon: "fa-ice-cream", title: "Lanche da Tarde",
                    mealSuggestion: {
                        suggestion: "Pausa para um crepe, croissant ou outra pastelaria local numa das muitas 'boulangeries' de Montmartre.",
                       /* budget: "~3 € / pessoa"*/
                    }
                },
                { time: "17:20", icon: "fa-utensils", title: "Le Consulat & La Maison Rose", description: "Paragem para fotos: ~10 min" },
                { icon: "fa-windmill", title: "Moulin Radet", description: "Vista de passagem" },
                { time: "17:45", icon: "fa-mug-hot", title: "Café des Deux Moulins", description: "Visita rápida/fotos: ~5 min" },
                { time: "17:50", icon: "fa-wind", title: "Moulin Rouge", description: "Chegada e fotos finais: ~10 min" },
                { time: "19:30", icon: "fa-utensils", title: "Jantar em Montmartre",
                    mealSuggestion: {
                        suggestion: "Jantar rápido e económico. A zona tem muitas opções de kebab, pizza ou falafel que são saborosas e baratas, antes de apanhar o metro.",
                    /*    budget: "~9 € / pessoa"*/
                    }
                },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>1 Rue Lamarck (perto da Sacré-Cœur) - <a href='https://www.google.com/maps/search/?api=1&query=48.88626,2.34386' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                            <li>Avenue Rachel (perto do Moulin Rouge) - <a href='https://www.google.com/maps/search/?api=1&query=48.88372,2.33088' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: "regresso-d3",
            navTitle: "Regresso",
            title: "MOULIN ROUGE → CASA",
            mapLink: "https://maps.app.goo.gl/Tic6qLZwvFfQGZCH8",
            timeline: [
                {
                    time: "19:33", icon: "fa-route", title: "Percurso: Moulin Rouge → Casa", description: "Duração total: ~25 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "19:36: Apanhar Metro <span class='metro-line' style='background-color: #003ca6;'>2</span>", subText: "Da estação <strong>Blanche</strong>, direção Nation." },
                        { text: "19:42: Trocar em Stalingrad", subText: "Sair do metro e seguir para a Linha 7." },
                        { text: "19:48: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Stalingrad</strong>, direção La Courneuve-8-Mai-1945." },
                        { text: "19:56: Sair em Fort d'Aubervilliers", subText: "Caminhar ~2 min até casa." }
                    ]
                },
                { time: "19:58", icon: "fa-bed", title: "Regresso a Casa" }
            ]
        }
    ],
    shoppingInfo: {
        title: "Dicas de Compras do Dia",
        shopping: {
            title: "Pontos de Compra e Planeamento",
            where: "<strong>Dica para Versalhes:</strong> Preparar o almoço e lanches na véspera é essencial. <strong>Supermercados em Montmartre:</strong> Carrefour City (39 Rue Caulaincourt) ou Franprix (14 Rue Lepic) são boas opções para comprar algo para o jantar ou para o dia seguinte."
        }
    }
};
