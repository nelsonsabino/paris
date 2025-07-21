// data/roteiro_day3.js
const day3Data = {
    id: "day3",
    title: "Dia 3: Realeza, Arte Boémia e Vistas Icónicas",
    date: "Domingo, 21 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia3a.png",
    sections: [
        {
            title: "CASA → VERSALHES",
            mapLink: "https://maps.app.goo.gl/iaVo5sGmpP3SerWF6",
            timeline: [
                { time: "8:00", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "8:07", icon: "fa-route", title: "Percurso: Casa → Versailles", description: "Duração total: ~58 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "8:07: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Michel Bizot</strong>, direção Balard." },
                        { text: "8:30: Trocar em Invalides", subText: "Sair do metro e seguir para o RER C." },
                        { text: "8:34: Apanhar RER <span class='metro-line' style='background-color: #f3d311; color: black;'>C</span>", subText: "Direção Versailles Château Rive Gauche." },
                        { text: "9:05: Sair em Versailles", subText: "" }
                    ]
                },
                { time: "9:21", icon: "fa-crown", title: "Palácio de Versalhes <i class='fa-solid fa-ticket ml-2 text-blue-600' title='Necessita de Bilhete'></i>" }
            ]
        },
        {
            title: "VERSALHES → MONTMARTRE",
            mapLink: "https://maps.app.goo.gl/9PTbkngBqnhKFAp3A",
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
                { icon: "fa-place-of-worship", title: "Basílica de Sacré Cœur" },
                { icon: "fa-palette", title: "Place du Tertre" },
                { icon: "fa-utensils", title: "Le Consulat & La Maison Rose" },
                { icon: "fa-windmill", title: "Moulin Radet" },
                { icon: "fa-mug-hot", title: "Café des Deux Moulins" },
                { icon: "fa-wind", title: "Moulin Rouge" }
            ]
        }
    ]
};
