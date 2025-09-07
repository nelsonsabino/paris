// data/roteiro_day3.js
export const day3Data = {
    id: "day3",
    title: "Dia 3: Realeza, Arte Boémia e Vistas Icónicas",
    date: "Domingo, 21 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia3a.png",
    sections: [
        {
            title: "CASA → VERSALHES",
            mapLink: "https://maps.app.goo.gl/QxRJ6gVoJ88yKXfH9",
            timeline: [
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
                { time: "08:50", icon: "fa-crown", title: "Palácio de Versalhes", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1JWHf_KUwofGdZgYj5wp0JswPyZcCs3ys/view?usp=drive_link", guideLink: "visita_versalhes.html" }
            ]
        },
        {
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
            title: "MONTMARTRE → MOULIN ROUGE",
            mapLink: "https://maps.app.goo.gl/DBCJQ62qSGpKDVL28",
            timeline: [
                { icon: "fa-heart", title: "Muro do Eu Te Amo (Le Mur des Je t'aime)" },
                { icon: "fa-tree", title: "Square Louise Michel" },
                { icon: "fa-place-of-worship", title: "Basílica de Sacré Cœur", guideLink: "visita_montmartre.html" },
                { icon: "fa-palette", title: "Place du Tertre" },
                { icon: "fa-utensils", title: "Le Consulat & La Maison Rose" },
                { icon: "fa-windmill", title: "Moulin Radet" },
                { icon: "fa-mug-hot", title: "Café des Deux Moulins" },
                { icon: "fa-wind", title: "Moulin Rouge" }
            ]
        },
        {
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
    ]
};
