// data/roteiro_day5.js
export const day5Data = {
    id: "day5",
    title: "Dia 5: Despedida com Charme e Regresso",
    date: "Terça-Feira, 23 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia5a.png",
    sections: [
        {
            title: "CASA → CACIFO DE MALAS",
            mapLink: "https://maps.app.goo.gl/wW3zVHupQH2CQmCb8",
            timeline: [
                { time: "08:27", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "08:30", icon: "fa-route", title: "Percurso: Casa → Cacifo", description: "Duração total: ~31 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "08:30: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Mairie d'Ivry." },
                        { text: "08:55: Sair em Pont Neuf", subText: "Caminhar ~3 min até ao cacifo." }
                    ]
                },
                { time: "08:58", icon: "fa-suitcase", title: "Bounce Luggage Storage - Louvre" }
            ]
        },
        {
            title: "MANHÃ NO QUARTIER LATIN",
            mapLink: "https://maps.app.goo.gl/txr2n4YqygFrCiXj6",
            description: "Duração estimada do percurso a pé com visitas: ~3.5 horas",
            timeline: [
                { time: "09:30", icon: "fa-gem", title: "Sainte-Chapelle", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1ucQbtBDOxRx83d_m4Up5lnqzKcngOm3k/view?usp=drive_link", guideLink: "visita_sainte-chapelle.html", description: "Visita: ~1 hora" },
                { time: "10:40", icon: "fa-person-walking", title: "Rue de la Huchette & Igreja de São Severino", description: "Passeio: ~20 min" },
                { time: "11:15", icon: "fa-monument", title: "Saint-Étienne-du-Mont", description: "Visita: ~25 min" },
                { time: "11:50", icon: "fa-landmark-dome", title: "Panteão (Vista Exterior)", guideLink: "visita_quartier-latin.html", description: "Fotos: ~15 min" },
                { time: "12:15", icon: "fa-seedling", title: "Jardim do Luxemburgo", guideLink: "visita_jardim-luxemburgo.html", description: "Pausa e caminhada: ~45 min" }
            ]
        },
        {
            title: "ALMOÇO E TARDE EM SAINT-GERMAIN-DES-PRÉS",
            mapLink: "https://maps.app.goo.gl/wJk4h6S8YtL6Q9C57",
            timeline: [
                { time: "13:00", icon: "fa-utensils", title: "Almoço descontraído", description: "Encontrar uma brasserie típica no bairro de Saint-Germain." },
                { time: "14:30", icon: "fa-church", title: "Igreja de Saint-Sulpice", description: "Visitar o interior e ver as pinturas de Delacroix." },
                { time: "15:15", icon: "fa-coffee", title: "Pausa num Café Icónico", description: "Sentar na esplanada do Les Deux Magots ou Café de Flore para um café e observar o movimento." },
                { time: "16:00", icon: "fa-person-walking", title: "Explorar o Bairro", description: "Passear pelas ruas charmosas como a Rue de Buci, ver as galerias de arte e as lojas de chocolate." }
            ]
        },
        {
            title: "SAINT-GERMAIN → CACIFO DE MALAS",
            mapLink: "https://maps.app.goo.gl/j4s4B1k6Nq7yV8tK9",
            timeline: [
                {
                    time: "17:30", icon: "fa-route", title: "Percurso: Saint-Germain → Cacifo", description: "Duração total: ~10 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "17:30: Apanhar Metro <span class='metro-line' style='background-color: #cf009e;'>4</span>", subText: "Da estação <strong>Saint-Germain-des-Prés</strong>, direção Porte de Clignancourt." },
                        { text: "17:35: Sair em Châtelet e caminhar até ao cacifo." }
                    ]
                },
                { time: "17:45", icon: "fa-suitcase", title: "Recolher Malas no Cacifo" }
            ]
        },
        {
            title: "CACIFO DE MALAS → AEROPORTO ORLY",
            mapLink: "https://maps.app.goo.gl/7tcmShAnygi9SJUA7",
            timeline: [
                {
                    time: "18:15", icon: "fa-route", title: "Percurso: Cacifo → Aeroporto Orly", description: "Duração total: ~30 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:15: Apanhar Metro <span class='metro-line' style='background-color: #62259d;'>14</span>", subText: "Da estação <strong>Châtelet</strong>, direção Aéroport d'Orly." },
                        { text: "18:41: Sair em Aéroport d'Orly" }
                    ]
                },
                { time: "18:45", icon: "fa-plane-departure", title: "Chegada ao Aeroporto Orly (Voo às 20:50)" }
            ]
        }
    ]
};
