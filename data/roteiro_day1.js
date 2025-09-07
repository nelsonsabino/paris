// data/roteiro_day1.js
export const day1Data = {
    id: "day1",
    title: "Dia 1: Chegada e a Magia da Torre Eiffel",
    date: "Sexta-feira, 19 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia1b.png", // Imagem do mapa geral do dia
    sections: [
        {
            title: "ALENQUER → TERMINAL 2",
            mapLink: "https://maps.app.goo.gl/UDWRJ6vJieWfL2G19",
            timeline: [
                { time: "6:00", icon: "fa-car", title: "Saída de Casa" },
                { time: "6:45", icon: "fa-plane", title: "Chegada ao Aeroporto" },
                { time: "8:00", icon: "fa-ticket", title: "Fecho do Embarque T2" },
                { time: "8:50", icon: "fa-plane-departure", title: "Descolagem" },
                { time: "12:20", icon: "fa-plane-arrival", title: "Chegada a Paris" }
            ]
        },
        {
            title: "AEROPORTO ORLY → CASA",
            mapLink: "https://maps.app.goo.gl/q6K1k6T7p6qCjXg16",
            timeline: [
                { time: "12:30", icon: "fa-utensils", title: "Pausa para Almoço e WC" },
                {
                    time: "13:30", icon: "fa-route", title: "Percurso: Aeroporto d'Orly → Casa", description: "Duração total: ~54 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "13:30: Apanhar Metro <span class='metro-line' style='background-color: #62259d;'>14</span>", subText: "Da estação <strong>Aéroport d'Orly</strong>, direção Saint-Denis - Pleyel." },
                        { text: "13:57: Trocar em Pyramides", subText: "Sair do metro e seguir para a Linha 7." },
                        { text: "14:01: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Pyramides</strong>, direção La Courneuve-8-Mai-1945." },
                        { text: "14:22: Sair em Fort d'Aubervilliers", subText: "Saída final. Caminhar ~2 min até casa." }
                    ]
                },
                { time: "14:24", icon: "fa-house-chimney", title: "Chegada a Casa" }
            ]
        },
        {
            title: "CASA → INVALIDES",
            mapLink: "https://maps.app.goo.gl/G63y2zV5y2rS1V577",
            timeline: [
                { time: "18:05", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "18:07", icon: "fa-route", title: "Percurso: Casa → Invalides", description: "Duração total: ~33 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:07: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Mairie d'Ivry." },
                        { text: "18:27: Trocar em Opéra", subText: "Sair do metro e seguir para a Linha 8." },
                        { text: "18:31: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Opéra</strong>, direção Balard." },
                        { text: "18:38: Sair em Invalides", subText: "" }
                    ]
                }
            ]
        },
        {
            title: "INVALIDES - TOUR EIFFEL",
            mapLink: "https://maps.app.goo.gl/F4k8W8L1mBq1gK9f9",
            timeline: [
                { icon: "fa-landmark-dome", title: "Hôtel des Invalides (Vista Exterior)" },
                { icon: "fa-bridge", title: "Ponte Alexandre III" },
                { icon: "fa-camera-retro", title: "Jardim do Trocadéro" },
                { time: "21:00", icon: "fa-tower-observation", title: "Torre Eiffel", requiresTicket: true, ticketLink: "https://www.toureiffel.paris/fr/tarifs-horaires", guideLink: "visita_torre-eiffel.html" },
                { icon: "fa-store", title: "Rue Cler" },
                { time: "23:00", icon: "fa-person-walking", title: "Ida para o Metro École Militaire" }
            ]
        },
        {
            title: "ÉCOLE MILITAIRE → CASA",
            mapLink: "https://maps.app.goo.gl/uX8z5zZ9qW1wX2y9A",
            timeline: [
                {
                    icon: "fa-route", title: "Percurso: École Militaire → Casa", description: "Duração total: ~15 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "23:05: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>École Militaire</strong>, direção Créteil-Pointe du Lac." },
                        { text: "23:20: Sair em Porte de Charenton", subText: "" }
                    ]
                },
                { icon: "fa-bed", title: "Regresso a Casa" }
            ]
        }
    ]
};
