// data/roteiro_day5.js
const day5Data = {
    id: "day5",
    title: "Dia 5: Despedida com Charme e Regresso",
    date: "Terça-Feira, 23 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia5a.png",
    sections: [
        {
            title: "CASA → CACIFO DE MALAS",
            mapLink: "https://maps.app.goo.gl/zAw8ipRidarLpRDd6",
            timeline: [
                { time: "08:28", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "08:33", icon: "fa-route", title: "Percurso: Casa → Cacifo", description: "Duração total: ~30 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "08:33: Caminhar até <strong>Porte de Charenton</strong>", subText: "Cerca de 5 min, 250 m." },
                        { text: "08:33: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Porte de Charenton</strong>, direção Balard." },
                        { text: "08:40: Chegar a Reuilly - Diderot e Caminhar", subText: "Cerca de 2 min até à linha 1." },
                        { text: "08:44: Apanhar Metro <span class='metro-line' style='background-color: #ffcd00; color: black;'>1</span>", subText: "Da estação <strong>Reuilly - Diderot</strong>, direção La Défense (Grande Arche)." },
                        { text: "08:53: Chegar a Louvre - Rivoli e Caminhar", subText: "Cerca de 5 min, 290 m até ao cacifo." }
                    ]
                },
                { time: "08:58", icon: "fa-suitcase", title: "Bounce Luggage Storage - Louvre" }
            ]
        },
        {
            title: "CACIFO DE MALAS → QUARTIER LATIN",
            mapLink: "https://maps.app.goo.gl/txr2n4YqygFrCiXj6",
            timeline: [
                { time: "09:30", icon: "fa-gem", title: "Sainte-Chapelle <i class='fa-solid fa-ticket ml-2 text-blue-600' title='Necessita de Bilhete'></i>" },
                { icon: "fa-person-walking", title: "Rue de la Huchette" },
                { icon: "fa-church", title: "Igreja de São Severino" },
                { icon: "fa-monument", title: "Saint-Étienne-du-Mont" },
                { icon: "fa-landmark-dome", title: "Panteão (Vista Exterior)" },
                { icon: "fa-seedling", title: "Jardim do Luxemburgo" },
                { time: "13:00", icon: "fa-person-walking", title: "Ida para o Metro Saint-Sulpice" }
            ]
        },
        {
            title: "SAINT-SULPICE → CACIFO DE MALAS",
            mapLink: "https://maps.app.goo.gl/P5shdcrXpkbLhBHy8",
            timeline: [
                {
                    time: "13:00", icon: "fa-route", title: "Percurso: Saint-Sulpice → Cacifo", description: "Duração total: ~13 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "13:00: Apanhar Metro <span class='metro-line' style='background-color: #cf009e;'>4</span>", subText: "Da estação <strong>Saint-Sulpice</strong>, direção Porte de Clignancourt." },
                        { text: "13:05: Sair em Châtelet e caminhar até ao cacifo", subText: "" }
                    ]
                },
                { time: "13:13", icon: "fa-suitcase", title: "Recolher Malas no Cacifo" }
            ]
        },
        {
            title: "CACIFO DE MALAS → AEROPORTO ORLY",
            mapLink: "https://maps.app.goo.gl/7tcmShAnygi9SJUA7",
            timeline: [
                {
                    time: "13:25", icon: "fa-route", title: "Percurso: Cacifo → Aeroporto Orly", description: "Duração total: ~30 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "13:25: Apanhar Metro <span class='metro-line' style='background-color: #62259d;'>14</span>", subText: "Da estação <strong>Châtelet</strong>, direção Aéroport d'Orly." },
                        { text: "13:51: Sair em Aéroport d'Orly", subText: "" }
                    ]
                },
                { time: "13:55", icon: "fa-plane-departure", title: "Chegada ao Aeroporto Orly T1" }
            ]
        }
    ]
};
