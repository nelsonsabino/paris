// data/roteiro_day2.js
export const day2Data = {
    id: "day2",
    title: "Dia 2: Coração Histórico e Grandes Avenidas",
    date: "Sábado, 20 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia2b.png",
    sections: [
        {
            title: "CASA → ÎLE DE LA CITÉ",
            mapLink: "https://maps.app.goo.gl/v5BUzJtit2LJrWhr9",
            timeline: [
                { time: "8:26", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "8:29", icon: "fa-route", title: "Percurso: Casa → Hôtel de Ville", description: "Duração total: ~22 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "8:29: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Porte de Charenton</strong>, direção Balard." },
                        { text: "8:39: Trocar em Bastille", subText: "Sair do metro e seguir para a Linha 1." },
                        { text: "8:42: Apanhar Metro <span class='metro-line' style='background-color: #ffcd00; color: black;'>1</span>", subText: "Direção La Défense." },
                        { text: "8:51: Sair em Hôtel de Ville", subText: "" }
                    ]
                }
            ]
        },
        {
            title: "ÎLE DE LA CITÉ → SQUARE DU VERT-GALANT",
            mapLink: "https://maps.app.goo.gl/rUXPgUtAZMW1sijY7",
            timeline: [
                { time: "8:57", icon: "fa-coffee", title: "Au Vieux Paris d'Arcole" },
                { time: "9:10", icon: "fa-church", title: "Catedral de Notre-Dame & Point Zéro", description: "Visita interior (~30-45min.)", requiresTicket: true, ticketLink: "https://www.notredamedeparis.fr/visiter/" },
                { icon: "fa-book", title: "Shakespeare and Company" },
                { icon: "fa-church", title: "Igreja de São Severino" },
                { icon: "fa-person-walking", title: "Rue de la Huchette" },
                { icon: "fa-fountain", title: "Fontaine Saint-Michel" },
                { icon: "fa-flower", title: "Mercado das Flores Rainha Elizabeth II" },
                { icon: "fa-tree-city", title: "Place Dauphine" },
                { icon: "fa-tree", title: "Square du Vert-Galant" }
            ]
        },
        {
            title: "SQUARE DU VERT-GALANT → LE PETIT PALAIS",
            mapLink: "https://maps.app.goo.gl/Z2i67u12TGEfCiS17",
            timeline: [
                { icon: "fa-bridge", title: "Pont Neuf" },
                { icon: "fa-bridge", title: "Pont des Arts" },
                { icon: "fa-archway", title: "Arco do Triunfo do Carrossel" },
                { icon: "fa-fountain", title: "Jardim das Tulherias" },
                { icon: "fa-square-full", title: "Place de la Concorde" },
                { time: "15:30", icon: "fa-building-columns", title: "Musée d'Orsay", requiresTicket: false},
                { icon: "fa-landmark", title: "Petit Palais/Grand Palais (Exterior)" }
            ]
        },
        {
            title: "METRO ATÉ ARCO DO TRIUNFO",
            mapLink: "https://maps.app.goo.gl/833iy7seTNW8XpgP7",
            timeline: [
                {
                    time: "18:07", icon: "fa-route", title: "Percurso: Clemenceau → Arco do Triunfo", description: "Duração total: ~7 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "18:07: Apanhar Metro <span class='metro-line' style='background-color: #ffcd00; color: black;'>1</span>", subText: "Da estação <strong>Champs-Élysées - Clemenceau</strong>, direção La Défense." },
                        { text: "18:10: Sair em Charles de Gaulle – Étoile", subText: "" }
                    ]
                },
                { icon: "fa-archway", title: "Arco do Triunfo" },
                { icon: "fa-road", title: "Champs-Élysées" }
            ]
        },
        {
            title: "CHAMPS-ÉLYSÉES → CASA",
            mapLink: "https://maps.app.goo.gl/gfjS674H5TjMQ7jd9",
            timeline: [
                {
                    time: "20:37", icon: "fa-route", title: "Percurso: Champs-Élysées → Casa", description: "Duração total: ~31 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "20:37: Apanhar Metro <span class='metro-line' style='background-color: #ffcd00; color: black;'>1</span>", subText: "Da estação <strong>George V</strong>, direção Château de Vincennes." },
                        { text: "20:55: Trocar em Reuilly - Diderot", subText: "Sair do metro e seguir para a Linha 8." },
                        { text: "20:59: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Direção Créteil-Pointe du Lac." },
                        { text: "21:05: Sair em Porte de Charenton", subText: "" }
                    ]
                },
                { time: "21:08", icon: "fa-bed", title: "Regresso a Casa" }
            ]
        }
    ]
};
