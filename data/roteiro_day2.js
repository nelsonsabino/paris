// data/roteiro_day2.js
export const day2Data = {
    id: "day2",
    title: "Dia 2: Coração Histórico e Grandes Avenidas",
    date: "Sábado, 20 de Setembro",
    mapImage: "assets/images/Dia2b.png",
    highlights: [
        { name: "Notre-Dame", icon: "fa-church", link: "visita_notre-dame.html", imageUrl: "https://www.civitatis.com/f/francia/paris/guia/catedral-notre-dame.jpg" },
        { name: "Musée d'Orsay", icon: "fa-palette", link: "visita_musee-orsay.html", imageUrl: "https://asset-prod.france.fr/France_Seine_Paris_musee_d_Orsay_42258_Patrice_Schmidt_de06a75b85.jpg" },
        { name: "Jardim das Tulherias", icon: "fa-tree", link: "visita_jardim-tulherias.html", imageUrl: "https://cparici.com/wp-content/uploads/2025/08/cparici-2025-08-16T075320.195.jpg" },
        { name: "Arco do Triunfo", icon: "fa-archway", link: "visita_arco-do-triunfo.html", imageUrl: "https://blog.actafrika.net/wp-content/uploads/2021/09/arco-triunfo.jpg" }
    ],
    sections: [
        {
            id: "ida-cite",
            navTitle: "Ida",
            title: "CASA → ÎLE DE LA CITÉ",
            mapLink: "https://maps.app.goo.gl/ZLTXGwidLLW28Cpv5",
            timeline: [
                { time: "08:01", icon: "fa-house-chimney", title: "Saída de Casa" },
                {
                    time: "08:04", icon: "fa-route", title: "Percurso: Casa → Île de la Cité", description: "Duração total: ~37 min.",
                    accordion: [
                        { text: "08:04: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Fort d'Aubervilliers</strong>, direção Villejuif-Louis Aragon (18 paragens)." },
                        { text: "08:30: Sair em Châtelet", subText: "Caminhar ~8 min até ao ponto de partida na ilha, chegando às 08:38." }
                    ]
                }
            ]
        },
        {
            id: "ile-cite",
            navTitle: "Île Cité",
            title: "ÎLE DE LA CITÉ → SQUARE DU VERT-GALANT",
            mapLink: "https://maps.app.goo.gl/5E9U6Ka6DwobLj5e7",
            timeline: [
{ 
                    /*time: "-:-",*/ 
                    icon: "fa-basket-shopping", 
                    title: "Carrefour City", 
                    description: "Opcional para comprar sandes e bebidas. <a href='https://maps.app.goo.gl/cU5h3QfqqtbsB7U79' target='_blank' class='text-blue-600 hover:underline font-semibold'>(Ver no Mapa)</a>",
                    isLogistics: true // <-- Campo especial para o destaque
                },
                { time: "08:40", icon: "fa-coffee", title: "Au Vieux Paris d'Arcole", description: "Início do passeio, fotos rápidas (~10 min)." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé." },
                { time: "08:50", icon: "fa-church", title: "Catedral de Notre-Dame", description: "Visita principal. Se a fila for demasiado longa, visitaremos à noite (bilhete reservado para as 20:30).", requiresTicket: true, ticketLink: "https://drive.google.com/drive/folders/1oSk8g-YICideKP3QHB0Q7mGai2Yfihoh?usp=drive_link", guideLink: "visita_notre-dame.html", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~2 min a pé." },
                { time: "10:00", icon: "fa-book", title: "Shakespeare and Company", description: "Livraria histórica, fotos (~15 min). Saída prevista: 10:15." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé." },
                { time: "10:25", icon: "fa-church", title: "Igreja de São Severino", description: "Visita interior/exterior (~15 min). Saída prevista: 10:40." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "10:45", icon: "fa-road", title: "Rue de la Huchette", description: "Passeio rápido, ambiente da rua (~10 min). Saída prevista: 10:55." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "11:00", icon: "fa-fountain", title: "Fontaine Saint-Michel", description: "Fotos rápidas, breve paragem (~10 min). Saída prevista: 11:10." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "11:15", icon: "fa-leaf", title: "Mercado das Flores Rainha Elizabeth II", description: "Passeio e fotos (~15 min). Saída prevista: 11:30.", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~5 min a pé." },
                { time: "11:35", icon: "fa-tree-city", title: "Place Dauphine", description: "Breve visita, fotos (~10 min). Saída prevista: 11:45." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~3 min a pé." },
                { time: "11:48", icon: "fa-tree", title: "Square du Vert-Galant", description: "Pausa final, fotos, contemplação do Sena (~10 min). Saída prevista: 11:58." },
            ]
        },
        {
            id: "tulherias-arco", // ID ATUALIZADO
            navTitle: "Tarde a Pé",    // navTitle ATUALIZADO
            title: "SQUARE DU VERT-GALANT → ARCO DO TRIUNFO", // TÍTULO ATUALIZADO
            mapLink: "https://maps.app.goo.gl/ywsRRywyqL4Laeoq9", // NOVO LINK DE MAPA
            timeline: [ // TIMELINE COMPLETAMENTE REFEITA
                { time: "12:00", icon: "fa-bridge", title: "Pont Neuf", description: "Passeio rápido, fotos (~10 min)." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~10 min a pé desde Pont Neuf." },
                { time: "12:10", icon: "fa-bridge", title: "Pont des Arts", description: "Passeio, fotos e apreciar vista do Sena (~10 min)." },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~11 min a pé desde Pont des Arts." },
                { time: "12:20", icon: "fa-archway", title: "Arco do Triunfo do Carrossel", description: "Passeio rápido, fotos (~10 min).", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~8 min a pé desde o Arco." },
                { time: "12:30", icon: "fa-tree", title: "Jardim das Tulherias", description: "Passeio pelos jardins, fotos (~20 min).", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~8 min a pé desde os Jardins." },
                { time: "12:50", icon: "fa-square-full", title: "Place de la Concorde", description: "Breve visita, fotos (~10 min)." },
                { time: "13:00", icon: "fa-utensils", title: "Almoço", 
                    mealSuggestion: {
                        suggestion: "Optar por uma 'formule' de padaria (sandes + bebida + sobremesa). É prático e económico para comer ao ar livre nos jardins.",
                    }
                },
                { time: "14:30", icon: "fa-person-walking", title: "Caminhada até Musée d’Orsay", description: "~10 min a pé desde Place de la Concorde." },
                { time: "15:30", icon: "fa-building-columns", title: "Musée d'Orsay", requiresTicket: true, ticketLink: "https://drive.google.com/file/d/1Bu_gwN7g8FUIv_qIG1aK_RuN7e0ACQcr/view?usp=drive_link", guideLink: "visita_musee-orsay.html", description: "Entrada na porta A. Visita recomendada: 1h30-2h.", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé", description: "~19 min a pé desde o Musée d'Orsay." },
                { time: "17:30", icon: "fa-landmark", title: "Petit Palais / Grand Palais", description: "Observação exterior e fotos rápidas (~20 min).", isHighlight: true  },
                { icon: "fa-person-walking", title: "Percurso a pé pelos Champs-Élysées", description: "~27 min a pé desde o Petit Palais / Grand Palais." },
                { time: "18:30", icon: "fa-archway", title: "Arco do Triunfo", guideLink: "visita_arco-do-triunfo.html", isHighlight: true  }
            ]
        },
               {
            id: "ida-notre-dame-noite",
            navTitle: "Ida Notre-Dame",
            title: "ARCO DO TRIUNFO → NOTRE DAME",
            mapLink: "https://maps.app.goo.gl/5jNbJpCh5qt8GJP28", // <-- LINK ATUALIZADO
            timeline: [
                {
                    time: "19:35", // <-- HORA ATUALIZADA
                    icon: "fa-route", 
                    title: "Percurso de Metro", 
                    description: "Duração total: ~20 min. Clica para ver os detalhes.", // <-- DURAÇÃO ATUALIZADA
                    accordion: [ // <-- PERCURSO ATUALIZADO
                        { text: "19:35: Apanhar Metro <span class='metro-line' style='background-color: #ffcd00; color: black;'>1</span>", subText: "Da estação <strong>Charles de Gaulle – Étoile</strong>, direção Château de Vincennes." },
                        { text: "19:46: Sair em Hôtel de Ville", subText: "Caminhar ~8 min até à catedral." }
                    ]
                },
                { time: "20:30", icon: "fa-church", title: "Visita Noturna a Notre-Dame", requiresTicket: true, ticketLink: "https://drive.google.com/drive/folders/1oSk8g-YICideKP3QHB0Q7mGai2Yfihoh?usp=drive_link", guideLink: "visita_notre-dame.html", isHighlight: true  }
            ]
        },
        {
            id: "regresso-d2",
            navTitle: "Regresso",
            title: "NOTRE DAME → CASA",
            mapLink: "https://maps.app.goo.gl/WavwKebKkpT9cbcu8", // Link pode ser ajustado se necessário, mantive o anterior
            timeline: [
                {
                    time: "21:11", // <-- HORA ATUALIZADA
                    icon: "fa-route", 
                    title: "Percurso de Metro para Casa", 
                    description: "Duração total: ~27 min. Clica para ver os detalhes.", // <-- DURAÇÃO ATUALIZADA
                    accordion: [ // <-- PERCURSO ATUALIZADO
                        { text: "21:11: Apanhar Metro <span class='metro-line' style='background-color: #fa9aaa;'>7</span>", subText: "Da estação <strong>Châtelet</strong>, direção La Courneuve-8-Mai-1945." },
                        { text: "21:36: Sair em Fort d'Aubervilliers", subText: "Caminhar ~2 min até casa." }
                    ]
                },
                { time: "21:38", icon: "fa-bed", title: "Regresso a Casa e Jantar" } // <-- HORA ATUALIZADA
            ]
        }
    ],
     shoppingInfo: {
        title: "Dicas de Compras do Dia",
       shopping: {
            title: "Pontos de Compra Sugeridos",
            where: {
                description: "<strong>Supermercado no Quartier Latin:</strong> Franprix na 32 Rue Saint-André des Arts. Bom para reabastecer snacks e bebidas antes de seguir para a zona das Tulherias e Champs-Élysées (onde os preços são mais altos).",
                locations: [
                    { name: "Franprix", link: "https://maps.app.goo.gl/FoV2c5YnBiqtz7u96" }
                ]
            }
        }
    }
};
