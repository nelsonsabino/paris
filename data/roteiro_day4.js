// data/roteiro_day4.js
export const day4Data = {
    id: "day4",
    title: "Dia 4: Imersão em Arte e Charme Parisiense",
    date: "Segunda-Feira, 22 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia4a.png",
    sections: [
        {
            title: "CASA → MUSEU DO LOUVRE",
            mapLink: "https://maps.app.goo.gl/47SoBmDnHjDh9bUi7",
            timeline: [
                { time: "8:33", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "8:38", icon: "fa-route", title: "Percurso: Casa → Louvre", description: "Duração total: ~20 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "8:38: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Porte de Charenton</strong>, direção Balard." },
                        { text: "8:48: Trocar em Bastille", subText: "Sair do metro e seguir para a Linha 1." },
                        { text: "8:51: Apanhar Metro <span class='metro-line' style='background-color: #ffcd00; color: black;'>1</span>", subText: "Direção La Défense." },
                        { text: "8:58: Sair em Palais Royal - Musée du Louvre", subText: "" }
                    ]
                },
                { time: "9:00", icon: "fa-landmark-dome", title: "Museu do Louvre", requiresTicket: true, ticketLink: "https://www.ticketlouvre.fr/" },
                { time: "13:00", icon: "fa-utensils", title: "Almoço nas Proximidades do Louvre" }
            ]
        },
        {
            title: "PALAIS ROYAL → ÓPERA & GALERIES LAFAYETTE",
            mapLink: "https://maps.app.goo.gl/PDr1QqRANoiuuEJv8",
            timeline: [
                { icon: "fa-chess-board", title: "Palais Royal (Jardins e Colunas de Buren)" },
                { icon: "fa-archway", title: "Galerie Vivienne" },
                { icon: "fa-gem", title: "Place Vendôme" },
                { time: "15:30", icon: "fa-masks-theater", title: "Ópera Garnier", description: "Visita interior (~1h)", requiresTicket: true, ticketLink: "https://www.operadeparis.fr/billetterie/visites-palais-garnier" },
                { icon: "fa-store", title: "Galeries Lafayette", description: "Visita ao terraço para vista (~45min)" }
            ]
        },
        {
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
            title: "FILLES DU CALVAIRE → PRAÇA DES VOSGES",
            mapLink: "https://maps.app.goo.gl/MBQ3dAXYBiFW33Dn6",
            timeline: [
                { icon: "fa-utensils", title: "Marché des Enfants Rouges" },
                { icon: "fa-person-walking", title: "Explorar o Marais" },
                { icon: "fa-road", title: "Rue Vieille-du-Temple" },
                { icon: "fa-road", title: "Rue des Rosiers" },
                { icon: "fa-square-full", title: "Praça des Vosges" }
            ]
        },
        {
            title: "MARAIS → CASA",
            mapLink: "https://maps.app.goo.gl/oZJwgJTB8M8CWRHT7",
            timeline: [
                {
                    time: "20:12", icon: "fa-route", title: "Percurso: Le Marais → Casa", description: "Duração total: ~15 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "20:12: Apanhar Metro <span class='metro-line' style='background-color: #ceadd2; color: black;'>8</span>", subText: "Da estação <strong>Saint-Sébastien - Froissart</strong>, direção Créteil-Pointe du Lac." },
                        { text: "20:24: Sair em Porte de Charenton", subText: "" }
                    ]
                },
                { time: "21:08", icon: "fa-bed", title: "Regresso a Casa" }
            ]
        }
    ]
};
