// data/roteiro_day1.js
const day1Data = {
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
            title: "METRO ORLY → CASA PARIS",
            mapLink: "https://maps.app.goo.gl/JCjyHWMVRRKshoWn6",
            timeline: [
                { time: "12:30", icon: "fa-utensils", title: "Pausa para Almoço e WC" },
                {
                    time: "15:34", icon: "fa-route", title: "Percurso: Aeroporto d'Orly → Casa", description: "Duração total: ~36 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "15:34: Apanhar Metro <span class='metro-line' style='background-color: #62259d;'>14</span>", subText: "Da estação <strong>Aéroport d'Orly</strong>, direção Saint-Denis." },
                        { text: "15:48: Trocar em Maison Blanche", subText: "Sair do metro e seguir para a paragem do elétrico (Tram)." },
                        { text: "15:54: Apanhar Tram <span class='metro-line' style='background-color: #ff7e2e; color: black;'>T3a</span>", subText: "Da paragem <strong>Porte d'Italie</strong>, direção Porte de Vincennes." },
                        { text: "16:04: Sair em Porte de Charenton", subText: "Saída final. Caminhar até casa." }
                    ]
                },
                { time: "16:10", icon: "fa-house-chimney", title: "Chegada a Casa" }
            ]
        },
        {
            title: "CASA → INVALIDES",
            mapLink: "https://maps.app.goo.gl/Y1V2eJg2R5B8XnL8A", // Novo link de mapa
            timeline: [
                { icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "18:25", icon: "fa-route", title: "Percurso: Casa → Invalides", description: "Duração total: ~20 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:05: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Porte de Charenton</strong>, direção Balard." },
                        { text: "18:25: Sair em Invalides", subText: "" }
                    ]
                }
            ]
        },
        {
            title: "INVALIDES - TOUR EIFFEL", // Título alterado
            mapLink: "https://maps.app.goo.gl/F4k8W8L1mBq1gK9f9", // Novo link de mapa
            timeline: [
                { icon: "fa-landmark-dome", title: "Hôtel des Invalides (Vista Exterior)" },
                { icon: "fa-bridge", title: "Ponte Alexandre III" },
                { icon: "fa-camera-retro", title: "Jardim do Trocadéro" },
                { time: "21:00", icon: "fa-tower-eiffel", title: "Torre Eiffel <i class='fa-solid fa-ticket ml-2 text-blue-600' title='Necessita de Bilhete para subir'></i>" }, // Horário e ícone de bilhete mantidos
                { icon: "fa-store", title: "Rue Cler" },
                { time: "23:00", icon: "fa-person-walking", title: "Ida para o Metro École Militaire" } // Horário mantido
            ]
        },
        {
            title: "ÉCOLE MILITAIRE → CASA", // Novo bloco para o regresso
            mapLink: "https://maps.app.goo.gl/uX8z5zZ9qW1wX2y9A", // Novo link de mapa
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
