// data/roteiro_day3.js
export const day3Data = {
    id: "day3",
    title: "Dia 3: Realeza, Arte Boémia e Vistas Icónicas",
    date: "Domingo, 21 de Setembro",
    mapImage: "assets/images/Dia3a.png",
    highlights: [
        { name: "Palácio de Versalhes", icon: "fa-crown", link: "visita_versalhes.html", imageUrl: "https://static.historiadomundo.com.br/conteudo/images/o-palacio-versalhes-comecou-tomar-atual-forma-durante-reinado-luis-xiv-5bc475fc3586e.jpg" },
        { name: "Sacré-Cœur", icon: "fa-place-of-worship", link: "visita_montmartre.html", imageUrl: "https://travel.com.br/wp-content/uploads/2024/07/basilica-capa.jpg" },
        { name: "Place du Tertre", icon: "fa-palette", link: "visita_montmartre.html", imageUrl: "https://www.travelfranceonline.com/wp-content/uploads/2013/05/Montmartre-3.jpg" },
        { name: "Moulin Rouge", icon: "fa-wind", link: "visita_moulin-rouge.html", imageUrl: "https://www.civitatis.com/f/francia/paris/entradas-moulin-rouge-grid.jpg" }
    ],
    sections: [
        {
            id: "versalhes",
            navTitle: "Versalhes",
            title: "CASA → VERSALHES",
            mapLink: "https://maps.app.goo.gl/QxRJ6gVoJ88yKXfH9",
            rainyDayAlternatives: {
                title: "Plano B (Chuva): Restaurantes em Versalhes",
                restaurants: [
                    { name: "Aux Delices de Katty", type: "Restaurante", mapLink: "https://maps.app.goo.gl/BZZe8mht2r2CTKTx8" },
                    { name: "Les Crêpes à Tonton", type: "Creperia", mapLink: "https://maps.app.goo.gl/NmczRsEK5egM9xoH8" },
                    { name: "Crêperie Belle Ile", type: "Creperia", mapLink: "https://maps.app.goo.gl/4buQpgjXCVjwP3iZA" }
                ]
            },
            timeline: [
                { time: "07:00", icon: "fa-mug-hot", title: "Pequeno-almoço em casa",
                    mealSuggestion: {
                        suggestion: "Refeição reforçada em casa, antes da longa viagem de RER para Versalhes.",
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
            mapLink: "https://maps.app.goo.gl/SVUXBAM5yxQckn8w6", // <-- LINK ATUALIZADO
            rainyDayAlternatives: {
                title: "Plano B (Chuva): Restaurantes em Montmartre",
                restaurants: [
                    { name: "Pizza Gigi Montmartre", type: "Restaurante italiano", mapLink: "https://maps.app.goo.gl/Lg3a52PD1bRf9zUS9" },
                    { name: "La Porteña", type: "Restaurante argentino", mapLink: "https://maps.app.goo.gl/i2nYHq5b3ejoJStc6" },
                    { name: "Colline d'Asie - Del Sarte", type: "Restaurante cambojano", mapLink: "https://maps.app.goo.gl/PMXt9wDe95Y4jgDk7" }
                ]
            },
            timeline: [ // <-- TIMELINE COMPLETAMENTE REFEITA
                { time: "15:35", icon: "fa-heart", title: "Muro do Eu Te Amo", description: "Visita/fotos: ~10 min. Saída: 15:45" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~7 min a pé." },
                { time: "15:52", icon: "fa-store", title: "Franprix", description: "Pequena paragem (água/snack): ~5 min. Saída: 15:57" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~1 min a pé." },
                { time: "15:57", icon: "fa-tree", title: "Square Louise Michel", description: "Passeio breve, fotos: ~10 min. Saída: 16:07" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "16:07", icon: "fa-place-of-worship", title: "Basílica do Sacré-Cœur", guideLink: "visita_montmartre.html", description: "Subida/funicular + visita + vista: ~45 min. Saída: 16:52" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "16:52", icon: "fa-palette", title: "Place du Tertre", description: "Passeio pela praça dos artistas, fotos: ~30 min. Saída: 17:22" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~2 min a pé." },
                { time: "17:22", icon: "fa-ice-cream", title: "Lanche da tarde em Montmartre", description: "Duração: ~20 min. Saída: 17:42",
                    mealSuggestion: {
                        suggestion: "Pausa para um crepe, croissant ou outra pastelaria local numa das muitas 'boulangeries' de Montmartre.",
                    }
                },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~3 min a pé." },
                { time: "17:42", icon: "fa-utensils", title: "Le Consulat & La Maison Rose", description: "Fotos rápidas: ~10 min. Saída: 17:52" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~2 min a pé." },
                { time: "17:52", icon: "fa-wind", title: "Moulin de la Galette (Radet)", description: "Passagem rápida, fotos: ~5 min. Saída: 17:57" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~2 min a pé." },
                { time: "17:57", icon: "fa-mug-hot", title: "Café des Deux Moulins", description: "Paragem rápida/fotos: ~5 min. Saída: 18:02" },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "18:02", icon: "fa-wind", title: "Moulin Rouge", description: "Fotos finais: ~10 min. Saída: 18:12" },
                { time: "19:30", icon: "fa-utensils", title: "Jantar em Montmartre",
                    mealSuggestion: {
                        suggestion: "Jantar rápido e económico. A zona tem muitas opções de kebab, pizza ou falafel que são saborosas e baratas, antes de apanhar o metro.",
                    }
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
