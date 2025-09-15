// data/roteiro_day4.js
export const day4Data = {
    id: "day4",
    title: "Dia 4: Imersão em Arte e Charme Parisiense",
    date: "Segunda-Feira, 22 de Setembro",
    mapImage: "assets/images/Dia4a.png",
    highlights: [
        { name: "Museu do Louvre", icon: "fa-landmark-dome", link: "visita_louvre.html", imageUrl: "https://www.parismania.com.br/wp-content/uploads/2016/12/le-louvre-20-728x364.jpeg" },
        { name: "Ópera Garnier", icon: "fa-masks-theater", link: "visita_opera-garnier.html", imageUrl: "https://loving-travel.com/wp-content/uploads/2023/04/230404120450001-e1680602804903.jpg" },
        { name: "Galeries Lafayette", icon: "fa-store", link: "visita_galeries-lafayette.html", imageUrl: "https://www.conexaoparis.com.br/wp-content/uploads/2017/07/Panorama2-e1499078294376.jpg" },
        { name: "Le Marais", icon: "fa-map-signs", link: "visita_marais.html", imageUrl: "https://asset-prod.france.fr/le_marais_paris_city_tour_private_df11833fe1.jpg" }
    ],
    sections: [
        {
            id: "louvre",
            navTitle: "Louvre",
            title: "CASA → MUSEU DO LOUVRE",
            mapLink: "https://maps.app.goo.gl/HWn3htQ9Ewh4bVmi7",
            timeline: [
                { time: "08:00", icon: "fa-mug-hot", title: "Pequeno-almoço em casa" },
                { time: "08:15", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "08:18", icon: "fa-route", title: "Percurso: Casa → Louvre", description: "Duração total: ~29 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "08:18: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Mairie d'Ivry." },
                        { text: "08:42: Sair em Palais Royal - Musée du Louvre", subText: "Caminhar ~2 min até à entrada." }
                    ]
                },
                { time: "09:00", icon: "fa-landmark-dome", title: "Museu do Louvre", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1zgpLvPJtgUGnMsOFsIbfg3tGwhPSse0w/view?usp=sharing", guideLink: "visita_louvre.html", description: "O museu tem várias casas de banho no interior." },
                { time: "11:00", icon: "fa-cookie-bite", title: "Lanche da Manhã",
                    mealSuggestion: {
                        suggestion: "Pausa rápida durante a visita ao Louvre para comer uma barrinha de cereais ou outro snack levado na mochila.",
                     /*   budget: "~1,5 € / pessoa"*/
                    }
                },
                { time: "13:00", icon: "fa-utensils", title: "Almoço perto do Louvre",
                    mealSuggestion: {
                        suggestion: "Comprar sandes ou saladas take-away no Monoprix da Rue de Rivoli, junto ao Louvre. É uma opção muito prática e económica para não perder tempo.",
                     /*   budget: "~7 € / pessoa"*/
                    }
                }
            ]
        },
        {
            id: "opera",
            navTitle: "Ópera",
            title: "PALAIS ROYAL → ÓPERA & GALERIES LAFAYETTE",
            mapLink: "https://maps.app.goo.gl/PDr1QqRANoiuuEJv8",
            timeline: [
                { icon: "fa-chess-board", title: "Palais Royal (Jardins e Colunas de Buren)" },
                { icon: "fa-archway", title: "Galerie Vivienne" },
                { icon: "fa-gem", title: "Place Vendôme" },
                { time: "15:00", icon: "fa-masks-theater", title: "Ópera Garnier", description: "Visita interior (~1h)", requiresTicket: true, ticketLink: "https://drive.google.com/drive/folders/1LzpXOo9CjPe37kIHkBRFG0Xy4sy5Kwg7?usp=sharing", guideLink: "visita_opera-garnier.html" },
                { icon: "fa-store", title: "Galeries Lafayette", description: "Visita ao terraço para vista (~45min)", guideLink: "visita_galeries-lafayette.html" },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>Dentro das Galeries Lafayette (recomendado)</li>
                            <li>Place de la Madeleine - <a href='https://www.google.com/maps/search/?api=1&query=48.86950,2.32480' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: "viagem-marais",
            navTitle: "Ida Marais",
            title: "GALERIES LAFAYETTE → FILLES DU CALVAIRE",
            mapLink: "https://maps.app.goo.gl/cpviY5jbzmUnDDVt7",
            timeline: [
                { icon: "fa-store", title: "Saída das Galeries Lafayette" },
                {
                    time: "18:30", icon: "fa-route", title: "Percurso: Opéra → Filles du Calvaire", description: "Duração total: ~8 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:30: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Opéra</strong>, direção Créteil-Pointe du Lac." },
                        { text: "18:38: Sair em Filles du Calvaire", subText: "" }
                    ]
                }
            ]
        },
        {
            id: "marais",
            navTitle: "Marais",
            title: "FILLES DU CALVAIRE → PRAÇA DES VOSGES",
            mapLink: "https://maps.app.goo.gl/MBQ3dAXYBiFW33Dn6",
            description: "Duração estimada do percurso a pé com visitas: ~1.5 - 2 horas",
            timeline: [
                { time: "18:45", icon: "fa-utensils", title: "Jantar no Marché des Enfants Rouges",
                    description: "Visitar o mercado coberto mais antigo de Paris e aproveitar para jantar numa das suas bancas de street food.",
                    mealSuggestion: {
                        suggestion: "Explorar a variedade de cozinhas do mundo (italiana, marroquina, etc.) e escolher uma opção para um jantar informal e saboroso.",
                      /*  budget: "~10-12 € / pessoa"*/
                    }
                },
                { time: "19:30", icon: "fa-person-walking", title: "Explorar o Marais", description: "Passeio pela Rue Vieille-du-Temple e Rue des Rosiers." },
                { time: "20:15", icon: "fa-square-full", title: "Praça des Vosges", description: "Chegada e visita." },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>7 Rue de Bretagne (perto do mercado) - <a href='https://www.google.com/maps/search/?api=1&query=48.86171,2.36214' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                            <li>Place des Vosges - <a href='https://www.google.com/maps/search/?api=1&query=48.85532,2.36531' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: "regresso-d4",
            navTitle: "Regresso",
            title: "MARAIS → CASA",
            mapLink: "https://maps.app.goo.gl/EKhGAzi27pZ2JzrB8",
            timeline: [
                {
                    time: "20:01", icon: "fa-route", title: "Percurso: Le Marais → Casa", description: "Duração total: ~32 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "20:09: Apanhar Metro <span class='metro-line' style='background-color: #f19e38;'>5</span>", subText: "Da estação <strong>Bréguet - Sabin</strong>, direção Bobigny-Pablo-Picasso." },
                        { text: "20:16: Trocar em Gare de l'Est", subText: "Sair do metro e seguir para a Linha 7." },
                        { text: "20:18: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Gare de l'Est</strong>, direção La Courneuve-8-Mai-1945." },
                        { text: "20:31: Sair em Fort d'Aubervilliers", subText: "Caminhar ~2 min até casa." }
                    ]
                },
                { time: "20:33", icon: "fa-bed", title: "Regresso a Casa" }
            ]
        }
    ],
    shoppingInfo: {
        title: "Dicas de Compras do Dia",
        shopping: {
            title: "Pontos de Compra Sugeridos",
            where: "<strong>Supermercado junto ao Louvre:</strong> Monoprix na 164 Rue de Rivoli, ideal para um almoço take-away. <strong>Para Jantar:</strong> Marché des Enfants Rouges na 19 Rue de Bretagne."
        }
    }
};
