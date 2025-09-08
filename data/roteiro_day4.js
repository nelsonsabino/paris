// data/roteiro_day4.js
export const day4Data = {
    id: "day4",
    title: "Dia 4: Imersão em Arte e Charme Parisiense",
    date: "Segunda-Feira, 22 de Setembro",
    mapImage: "https://nelsonsabino.github.io/paris/Dia4a.png",
    sections: [
        {
            title: "CASA → MUSEU DO LOUVRE",
            mapLink: "https://maps.app.goo.gl/HWn3htQ9Ewh4bVmi7",
            timeline: [
                { time: "08:15", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "08:18", icon: "fa-route", title: "Percurso: Casa → Louvre", description: "Duração total: ~29 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "08:18: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Mairie d'Ivry." },
                        { text: "08:42: Sair em Palais Royal - Musée du Louvre", subText: "Caminhar ~2 min até à entrada." }
                    ]
                },
                { time: "09:00", icon: "fa-landmark-dome", title: "Museu do Louvre", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1zgpLvPJtgUGnMsOFsIbfg3tGwhPSse0w/view?usp=sharing", guideLink: "visita_louvre.html", description: "O museu tem várias casas de banho no interior." },
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
                { time: "15:00", icon: "fa-masks-theater", title: "Ópera Garnier", description: "Visita interior (~1h)", requiresTicket: true, ticketLink: "https://drive.google.com/drive/folders/1LzpXOo9CjPe37kIHkBRFG0Xy4sy5Kwg7?usp=sharing", guideLink: "visita_opera-garnier.html" },
                { icon: "fa-store", title: "Galeries Lafayette", description: "Visita ao terraço para vista (~45min)", guideLink: "visita_galeries-lafayette.html" },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>Dentro das Galeries Lafayette (recomendado)</li>
                            <li>4 Rue Scribe (perto da Ópera) - <a href='https://www.google.com/maps/search/?api=1&query=48.8711,2.3308' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                }
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
            description: "Duração estimada do percurso a pé com visitas: ~1.5 - 2 horas",
            timeline: [
                { time: "18:45", icon: "fa-utensils", title: "Marché des Enfants Rouges", description: "Passeio pelo mercado: ~30 min" },
                { time: "19:15", icon: "fa-person-walking", title: "Explorar o Marais", description: "Passeio pela Rue Vieille-du-Temple e Rue des Rosiers: ~45 min" },
                { time: "20:00", icon: "fa-square-full", title: "Praça des Vosges", description: "Chegada e visita: ~15 min" },
                {
                    icon: "fa-restroom",
                    title: "Casas de Banho Próximas",
                    description: `
                        <ul class='list-disc list-inside text-sm'>
                            <li>7 Rue de Bretagne (perto do mercado) - <a href='https://www.google.com/maps/search/?api=1&query=48.8617,2.3621' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                            <li>Place des Vosges - <a href='https://www.google.com/maps/search/?api=1&query=48.8553,2.3653' target='_blank' class='text-blue-600'>Ver Mapa</a></li>
                        </ul>
                    `
                }
            ]
        },
        {
            title: "MARAIS → CASA",
            mapLink: "https://maps.app.goo.gl/EKhGAzi27pZ2JzrB8",
            timeline: [
                {
                    time: "20:01", icon: "fa-route", title: "Percurso: Le Marais → Casa", description: "Duração total: ~32 min. Clica para ver os detalhes.",
                    accordion: [
                        { text: "20:09: Apanhar Metro <span class='metro-line' style='background-color: #f19e38;'>5</span>", subText: "Da estação <strong>Bréguet - Sabin</strong>, direção Bobigny-Pablo-Picasso." },
                        { text: "20:16: Trocar em Gare de l'Est", subText: "Sair do metro e seguir para a Linha 7." },
                        { text: "20:18: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Gare de l'Est</strong>, direção La Courneuve-8-Mai-1945." },
                        { text: "20:31: Sair em Fort d'Aubervilliers", subText: "Caminhar ~2 min até casa." }
                    ]
                },
                { time: "20:33", icon: "fa-bed", title: "Regresso a Casa" }
            ]
        }
    ]
};
