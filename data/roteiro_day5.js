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
            title: "CACIFO DE MALAS → QUARTIER LATIN",
            mapLink: "https://maps.app.goo.gl/txr2n4YqygFrCiXj6",
            description: "Duração estimada do percurso a pé com visitas: ~3.5 horas",
            timeline: [
                { time: "09:30", icon: "fa-gem", title: "Sainte-Chapelle", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1ucQbtBDOxRx83d_m4Up5lnqzKcngOm3k/view?usp=drive_link", guideLink: "visita_sainte-chapelle.html", description: "Visita: ~1 hora" },
                { time: "10:40", icon: "fa-person-walking", title: "Rue de la Huchette & Igreja de São Severino", description: "Passeio: ~20 min" },
                { time: "11:15", icon: "fa-monument", title: "Saint-Étienne-du-Mont", description: "Visita: ~25 min" },
                { time: "11:50", icon: "fa-landmark-dome", title: "Panteão (Vista Exterior)", guideLink: "visita_quartier-latin.html", description: "Fotos: ~15 min" },
                { time: "12:15", icon: "fa-seedling", title: "Jardim do Luxemburgo", guideLink: "visita_jardim-luxemburgo.html", description: "Pausa e caminhada: ~45 min" },
                { time: "13:00", icon: "fa-person-walking", title: "Chegada à zona do Metro Saint-Sulpice" }
            ]
        },
        {
            title: "SAINT-SULPICE → CACIFO DE MALAS",
            mapLink: "https://maps.app.goo.gl/P5shdcrXpkbLhBHy8",
            timeline: [
                { time: "17:30", icon: "fa-utensils", title: "Fim do tempo livre/almoço e ida para o metro." },
                {
                    time: "17:35", icon: "fa-route", title: "Percurso: Saint-Sulpice → Cacifo", description: "Duração total: ~13 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "17:35: Apanhar Metro <span class='metro-line' style='background-color: #cf009e;'>4</span>", subText: "Da estação <strong>Saint-Sulpice</strong>, direção Porte de Clignancourt." },
                        { text: "17:40: Sair em Châtelet e caminhar até ao cacifo." }
                    ]
                },
                { time: "17:50", icon: "fa-suitcase", title: "Recolher Malas no Cacifo" }
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
